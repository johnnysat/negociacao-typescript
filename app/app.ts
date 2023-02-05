import { Negociacao } from './models/negociacao.js'

const negociacao = new Negociacao(new Date(), 10, 50)
console.log(negociacao.volume);