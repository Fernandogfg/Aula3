import React, { useState, useEffect } from "react";

const ColorChanger = () => {
  // TODO: Declare uma constante de estado chamada "isBlue" e uma função para atualizá-la

  // TODO: Declare um efeito que será executado apenas na montagem do componente
  // Imprima "Componente montado" no console
  // Retorne uma função de limpeza que será executada na desmontagem do componente
  // Imprima "Componente desmontado" no console

  // TODO: Declare um efeito que será executado sempre que "isBlue" for alterado
  // Imprima "Componente atualizado" no console
  // Implemente uma lógica condicional para alterar a cor de fundo do corpo do documento entre vermelho e azul
  // Retorne uma função de limpeza que será executada antes do próximo efeito
  // Imprima "Efeito anterior limpo" no console

  // TODO: Implemente uma função de manipulador de clique para o botão
  // Esta função deve atualizar o estado de "isBlue" para o valor oposto atual

  // TODO: Renderize um botão que, ao ser clicado, altera a cor de fundo conforme o estado de "isBlue"
  const [isBlue, setIsBlue] = useState(false);

  useEffect(() => {
    console.log("Componente montado");

    // Retorne uma função de limpeza que será executada na desmontagem do componente
    // Imprima "Componente desmontado" no console
    return () => {
      console.log("Componente desmontado");
      alert("O componente ColorChanger está sendo removido da tela.");
    };
  }, []);
  useEffect(() => {
    console.log("Componente Atualizado");
    document.body.style.backgroundColor = isBlue ? "blue" : "red";
    return () => {
      console.log("Efeito anterior foi limpo");
    };
  }, [isBlue]);
  const handleClickButton = () => {
    setIsBlue(!isBlue);
  };
  const btn = (
    <>
      <button
        onClick={handleClickButton}
        className={isBlue ? "azul" : "vermelho"}
      >
        Botão
      </button>
    </>
  );
  return <div>{btn}</div>;
};
export default ColorChanger;
