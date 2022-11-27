import { useState } from "react";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Config";



const LoginAdmin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({});

    const navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const login = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }

        navigate('/admin');
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <form onSubmit={login}>
                <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                    <div className="card-body p-5 text-center">

                                        <h3 className="mb-5">Login Administrador</h3>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg btn-block mb-4">Login</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}

export default LoginAdmin;

