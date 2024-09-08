import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {useUserStore} from "../data/stores/useUserStore.ts";
import {AuthenticationData} from "../domain/models/AuthenticationData.ts";
import {useUser} from "../domain/hooks/useUser.ts";
import {Success} from "../api/result.ts";
import back from "../assets/backImg.png";
import go from "../assets/go.svg";

export function LoginPage() {
    const authenticationUser = useUserStore(state => state.authenticationUser);
    const user = useUser();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if (user instanceof Success)
            navigate("/main")
    }, [user])

    const loginUser = () => {
        authenticationUser(new AuthenticationData(login, password))
    }

    return <div id="login" className="container-fluid p-0 overflow-hidden overflow-y-hidden">
        {/*<img className="back-img" src={back} alt=""/>*/}
        <div className="login-box px-5 pt-5 pb-4 row">
            <div className="login-back container">
                <h2 className="mt-3 mb-4">Вход</h2>
                <Form>
                    <Form.Group className="mb-3 shadow-none no-border br-36" controlId="formBasicEmail">
                        <Form.Control className="form-control text-field shadow-none no-border" type="text" placeholder="Enter email" value={login}
                                      onChange={(e) => setLogin(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-5 shadow-none no-border br-36" controlId="formBasicPassword">
                        <Form.Control className="form-control text-field shadow-none no-border" type="password" placeholder="Password" value={password}
                                      onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <button
                        className="mt-5 mb-4 align-items-center hstack align-items-center hstack m-0 p-3 bg-fio br-36 align-items-center mx-auto"
                        onClick={loginUser}>
                        <div className="icon-box bg-white">
                            <img src={go} alt=""/>
                        </div>
                        <div className="text-start ms-2">
                            <h3 className="fc-white">Войти в аккаунт</h3>
                        </div>
                    </button>
                </Form>
            </div>
        </div>
    </div>
}