// Importação das funções
import { mostrarModal, aplicarMascaraCep } from "./utils.js";

// Pegando os elementos básicos do DOM
const buscarCepBtn = document.querySelector('#buscarCep');
const enderecoForm = document.querySelector('#enderecoForm');
const cepInput = document.querySelector('#cep');
const mostrarDados = document.querySelector('#mostrarDados');

// Chamar a função de aplicar máscara
aplicarMascaraCep(cepInput);