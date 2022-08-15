// REFATORADO
// Depois de separar o código em componentes

// O import abaixo está importando uma função que não está na declaração default do módulo criaTarefa.js, por isso vem entre chaves
import {handleNovoItem} from './componentes/criaTarefa.js'



// novaTarefa conterá o objeto botão, selecionado pelo data attribute data-form-button
const novaTarefa = document.querySelector('[data-form-button]')

// aqui adicionamos um event listener para chamar a função criarTarefa quando o botão for clicado
novaTarefa.addEventListener('click', handleNovoItem)

