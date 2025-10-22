import { mostrarModal, limparCampos } from "./utils.js";

// Função para salvar os dados no Storage do Browser
// Recebe com parâmetro o evento do formulário
export function salvarDados(event){

    // cancelar o envio do formulário
    event.preventDefault();

    // recuperar os dados
    const nome = document.querySelector('#nome').value;
    const cep = document.querySelector('#cep').value;
    const logradouro = document.querySelector('#logradouro').value;
    const numero = document.querySelector('#numero').value;
    const complemento = document.querySelector('#complemento').value;
    const bairro = document.querySelector('#bairro').value;
    const cidade = document.querySelector('#cidade').value;
    const estado = document.querySelector('#uf').value;
    
    // colocando os dados em um array
    const usuario = [
        nome, cep, logradouro, numero, complemento, bairro, cidade, estado
    ]

    // colocar as informações no localStorage = ele existe em qualquer browser
    // permite o armazenamento apens de STRINGS
    // LIMITE DE 5MB POR APLICAÇÃO 
    // localStorage.getItem - vai buscar o valor definido no array usuarios no browser
    // não existindo = retorna null
    // JSON.parse converte essa string JSON em um objeto JS (array)
    // ou existe usuários ou cria um array vazio
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // inserindo no objeto do localStorage o array de usuários criado acima
    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // chamar a modal para dizer que os dados foram salvos - limpar campos
    mostrarModal('Dados salvos com sucesso!')
    limparCampos();
}