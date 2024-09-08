import {useNavigate} from "react-router";
import {useState} from "react";
import {Form} from "react-bootstrap";
import logo from "../assets/presentationAI.svg";
import go from "../assets/go.svg";

export function LoginPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUser = () => {
        navigate("/main")
        // authenticationUser(new AuthenticationData(login, password))
    }

    return <div id="login" className="container-fluid p-0 overflow-hidden overflow-y-hidden">
        <div className="login-box px-5 pt-5 pb-4 row">
            <div className="login-back container">
                <img className="p-4" src={logo} alt=""/>

                <h3 className="mt-3 mb-4">Вход</h3>

                <Form>
                    <Form.Group className="mb-3 shadow-none no-border br-36" controlId="formBasicEmail">
                        <Form.Control className="form-control text-field shadow-none no-border" type="text"
                                      placeholder="Enter email" value={login}
                                      onChange={(e) => setLogin(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-5 shadow-none no-border br-36" controlId="formBasicPassword">
                        <Form.Control className="form-control text-field shadow-none no-border" type="password"
                                      placeholder="Password" value={password}
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
                <a><p className="fc-fio mb-3">Зарегистрироваться</p></a>
            </div>
        </div>
    </div>
}