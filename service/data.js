// A função removeDatasRepetidas recebe as datas do localStorage
// e faz um loop copiando para o array datasUnicas somente as datas
// que ainda não estão neste array, devolvendo este array como resultado
export const removeDatasRepetidas = (datas) => { 

    const datasUnicas = []
    datas.forEach((data => { 
        if(datasUnicas.indexOf(data.dataFormatada) === -1){
            datasUnicas.push(data.dataFormatada)
        }
    }))
    return datasUnicas
}


export const ordenaDatas = (data) => { 
    data.sort((a, b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
       return primeiraData - segundaData
    })
}