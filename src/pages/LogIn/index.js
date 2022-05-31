import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/actions";
import { userAuthLogin, userInfoById } from "../../requests/sessionRequest.js";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    const onLogin = () => {
        if (email.length === 0 || !validateEmail()) {
            alert("Ingresa un correo válido");
        } else if (password.length < 8) {
            alert("Ingresa una contraseña válida");
        } else {
            setLoading(true);
            console.log(email, password);
            userAuthLogin({ email: email, password: password })
                .then(loginData => {
                    userInfoById(loginData.agentId)
                        .then(_ => {
                            console.log(loginData);
                            if (loginData.error) {
                                console.log(loginData.error)
                                alert("Credenciales inválidas");
                                setLoading(false);
                            } else {
                                dispatch(userLogin({
                                    userName: loginData.username,
                                    userEmail: email,
                                    userToken: loginData.token,
                                    userTokenType: 'Bearer',
                                    userId: 1,
                                }));
                                setLoading(false);
                                navigate("/home");
                            }
                        })
                })
                .catch(error => {
                    console.log(error)
                    alert("Ha ocurrido un error\nInténtalo de nuevo");
                    setLoading(false);
                });
        }
    };


    return (
        <div className="auth-container">
            <h2>Iniciar Sesión</h2>
            {isLoading ? <div className="loading">Loading&#8230;</div> : null}
            <div className="form-outline mb-4">
                <label className="form-label" for="form1Example1">Correo electrónico</label>
                <input type="email" id="form1Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" for="form1Example2">Contraseña</label>
                <input type="password" id="form1Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="col">
                <a><Link to="/register">¿Aún no tienes cuenta? Regístrate</Link></a>
            </div>

            <button onClick={onLogin} type="submit" className="btn-form">Iniciar sesión</button>
        </div>
    );
};

export default SignIn;
