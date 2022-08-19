// Vamos transformar este código num módulo, encapsulando-o, ao invés de usar o IIFE

const concluirTarefa = ( atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    // a variável id vai identificar a exata tarefa que está sendo concluída
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida 
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    // chama a função para atualizar a tela
    atualiza()
}

// criar o componente do botão para completar tarefa
const BotaoConclui = (atualiza, id) => {
    // a constante botaoConclui recebe um novo elemento do tipo botão
    const botaoConclui = document.createElement('button')
    // adiciona a classe css check-button ao elemento criado
    botaoConclui.classList.add('check-button')
    // adiciona o texto concluir ao elemento criado
    botaoConclui.innerText='concluir'
    // adiciona um event listener ao botão para executar uma ação ao ser clicado
    botaoConclui.addEventListener('click', ()=> concluirTarefa(atualiza, id))
    return botaoConclui
}




export default BotaoConclui