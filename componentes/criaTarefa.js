// Não usaremos o IIFE, desta vez vamos usar módulos para encapsular os componentes
// Aqui vamos importar os componentes que estão em outros arquivos
import BotaoConclui from './concluiTarefas.js'
import BotaoDeleta from './deletaTarefa.js'
import {carregaTarefa} from './carregaTarefa.js'

// A função abaixo vai preparar o conteúdo para a criação da tarefa
export const handleNovoItem = (evento) => {
    // preventDefault serve para que o formulário não limpe automaticamente após pressionar o botão de enviar
    evento.preventDefault()
    // a constante tarefas vai receber o conteúdo do que está no localStorage ou, se não tiver nada lá, recebe um array vazio
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    // a constante input irá conter o objeto associado ao data attribute data-form-input
    const  input = document.querySelector('[data-form-input]')
    // a constante valor conterá o texto digitado dentro do campo do formulário
    const valor = input.value
    // a constante calendario recebe o objeto associado ao data attribute data-form-date
    const calendario = document.querySelector('[data-form-date]')
    // abaixo usamos a biblioteca moment.js para formatar a data
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormatada = data.format("DD/MM/YYYY")
    // a constante concluida vai indicar o estado atual da tarefa
    const concluida = false
    // a estrutura abaixo conterá os dados que serão usados na criação da tarefa
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }
    // tarefasAtualizadas recebe as tarefas que estavam no localstorage e os dados digitados pelo usuário
    // usamos spread operator (...tarefas) que transforma os elementos do array em argumentos da constante
    const tarefasAtualizadas = [...tarefas, dados]
   
    localStorage.setItem('tarefas',JSON.stringify(tarefasAtualizadas))
    input.value = " "
    
    // abaixo chamamos novamente a função carregaTarefa() para recarregar incluindo a última tarefa digitada
    carregaTarefa()
}



// a função abaixo será responsável por montar a tarefa
export const Tarefa = ({valor , horario , concluida}, id) => {
   // a constante tarefa conterá um objeto novo do tipo li
   const tarefa = document.createElement('li')
   // é necessário acrescentar a classe a esta tarefa (li) criada, para fazer a estilização com o css
   
   // a constante conteudo conterá uma template string do tipo parágrafo contendo
   // o texto digitado no formulário e a data/hora selecionada
   const conteudo = `<p class="content">${horario} * ${valor}</p>`
   // Adiciona a classe done se a tarefa estiver concluida ou a classe task caso contrário
   if (concluida) {
    tarefa.classList.add('done')
   } 
   
    tarefa.classList.add('task')
   
   // a seguir, vamos atribuir o parágrafo criado ao HTML da li tarefa
   tarefa.innerHTML = conteudo
   // adiciona o botão de concluir tarefa como filho de tarefa
   tarefa.appendChild(BotaoConclui(carregaTarefa,id))
   tarefa.appendChild(BotaoDeleta(carregaTarefa,id))
 
   return tarefa
}