// Vamos transformar este código num módulo, encapsulando-o, ao invés de usar o IIFE
// criar o componente do botão para completar tarefa
const BotaoConclui = () => {
    // a constante botaoConclui recebe um novo elemento do tipo botão
    const botaoConclui = document.createElement('button')
    // adiciona a classe css check-button ao elemento criado
    botaoConclui.classList.add('check-button')
    // adiciona o texto concluir ao elemento criado
    botaoConclui.innerText='concluir'
    // adiciona um event listener ao botão para executar uma ação ao ser clicado
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

// criar a função de concluir tarefa
// evento trará informações do clique do botão
const concluirTarefa = (evento) => {
    // a constante botaoConclui recebe o botão clicado
    const botaoConclui = evento.target
    // tarefaCompleta recebe a li que é pai do botão clicado
    const tarefaCompleta = botaoConclui.parentElement
    
    // adicionar a classe CSS de rabiscar a tarefa
    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui