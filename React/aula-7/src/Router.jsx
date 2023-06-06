import { Routes, Route } from "react-router-dom";
import ArtigoLista from "./components/ArtigoLista";
import Artigo from "./components/Artigo";

function Router() {
  return (
    <Routes>
      <Route path="artigos" element={<ArtigoLista/>}></Route>
      <Route path="artigos/:name" element={<Artigo/>}></Route>
    </Routes>
  );
}
export default Router;
