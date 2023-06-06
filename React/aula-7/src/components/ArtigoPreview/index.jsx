import postImage from "../../assets/images/download.jpg";
import { Link } from "react-router-dom";
function ArtigoPreview(props) {
  return (
    <article>
      <img src={postImage} />
      <h5>{props.categoria}</h5>
      <h4>{props.titulo}</h4>
      <span>{props.conteudo}</span>
      <br />
      <Link to={`/artigos/${props.titulo}`}>Saiba mais</Link>
    </article>
  );
}
export default ArtigoPreview;
