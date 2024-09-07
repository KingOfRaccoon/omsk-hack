import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Root from "./pages/root.tsx";
import {RouterProvider} from "react-router";
import {LoginPage} from "./pages/login.tsx";
import {RedactorPage} from "./pages/redactor.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/registration" element={<LoginPage/>}/>
            <Route path="/main" element={<Root/>}/>
            <Route path="/redactor" element={<RedactorPage/>}/>
        </Route>
    )
)

function App() {
    return <div><RouterProvider router={router}/></div>
}

export default App
