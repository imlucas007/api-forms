// Importando as funções que estão no utils e têm parâmetro 

import { limparCep, mostrarModal } from "./utils.js"

// Função principal para buscar o CEP >> via API devemos usar o async 
export async function buscarCep (){
    // Recuperando o campo do cep 
    const cepInput = document.querySelector('#cep');

    // Limpar o cep para tirar o traço e ficar apenas com digitos 
    const cep = limparCep(cepInput.value);

    // Vefificar se temos 8 digitos 
    if (cep.length === 8){
        try {
            // Tentar executar esse bloco de comando 
            // Não funcionando ele irá executar o catch 

            // Chamando a API 
            // O await faz esperar a Promisse do fetch ser resolvida 
            // Quando for resolvido ele armazena o valor na res
            // O res não contem os dados ele recebe um objeto de resposta http 
            // res.ok - retorna true se a requisição der certo
            // res.status - condição da resposta 404(não localizado), 200(ok), 500(error server)
            // res.json() - método para converter a resposta em formato Json
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

            // Manipular o res.json 
            // O método res.json - lê o corpo da resposta e converte de texto para formato que o Js consegue ler
            // Como essa conversão também é assincrona, usamos novamente o await 
            // Depois que termina a conversão, a const data passa a conter um objeto comos dados do cep 
            const data = await res.json();
            // Vamos verificar se a API não retornou erro 
            if(!data.erro){
                // Preencher os campos com os dados da API
                document.querySelector('#logradouro').value = data.logradouro;
                document.querySelector('#bairro').value = data.bairro;
                document.querySelector('#cidade').value = data.localidade;
                document.querySelector('#uf').value = data.uf;

                // Dando foco no número 
                document.querySelector('#numero').focus();

            } else {
                // Mostrar o alert caso o CEP não seja encontrado
                mostrarModal('CEP não encontrado!');
            }
            
        } catch (error) {
            // Mostra erro caso a requisição falhe
            mostrarModal('Erro ao buscar CEP. Tente novamente');
        }
    } else {
        // Caso  o número de digitos seja menor que 8
        mostrarModal('Digite o CEP com 8 digitos');
        // Foco no CEP 
        cepInput.focus();
    }
}