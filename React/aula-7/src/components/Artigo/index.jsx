import postImage from "../../assets/images/download.jpg";
import { useParams } from "react-router-dom";
const dataBase = [
  {
    titulo: "grid",
    src: "",
    conteudo: "aklsjdklasjdkljaskldjlkasjd",
    categoria: "Front-End",
  },
  {
    titulo: "Colors in Css",
    src: "",
    conteudo: "auywgfujdhsuwedhujciknuihf",
    categoria: "Back-end",
  },
  {
    titulo: "css variables",
    src: "",
    conteudo: "asdasdgthgdfgsdrgfgdfb",
    categoria: "Dev-Ops",
  },
];
function Artigo() {
  const { name } = useParams();
  const artigoAtual = dataBase.find((artigo) => artigo.titulo == name);
  return (
    <div>
      <strong>{artigoAtual.categoria}</strong>
      <h1>{artigoAtual.titulo}</h1>
      <img src={postImage} />
      <p>{artigoAtual.conteudo}</p>
    </div>
  );
}
export default Artigo;
