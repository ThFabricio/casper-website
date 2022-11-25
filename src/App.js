import Home from "./componentes/Home";
import Noticias from "./componentes/Noticias";
import Header from "./componentes/Header";
import Admin from "./admin/Admin";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
