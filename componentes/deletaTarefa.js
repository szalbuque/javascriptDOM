   // cria o componente do botão de deletar (componente começa com maíuscula)
   const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    botaoDeleta.classList.add('done')
    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()
    return botaoDeleta
}

export default BotaoDeleta