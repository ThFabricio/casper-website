import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase/Config';

const ViewNoticia = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [noticia, setNoticia] = useState({});
    const [loading, setLoading] = useState(true);

    const noticiasColletion = collection(firestore, 'noticias');

    useEffect(() => {
        const getNoticia = async () => {
            const data = await getDoc(doc(noticiasColletion, id));
            setNoticia(data.data());
            setLoading(false);
        }
        getNoticia();
    }, []);
    


    return (
        <div>
            {loading ? <h1>Carregando...</h1> : (
                <div>
                    <div class="row gx-5">
                        <div class="col-md-6 mb-4">
                            <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                                <img src={noticia.imagem} class="img-fluid mt-2" height={750} width={750} />
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <span class="badge bg-info px-3 py-2 shadow-2-strong mb-4">{noticia.categoria}</span>
                            <h4><strong>{noticia.titulo}</strong></h4>
                            <p class="text-muted">
                                <strong>{noticia.descricao}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <button className="btn btn-primary" onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
};

export default ViewNoticia;
