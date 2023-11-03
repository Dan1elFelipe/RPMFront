import "./Style.css"
import { Link } from "react-router-dom"

export const Login = () => {
    return(
        <>
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-secondary">
            <div className="form_container p-5 rounded bg-white">    
                <form action="">
                    <h3>Login</h3>
                    <div className="mb-2">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Ingresa Email" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Password">Contrasena</label>
                        <input type="password" placeholder="Ingresa Contraseña" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label htmlFor="check" className="custom-input-label">Recuerdame</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sing in</button>
                    </div>
                    <p className="text-end mt-2">
                        Olvidaste la <a href="">Contraseña?</a><Link to="/Signup" className="ms-2">Registrate</Link>
                    </p>
                </form>
            </div>
            </div>
        </>
    )
}