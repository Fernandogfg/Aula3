import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArtigoLista from "./components/ArtigoLista";
import Router from "./Router";

function App() {
  return (
    <div className="artigo-lista">
      <Router />
    </div>
  );
}

export default App;
