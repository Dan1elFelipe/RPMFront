import React from 'react';
import ReactDOM from 'react-dom/client';
//Dependences
import {createBrowserRouter, RouterProvider} from "react-router-dom"


//Components
import { Login } from './Components/Login';
import {Signup}  from "./Components/Signup";
import { Page } from './Components/Page';
import {ProtectedRoute}  from './Components/ProtectRoute';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Auth/AuthProvider';

//Route
const router = createBrowserRouter([
    {   //Pagina principal, es ahora el login
        path: "/",
        element: <Login/>,
    },
    {   //El registro
        path: "/signup",
        element: <Signup/>,
    },
    {   //Proteccion de ruta, para la pagina principal o la page
        path: "/",
        element: <ProtectedRoute/>,
        children: [
            {
                path: "/page",
                element: <Page/>,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>        
    </React.StrictMode>
)