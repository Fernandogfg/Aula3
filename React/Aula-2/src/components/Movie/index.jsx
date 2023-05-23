function Movie(prop) {
  return (
    <div>
      {prop.obj.map((filme, index) => (
        <div key={index}>
          <h2>{filme.title}</h2>
          <ul>
            <li>Diretor: {filme.diretor}</li>
            <li>Ano de lançamento: {filme.ano}</li>
            <li>Duração: {filme.tempo}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movie;
