import Home from "./componentes/Home";
import Noticias from "./componentes/Noticias";
import Header from "./componentes/Header";
import Admin from "./admin/Admin";
import CriarNoticia from "./admin/CriarNoticia";
import EditarNoticia from "./admin/EditarNoticia";
import Login from "./admin/LoginAdmin";
import ViewNoticia from "./componentes/ViewNoticia";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase/Config";
import { useEffect, useState } from "react";



function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
    });
  }, []);
    

  return (
    <div>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/criar-noticia" element={<CriarNoticia />} />
          <Route path="/ver-noticia/:id" element={<ViewNoticia />} />
          <Route path="/admin/editar-noticia/:id" element={<EditarNoticia />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
