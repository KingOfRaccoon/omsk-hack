import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Root from "./pages/root.tsx";
import {RouterProvider} from "react-router";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} />
    )
)

function App() {
  return <div><RouterProvider router={router} /></div>
}

export default App
