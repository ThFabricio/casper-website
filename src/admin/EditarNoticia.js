import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { collection, getDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/Config';
import { storage } from '../firebase/Config';
import { getDownloadURL, uploadBytes, uploadBytesResumable, ref } from 'firebase/storage';

const EditarNoticias = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [noticia, setNoticia] = useState({});
    const [loading, setLoading] = useState(true);

    const imageRef = useRef();

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
        const { titulo, descricao, categoria } = e.target.elements;

        if(imageRef.current.files[0]){

            const file = imageRef.current.files[0];

            const storageRef = ref(storage, `imagens/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            await uploadBytes(storageRef, file);
            const imageURL = await getDownloadURL(storageRef);

            await updateDoc(doc(noticiasColletion, id), {
                titulo: titulo.value,
                descricao: descricao.value,
                categoria: categoria.value,
                imagem: imageURL
            });
        } else {
            await updateDoc(doc(noticiasColletion, id), {
                titulo: titulo.value,
                descricao: descricao.value,
                categoria: categoria.value
            });
        }
        navigate('/admin');
    }

    return (
        <div>
            {loading ? <h1>Carregando...</h1> : (
                <div>
                    <form onSubmit={atualizarNoticia}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                            <input type="text" className="form-control" id="titulo" defaultValue={noticia.titulo} />       
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                            <textarea className="form-control" id="descricao" rows="3" defaultValue={noticia.descricao}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Imagem</label>
                            <input type="file" className="form-control" id="imagem" ref={imageRef} />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" aria-label="Default select example" id="categoria" defaultValue={noticia.categoria}>
                                <option value="Esportes">Esportes</option>
                                <option value="Politica">Politica</option>
                                <option value="Entretenimento">Entretenimento</option>
                                <option value="Famosos">Famosos</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mx-3">Atualizar</button>
                        <button type="button" className="btn btn-danger" onClick={() => navigate('/admin')}>Cancelar</button>
                    </form>

                </div>
            )}
        </div>
    );
};

export default EditarNoticias;