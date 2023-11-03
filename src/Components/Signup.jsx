import { Link } from "react-router-dom"

export const Signup = () => {
    return(    
        <>
        <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-secondary">
            <div className="form_container p-5 rounded bg-white">    
                <form action="">
                    <h3>Registrate</h3>
                    <div className="mb-2">
                        <label htmlFor="fname">Nombre</label>
                        <input type="text" placeholder="Ingresa tu Nombre" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lname">Apellido</label>
                        <input type="text" placeholder="Ingresa tu Apellido" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Ingresa Email" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Password">Contrasena</label>
                        <input type="password" placeholder="Ingresa Contraseña" className="form-control"/>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Registrate</button>
                    </div>
                    <p className="text-end mt-2">
                        Ya tienes cuenta?<Link to="/" className="ms-2">Ingresa</Link>
                    </p>
                </form>
            </div>
            </div>
        </>
    )
}