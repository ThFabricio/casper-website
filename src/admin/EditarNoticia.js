import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/Config';

const EditarNoticias = () => {

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

    const atualizarNoticia = async (e) => {
        e.preventDefault();
        const { titulo, descricao, categoria, imagem } = e.target.elements;
        await updateDoc(doc(noticiasColletion, id), {
            titulo: titulo.value,
            descricao: descricao.value,
            categoria: categoria.value,
            imagem: imagem.value
        });
        navigate('/noticias');
    }

    return (
        <div>
            {loading ? <h1>Carregando...</h1> : (
                <div>
                    < div className="mb-3" >
                        <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="titulo" defaultValue={noticia.titulo} />
                    </div >
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="descricao" defaultValue={noticia.descricao}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Categoria</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="categoria" defaultValue={noticia.categoria} />
                    </div >
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Imagem</label>
                        <input type="file" className="form-control" id="exampleFormControlInput1" name="imagem" defaultValue={noticia.imagem} />
                    </div >
                    <button className="btn btn-info" onClick={atualizarNoticia}>Atualizar</button>
                </div>
            )}

            <button className="btn btn-primary" onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
};

export default EditarNoticias;