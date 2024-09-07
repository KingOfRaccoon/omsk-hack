import {useNavigate} from "react-router";

export function LoginPage() {
    const navigate = useNavigate();
    return <div>
        <h1>Login</h1>
        <button onClick={() => navigate("/main")}>TEST</button>
    </div>
}