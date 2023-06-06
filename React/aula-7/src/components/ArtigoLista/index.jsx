import ArtigoPreview from "../ArtigoPreview";

function ArtigoLista() {
  const artigosData = [
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
  return (
    <>
      {artigosData.map((artigo, i) => {
        return (
          <ArtigoPreview
            key={i}
            titulo={artigo.titulo}
            conteudo={artigo.conteudo}
            categoria={artigo.categoria}
          />
        );
      })}
    </>
  );
}
export default ArtigoLista;
