// Função para normalização do CEP  - ela será usada quando formos buscar o CEP
// Remove tudo aquilo que não é número- deixar fixo em 8 caracteres
export function limparCep(valor){
    return valor.replace(/\D/g, '').slice(0,8)
}

// Função para montar o modal
export function mostrarModal(mensagem){

// Recuper a modal no HTML
const modal = document.querySelector('#alertModal');

// Recuper o elemento p que receberá as mensagens
const mensagemElemento = document.querySelector('#alertMessage');

// Atualizar as mensagens quando o usuário cometer algum erro 
mensagemElemento.textContent = mensagem;

// Fazendo a exibição da modal
modal.classList.remove('hidden');
modal.classList.add('flex');
// Criando a função de tempo para fazer o efeito de opacidade
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
    }, 50);

    // Evento do botão da modal para seu fechamento
    const fecharBtn = document.querySelector('#fecharModal');
    fecharBtn.onclick = () => {
      // Deixando padrão do HTML - volta ao original
      modal.classList.add('opacity-0');
      modal.classList.add('opacity-100');

      setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }, 50);

    }
}

// Função para limpar todos os campos
export function limparCampos () {
  // Pegar o formulário
  const form = document.querySelector('#enderecoForm');
  // Para limpar vamso percorrer o form com um forEach para cada input
  form.querySelectorAll('input').forEach(input => input.value = '');
}

// Função para a máscara do CEP 
export function aplicarMascaraCep (inputElement) {
  // Pegando o que foi digitado ou coladoo no campo de texto
  // Como é uma entrada, essa função para cada número digitado 
  inputElement.addEventListener('input',(e) => {
    // Vamos usar o parametro (e) como traget ==> cada um dos números digitados
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 5){
      value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }

    // Vamos atualizar a vizualização do elemento HTML (input), já np formato de CEP 
    e.target.value = value; 
  });
}