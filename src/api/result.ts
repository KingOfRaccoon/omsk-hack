export abstract class Result<T> {
    protected constructor(protected _data: T | null, _message: string | null = null, _status: number | null = null) {}
}

export class Success<T> extends Result<T> {
    constructor(public data: T) {
        super(data);
    }
}

export class Loading<T> extends Result<T> {
    constructor(data: T | null = null) {
        super(data);
    }
}

export class ErrorResult extends Result<any> {
    constructor(public message: string, status: number = 0) {
        super(null, message, status);
    }
}
