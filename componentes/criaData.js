// módulo que cria uma linha contendo a data das tarefas
// todas as tarefas daquela data ficarão abaixo desta linha
import {Tarefa} from './criaTarefa.js'
export const criaData = (data) => {
    // pega as tarefas que estão no localStorage e armazena no objeto tarefas
    // se não tiver tarefa nenhuma, tarefas recebe um array vazio
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataMoment = moment(data, 'DD/MM/YYYY')
    // cria um elemento HTML do tipo li e associa a dataTopo
    const dataTopo = document.createElement('li')
    // cria um conteúdo HTML para inserir no elemento criado, com a data passada como parâmetro
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`
    dataTopo.innerHTML = conteudo
    // abaixo, ele vai percorrer o objeto tarefas, que contém as tarefas armazenadas no localStorage e
    // adicionar essas tarefas como filhas do elemento dataTopo, usando a função Tarefa contida em criaTarefa
    // o forEach vai passar, junto com cada tarefa, um identificador daquela tarefa, chamado id
    tarefas.forEach(((tarefa , id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')
        const diff = dataMoment.diff(dia)
        if (diff == 0){
            dataTopo.appendChild(Tarefa(tarefa, id))
        }
        
    }))
    return dataTopo
}