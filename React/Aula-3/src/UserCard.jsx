import "./Usercard.css";
function UserCard(prop) {
  return (
    <div className="usuario">
      <h3>Usuário</h3>
      <ul>
        <li>
          <strong>Nome: </strong>
          {prop.user.nome}
        </li>
        <li>
          <strong>Idade: </strong>
          {prop.user.idade}
        </li>
        <li>
          <strong>Cidade: </strong>
          {prop.user.cidade}
        </li>
        <li>
          <strong>Email: </strong>
          {prop.user.email}
        </li>
        {prop.user.isPremium ? (
          <li className = 'premium'>
            <strong>Premium: </strong>
            Este Usuário é Premium
          </li>
        ) : null}
      </ul>
    </div>
  );
}
export default UserCard;
