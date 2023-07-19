"use strict";
const inputData = require('prompt-sync')();
const cadastro = () => {
    let nome = String(inputData("Digite seu nome: "));
    let email = String(inputData("Digite seu email: "));
    let idade = Number(inputData("Digite seu idade: "));
    let sexo = String(inputData("Digite seu sexo: "));
    return console.log(`Olá: ${nome}\nEmail: ${email}\nIdade: ${idade}\nsexo: ${sexo}`);
};
cadastro();
