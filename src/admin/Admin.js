import { useState, useEffect, useRef } from "react";
import { firestore } from "../firebase/Config";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ref } from "firebase/storage";
import { storage } from "../firebase/Config";

const Admin = props => {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const imagem = useRef();
    const [noticias, setNoticias] = useState([]);

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

    }

    const noticiasColletion = collection(firestore, 'noticias');

    useEffect(() => {
        const getNoticias = async () => {
            const data = await getDocs(noticiasColletion);
            setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getNoticias();
    }, []);

    async function deletarNoticia(id) {
        const noticiaDoc = doc(firestore, "noticias", id);
        await deleteDoc(noticiaDoc);
    }


    return (
        <div>

            {/* Criar Noticia */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                <input type="email" className="form-control" id="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Titulo da noticia" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                <textarea className="form-control" id="descricao" rows="3" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Imagens</label>
                    <br></br>
                    <input type="file" className="form-control-file" id="imagem" ref={imagem} />
                </div>
            </form>

            <br></br>
            <select className="form-select" aria-label="Default select example" value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="Esportes" selected>Esportes</option>
                <option value="Politica">Política</option>
                <option value="Entretenimento">Entretenimento</option>
                <option value="Famosos">Famosos</option>
            </select>

            <br></br>
            <button type="button" className="btn btn-dark" onClick={salvarNoticia}>Salvar</button>

            {/* Visualizar Noticia */}


            {/*<div className="card-group">
                {noticias.map((noticia) => {
                    return (
                        <div className="card">
                            <img src={noticia.imagem} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{noticia.titulo}</h4>
                                <h5 className="card-title">{noticia.categoria}</h5>
                                <p className="card-text">{noticia.descricao}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                <button type="button" className="btn btn-danger" onClick={() => deletarNoticia(noticia.id)}>Deletar</button>
                            </div>
                        </div>
                    );
                })}
            </div>*/}

            {/*<div className="row row-cols-1 row-cols-md-3 g-4">
                {noticias.map((noticia) => {
                    return (
                        <div className="col">
                            <div className="card h-100">
                                <img src={noticia.imagem} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">{noticia.titulo}</h4>
                                    <p className="card-text">{noticia.descricao}</p>
                                </div>
                                <div className="card-footer">
                                    <em className="text-muted">{noticia.categoria}</em>
                                </div>

                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                <button type="button" className="btn btn-danger" onClick={() => deletarNoticia(noticia.id)}>Deletar</button>
                            </div>
                        </div>
                    );
                })}
            </div>*/}


            <div>

                {noticias.map((noticia) => {
                    return (

                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th>Titulo</th>
                                    <th>Descricao</th>
                                    <th>Categoria</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={noticia.imagem}
                                                alt=""
                                                style={{ width: "45px", height: "45px" }}
                                                class="rounded-circle"
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0 text-sm">{noticia.titulo}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">{noticia.descricao}</p>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">{noticia.categoria}</p>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-sm btn-rounded">Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm btn-rounded" onClick={() => deletarNoticia(noticia.id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                })}

            </div>

        </div>
    );
}

export default Admin;