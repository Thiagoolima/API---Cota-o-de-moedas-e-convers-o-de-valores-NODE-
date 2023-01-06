const axios = require('axios');
const fs = require('fs/promises');
const { format, parseISO } = require('date-fns')

const requisicao = async (moeda1, moeda2) => {
    const cotacaoMoeda = await axios.get(`https://economia.awesomeapi.com.br/last/${moeda1}-${moeda2}`)
    const data = cotacaoMoeda.data[moeda1 + moeda2]
    const { bid, create_date, name } = data
    const arrayName = name.split('/')
    const time = format(parseISO(create_date), 'dd-MM-yyyy HH:mm:ss')
    return {
        bid,
        time,
        arrayName
    }
}

const obterCotacaoMoeda = async (req, res) => {
    try {
        const { moeda1, moeda2 } = req.body
        const cotacao = await requisicao(moeda1, moeda2)
        const { bid, time, arrayName } = cotacao
        return res.status(200).json({
            "Cotação atual": `1 ${arrayName[0]} (${moeda1}) = ${bid} ${arrayName[1]} (${moeda2})`,
            "Última atualização": time
        })
    } catch (error) {
        return res.status(404).json({ "mensagem": error.message })
    }
}
const converterValores = async (req, res) => {
    try {
        const { moeda1, moeda2, valor } = req.body
        const cotacao = await requisicao(moeda1, moeda2)
        const { bid, time, arrayName } = cotacao
        return res.status(200).json({
            "Cotação atual": `1 ${arrayName[0]} (${moeda1}) = ${bid} ${arrayName[1]} (${moeda2})`,
            "Valor Original": `${((valor) / 100).toFixed(2)}  ${arrayName[0]} (${moeda1})`,
            "Valor Convertido": `${((valor * bid) / 100).toFixed(2)}  ${arrayName[1]} (${moeda2})`,
            "Última atualização": time
        })
    } catch (error) {
        return res.status(404).json({ "mensagem": error.message })
    }
}
const listarMoedas = async (req, res) => {
    try {
        const lista = await fs.readFile('./src/dados/moedas.json')
        const listaParse = JSON.parse(lista)
        return res.status(200).json(listaParse)
    } catch (error) {
        return res.status(404).json({ "mensagem": error.message })
    }
}

module.exports = {
    converterValores,
    listarMoedas,
    obterCotacaoMoeda
}