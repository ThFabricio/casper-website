import { useState, useEffect } from "react";
import { firestore } from "../firebase/Config";
import { collection,getDocs } from "firebase/firestore";
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
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {noticias.map((noticia) => (
                    <div key={noticia.id}>

                        <div className="col">
                            <div className="card">
                                <Link to={`/ver-noticia/${noticia.id}`}><img src={noticia.imagem} className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }} /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{noticia.titulo}</h5>
                                    <p className="card-text">{noticia.descricao}</p>
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