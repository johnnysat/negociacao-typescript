# Documentação de Estudo TypeScript

## Por que usar TypeScript ao invés de Javascript?
Por mais que possa ser adicionado, <b>com get</b>, a limitação da informação não ser mais modificada depois
de ser declarada, ainda é possível declarar uma nova informação parecida com a anterior e o erro só vai ser
descobrido quando entrar em produção, mesmo que apenas no ambiente de desenvolvimento. <br>
O TypeScript entra nesse momento, já avisando ao desenvolvedor de possíveis erros no momento em que eles
são cometidos. <br>
Falhando ainda com a segunda regra, é possível passar apenas um dos valores que será aceito pelo JavaScript, não respeitando a regra de negócio e ainda permitindo que informações incompletas sejam passadas.<br><br>
* <b>Por Exemplo</b>:<br>
const negociacao = new Negociacao(new Date());<br>
console.log(negociacao.volume) ;<br>
Nesse exemplo, o volume seria exibido como NaN porque não é passado seu parâmetro e o erro só seria descoberto em produção/run time.


## Regras de Negócio
* Não pode ser modificado depois de criado.
* Obrigatoriamente precisa ter uma Data, Quantidade e Valor. 
* Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado. 