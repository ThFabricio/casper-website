import Home from "./componentes/Home";
import Noticias from "./componentes/Noticias";
import Header from "./componentes/Header";
import Admin from "./admin/Admin";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
  <div>
  <Header/>
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/noticias" element={<Noticias/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
