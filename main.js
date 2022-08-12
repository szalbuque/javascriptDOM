// REFATORADO

// Depois de separar o código em componentes
// Não usaremos o IIFE, desta vez vamos usar módulos para encapsular os componentes
// Aqui vamos importar os componentes que estão em outros arquivos
import BotaoConclui from './componentes/concluiTarefas.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

// A função abaixo vai preparar o conteúdo para a criação da tarefa
const handleNovoItem = (evento) => {
     // preventDefault serve para que o formulário não limpe automaticamente após pressionar o botão de enviar
     evento.preventDefault()
     // a constante lista conterá o objeto lista
    const lista = document.querySelector('[data-list]')
    // a constante input irá conter o objeto associado ao data attribute data-form-input
    const  input = document.querySelector('[data-form-input]')
    // a constante calendario recebe o objeto associado ao data attribute data-form-date
    const calendario = document.querySelector('[data-form-date]')
    // abaixo usamos a biblioteca moment.js para formatar a data
    const data = moment(calendario.value)
    const dataFormatada = data.format("DD/MM/YYYY")
    // a constante valor conterá o texto digitado dentro do campo do formulário
    const valor = input.value
    // a estrutura abaixo conterá os dados que serão usados na criação da tarefa
    const dados = {
        valor,
        dataFormatada
    }
    // abaixo a chamada da função criaTarefa, passando a estrutura acima como parâmetro
    const criaTarefa = criarTarefa(dados)
    // por fim, adicionamos a tarefa criada à lista
    lista.appendChild(criaTarefa)
    input.value = " "
    data.value=""

}

// a função abaixo será responsável por montar a tarefa
const criarTarefa = ({valor , dataFormatada}) => {
   
    
    // a constante tarefa conterá um objeto novo do tipo li
    const tarefa = document.createElement('li')
    // é necessário acrescentar a classe a esta tarefa (li) criada, para fazer a estilização com o css
    tarefa.classList.add('task')
    // a constante conteudo conterá uma template string do tipo parágrafo contendo
    // o texto digitado no formulário e a data/hora selecionada
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`
    // a seguir, vamos atribuir o parágrafo criado ao HTML da li tarefa
    tarefa.innerHTML = conteudo
    // adiciona o botão de concluir tarefa como filho de tarefa
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
  
    return tarefa
   
}

// novaTarefa conterá o objeto botão, selecionado pelo data attribute data-form-button
const novaTarefa = document.querySelector('[data-form-button]')

// aqui adicionamos um event listener para chamar a função criarTarefa quando o botão for clicado
novaTarefa.addEventListener('click', handleNovoItem)

