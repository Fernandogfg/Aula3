import { useRef, useState } from "react";

import "./App.css";

function Form() {
  const nome = useRef();
  const email = useRef();
  const senha = useRef();
  const confSenha = useRef();
  const termos = useRef();
  let [habilitaBtn, setHabilitaBtn] = useState(true);
  function envia(e) {
    e.preventDefault();
    if(senha.current.value === confSenha.current.value){
      alert('Enviado com sucesso!!')
      return
    }
    alert('campos de senha inválidos')
  }
  function habilita() {
    if (
      !nome.current.value ||
      !email.current.value ||
      !senha.current.value ||
      !confSenha.current.value ||
      !termos.current.checked
    ) {
      setHabilitaBtn(true);
    } else {
      setHabilitaBtn(false);
    }
  }
  return (
    <form
      className="meuForm"
      onChange={() => {
        habilita();
      }}
    >
      <label>
        Nome: <input type="text" ref={nome} />
      </label>

      <label>
        Email: <input type="email" ref={email} />
      </label>

      <label>
        Senha: <input type="password" ref={senha} />
      </label>
      <label>
       Confirmar Senha: <input type="password" ref={confSenha} />
      </label>

      <label>
        Eu aceito os <a href="#">termos de uso</a>:
        <input type="checkbox" ref={termos} />
      </label>

      <input

        type="submit"
        id="submit"
        onClick={envia}
        disabled={habilitaBtn}
      />
    </form>
  );
}

function App() {
  return <Form />;
}

export default App;
