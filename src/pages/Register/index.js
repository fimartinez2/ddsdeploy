import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/actions";
import { userInfoById, userAuthLogin, createUserRequest } from "../../requests/sessionRequest.js";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setLoading] = useState(false);

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    const onRegister = () => {
        if (name.length < 6) {
            alert("Ingresa un nombre válido");
        }
        else if (email.length === 0 || !validateEmail()) {
            alert("Ingresa un correo válido");
        } else if (password.length < 8) {
            alert("Ingresa una contraseña válida");
        } else if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
        } else {
            setLoading(true);
            console.log(email, password);
            createUserRequest({ username: name, email: email, password: password, password_confirmation: confirmPassword })
                .then(_ => {
                    userAuthLogin({ email: email, password: password })
                        .then(userData => {
                            console.log(userData);
                            if (userData.error) {
                                console.log(userData.error)
                                alert("Credenciales inválidas");
                                setLoading(false);
                            } else {
                                dispatch(userLogin({
                                    userName: userData.username,
                                    userEmail: email,
                                    userToken: userData.token,
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
            <h2>Crear Cuenta</h2>
            {isLoading ? <div className="loading">Loading&#8230;</div> : null}
            <div className="form-outline mb-4">
                <label className="form-label" for="form1Example1">Nombre</label>
                <input type="email" id="form1Example1" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" for="form1Example1">Correo electrónico</label>
                <input type="email" id="form1Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" for="form1Example2">Contraseña</label>
                <input type="password" id="form1Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" for="form1Example2">Confirmar contraseña</label>
                <input type="password" id="form1Example2" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <div className="col">
                <a><Link to="/">Volver a Login</Link></a>
            </div>

            <button onClick={onRegister} type="submit" className="btn-form">Iniciar sesión</button>
        </div>
    );
};

export default Register;
