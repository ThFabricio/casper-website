import { useState, useEffect } from "react";
import { firestore } from "../firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Noticias = props => {

    const [noticias, setNoticias] = useState([]);


    const noticiasColletion = collection(firestore, 'noticias');

    useEffect(() => {
        const getNoticias = async () => {
            const data = await getDocs(noticiasColletion);
            setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getNoticias();
    }, []);

    return (
        <div className="vh-100" style={{backgroundColor: "#508bfc"}}>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-1 mt-1">
                {noticias.map((noticia) => (
                    <div key={noticia.id}>

                        <div className="col">
                            <div className="card">
                                <Link to={`/ver-noticia/${noticia.id}`}><img src={noticia.imagem} className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }} /></Link>
                                <div className="card-body">
                                    <Link to={`/ver-noticia/${noticia.id}`} className="text-decoration-none text-dark">
                                        <h5 className="card-title">{noticia.titulo}</h5>
                                        <p className="card-text">
                                            {noticia.descricao.slice(0, 200)}...
                                            <span className="text-primary">Leia mais</span>
                                        </p>
                                    </Link>
                                    <p className="card-text"><small className="text-muted">{noticia.categoria}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Noticias;