import { useState, useRef } from "react";
import { firestore } from "../firebase/Config";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ref } from "firebase/storage";
import { storage } from "../firebase/Config";
import { useNavigate } from "react-router-dom";

const CriarNoticia = props => {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const imagem = useRef();

    const navigate = useNavigate();

    const salvarNoticia = async (event) => {
        event.preventDefault();

        const file = imagem.current.files[0];

        const storageRef = ref(storage, `imagens/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        await uploadBytes(storageRef, file);
        const imageURL = await getDownloadURL(storageRef);

        try {
            const addNoticia = await addDoc(collection(firestore, "noticias"), {
                titulo: titulo,
                categoria: categoria,
                descricao: descricao,
                imagem: imageURL
            });
        } catch (error) {

            console.log(error);
        }
        
        navigate('/admin');
    }

    return (
        <div>
            {/* Criar Noticia */}

            <form onSubmit={salvarNoticia}>
                < div className="mb-3" >
                    <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Titulo da noticia" />
                </div >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                    <textarea className="form-control" id="descricao" rows="3" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                </div>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Imagem</label>
                        <input type="file" className="form-control" id="imagem" ref={imagem} />
                    </div>
                </form>

                <br></br>
                <select className="form-select" aria-label="Default select example" value={categoria} onChange={e => setCategoria(e.target.value)} required>
                    <option selected>Selecione a categoria</option>
                    <option value="Esportes">Esportes</option>
                    <option value="Politica">Política</option>
                    <option value="Entretenimento">Entretenimento</option>
                    <option value="Famosos">Famosos</option>
                </select>

                <br></br>
                <button type="submit" className="btn btn-primary mx-3">Salvar</button>
                <button className="btn btn-danger" onClick={() => navigate('/admin')}>Voltar</button>
            </form >
        </div>
    );
}

export default CriarNoticia;



