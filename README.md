# Documentação de Estudo TypeScript

## Por que usar TypeScript ao invés de Javascript?
Por mais que possa ser adicionado, <b>com get</b>, a limitação da informação não ser mais modificada depois
de ser declarada, ainda é possível declarar uma nova informação parecida com a anterior e o erro só vai ser
descobrido quando entrar em produção, mesmo que apenas no ambiente de desenvolvimento. <br>
O TypeScript entra nesse momento, já avisando ao desenvolvedor de possíveis erros no momento em que eles
são cometidos. <br>
Falhando ainda com a segunda regra, é possível passar apenas um dos valores que será aceito pelo JavaScript, não respeitando a regra de negócio e ainda permitindo que informações incompletas sejam passadas.<br>
* <b>Por Exemplo</b>:<br>
const negociacao = new Negociacao(new Date());<br>
console.log(negociacao.volume) ;<br>
Nesse exemplo, o volume seria exibido como NaN porque não é passado seu parâmetro e o erro só seria descoberto em produção/run time.<br>

## Traduzindo TypeScript para o navegador
O navegador, nativamente, não lê typescript. Lê apenas Javascript. Para fazer o navegador entender, é preciso traduzir do typescript para o javascript. Através do arquivo "tsconfig.json" adicionamos o compilador para que ele pegue todos os arquivos da pasta APP (que estão como typescript) e traduza para javascript na pasta Dist (que é a pasta de distribuição).

## Tipos em Atributos
Em Typescript existem tipos de atributos para definir se podem ser acessíveis e editáveis ou não. Ao não definir um tipo, ele automaticamente fica como 'public', permitindo que seja acessível e editável. Ao definir private, o próprio typescript não irá permitir que aquele atributo seja acessado.

## Tipos em Método
Em TypeScript exitem tipos em métodos também. Essa tipagem está relacionada ao retorno daquele método. Um método que não tem retorno nenhum, será do tipo "any". No arquivo Negociacao-Controllers há a tipagem do tipo Negociacao e ela é útil para que o único retorno do método seja do tipo Negociacao e não seja aceito nenhum outro tipo, já apresentando erro.<br>
Além de definir os tipos, como por exemplo em "Negociacoes.js" onde é definido é um Array, é possível definir do que esse array é composto dentro do '<>'. Como, por exemplo, um Array de strings. Método():Array< string>. Assim como é possível adicionar outros tipos ao método, como number, boolean e outros.

## Apenas Leitura - Array
Em typescript é possível utilizar o tipo de Array chamado "ReadonlyArray", onde ele apenas poderá ser lido. Isso impede que as informações sejam alteradas, excluídas ou perdidas.<br>
Ainda no typescript é possível alterar as formas de se declarar um Array. Ao invés da forma mais verbosa, onde ficaria -> ReadonlyArray< Negociacao> <-. É possível usar apenas readonly Negociacao[]. Por conta da caixa fechada, ele vai entender que é um array diretamente. 

## Regras de Negócio
* Não pode ser modificado depois de criado.
* Obrigatoriamente precisa ter uma Data, Quantidade e Valor. 
* Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado. 