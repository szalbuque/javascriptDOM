// módulo que exibe as tarefas gravadas em localStorage na tela do app
import {criaData} from "./criaData.js"
import { ordenaDatas,removeDatasRepetidas } from "../service/data.js"

export const carregaTarefa = () => {
    // lista contém o elemento HTML com o data attribute data-list
    const lista = document.querySelector('[data-list]')
    // tarefasCadastradas recebe as tarefas gravadas no localStorage ou um array vazio, se não tiver nada gravado
    // O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string.
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []
    // a seguir, limpamos a lista, para receber a lista de tarefas completas, sem duplicar
    lista.innerHTML=" "
    
    const dataUnicas = removeDatasRepetidas(tarefasCadastradas)
    ordenaDatas(dataUnicas)
    dataUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia))
    })
}