import { useState, useEffect } from "react";
import { firestore } from "../firebase/Config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";


const Admin = props => {


    const [noticias, setNoticias] = useState([]);


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

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Noticias</h1>
                        <Link to ="/admin/criar-noticia" className="btn btn-primary">Criar Noticia</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Imagem</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {noticias.map((noticia) => (
                                    <tr key={noticia.id}>
                                        <td>{noticia.titulo}</td>
                                        <td>{noticia.categoria}</td>
                                        <td>{noticia.descricao}</td>
                                        <td><img src={noticia.imagem} alt="" width="100" /></td>
                                        <td>
                                            <Link to={`/admin/editar-noticia/${noticia.id}`} className="btn btn-primary">Editar</Link>
                                            <button onClick={() => deletarNoticia(noticia.id)} className="btn btn-danger">Deletar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
        

            

export default Admin;