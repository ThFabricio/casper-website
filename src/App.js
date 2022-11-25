import Home from "./componentes/Home";
import Noticias from "./componentes/Noticias";
import Header from "./componentes/Header";
import Admin from "./admin/Admin";
import CriarNoticia from "./admin/CriarNoticia";
import EditarNoticia from "./admin/EditarNoticia";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewNoticia from "./componentes/ViewNoticia";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/criar-noticia" element={<CriarNoticia />} />
          <Route path="/ver-noticia/:id" element={<ViewNoticia />} />
          <Route path="/admin/editar-noticia/:id" element={<EditarNoticia />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
