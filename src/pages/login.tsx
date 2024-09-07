import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {useUserStore} from "../data/stores/useUserStore.ts";
import {AuthenticationData} from "../domain/models/AuthenticationData.ts";
import {useUser} from "../domain/hooks/useUser.ts";
import {User} from "../domain/models/User.ts";
import {Success} from "../api/result.ts";

export function LoginPage() {
    const authenticationUser = useUserStore(state => state.authenticationUser);
    const user = useUser();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if (user instanceof Success<User>)
            navigate("/main")
    }, [user])

    const loginUser = () => {
        authenticationUser(new AuthenticationData(login, password))
    }

    return <div>
        <h1>Login</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={login}
                              onChange={(e) => setLogin(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                              onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <button type={"button"} onClick={loginUser}>
                Submit
            </button>
        </Form>
    </div>
}