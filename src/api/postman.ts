import axios from 'axios';
import {ErrorResult, Result, Success} from "./result.ts";

class Postman {
    async get<T>(
        baseUrl: string,
        route: string,
        params: Record<string, any> = {},
        headers: Record<string, any> = {},
        token: string | null = null
    ): Promise<Result<T>> {
        console.log('get url: ', baseUrl, route);
        if (Object.keys(params).length > 0) console.log('params: ', params);
        if (Object.keys(headers).length > 0) console.log('headers: ', headers);
        try {
            const result = await axios.get(
                baseUrl + route,
                {
                    method: 'GET',
                    headers: token ? {...headers, 'Authorization': token} : {...headers},
                    params: params,
                    withCredentials: false,
                }
            )
            console.log(result.data);
            return new Success(result.data);
        } catch (error) {
            return new ErrorResult(
                axios.isAxiosError(error) && error.response ? `Ошибка HTTP: ${error.response.status} ${error.response.statusText}` : "Неизвестная ошибка"
            );
        }
    }

    async post<T>(
        baseUrl: string,
        route: string,
        token: string | null = null,
        body: any | null = null,
        headers: Record<string, any> = {},
    ): Promise<Result<T>> {
        console.log('post url: ', baseUrl, route);
        if (body) console.log('body: ', body);
        if (Object.keys(headers).length > 0) console.log('headers: ', headers);
        try {
            const result = await axios.post(
                baseUrl + route,
                {
                    method: 'POST',
                    headers: token ? {...headers, 'Authorization': token} : {...headers},
                    body: body,
                    withCredentials: false,
                }
            )
            console.log(result.data);
            return new Success(result.data);
        } catch (error) {
            return new ErrorResult(
                axios.isAxiosError(error) && error.response ? `Ошибка HTTP: ${error.response.status} ${error.response.statusText}` : "Неизвестная ошибка"
            );
        }
    }
}

export const postman = new Postman();