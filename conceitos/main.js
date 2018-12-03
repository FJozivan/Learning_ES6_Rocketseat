//################################### Classes no EJ6 #################################
class List{

    // Construtor da classe, que é o primeiro metodo a ser executado na classe.
    constructor(){
        this.data = [];
    }

    // Metodo normal com parametro
    add(data){
       this.data.push(data);
       console.log(this.data);
    }
    
    // Metodo static, pode ser executado sem que a classe precise ser instanciada.
    static soma(a,b){
        return a+b;
    }
}

// classe que faz um extends de outra classe e puxa seus metodos
class todoList extends List{

    constructor(){
        // o metodo super() é usado para executar o metodo construtor() da classe instaciada nesse caso a classe List.
        super();
    }

}

// Exemplo de como instanciar uma classe no EJ6
var minhaLista = new todoList();

document.getElementById('novoMetodo').onclick = function(){
    // Chamar metodo da classe insranciada
    // minhaLista.add('todo');
}
// Chamando o metodo static da classe List{}
// var result = List.soma(1,4); 
console.log();

//---------------------------------------------------------------------------------------------
//######################## Operações em Array com ES6 ##############################

// Criação  de vetor
const vet = [1,2,3,4,5,6,7,8];

// Função map - Percorre cada item do vetor, afim de criar um novo vetor, executando uma ação que é definida no return da função, o Parametro 'item' acessa o valor e o parametro 'index' que é a posição do valor.
const newVet = vet.map(function(item){
  return item * 2;
});

console.log(newVet);

// Função reduce - Consumir todo vetor e transforma em uma unica informação, um numero.
const sum = vet.reduce(function(total, next){
  return total + next;
});

console.log(sum);

// Função filter - Fitra os elementos do array de acordo com alguma comparação estabelecida no retorno da função e assim cria outro array apenas com os valore filtrados
const pares = vet.filter(function(item){
  return item % 2 === 0;
});

console.log(pares);

// Função find - Encontra um elemento no array, se o elemento existir ele o retorna, se não retorna 'undefined';
const procura = vet.find(function(item){
  return item === 8;
});

console.log(procura);
//--------------------------------------------------------------
//################# Arrow Functions ###################

// Diminuindo o tamanho da função map e reduce com arrow functions;
const arr = [2,3,1,4,5,6];

const newArr = arr.map(item => item *2);
console.log(newArr);

const somando = arr.reduce((total,next) => total + next);
console.log(somando);

//--------------------------------------------------------------
//############### Valores padrão ########

// valores padrãoo em paramentros de funções
function soma(a = 0,b = 0){
  return a + b;
}
console.log(soma(1,5))
console.log(soma(1));
console.log(soma());

//-------------------------------------------------------------
//################## Desestruturação de objetos ########

const obj = {
  nome: 'Jozivan',
  idade: 20,
  endereco: {
    rua: 'Travessa Porteiras',
    cidade: 'Crato'
  }
}
// Recuperando dados sem a Desustruturação
const nome = obj.nome;
const idade = obj.idade;
const cidade = obj.endereco.cidade;
// console.log(nome,idade, cidade);

// Recuperando dados com Desustruturação
///const {nome, idade, endereco:{cidade}} = obj;
// console.log(nome, idade, cidade);

// usando Desustruturação em funções
function exibir({nome, idade, endereco:{rua}}){
  console.log(nome, idade, rua);
}
exibir(obj);
//----------------------------------------------------------------------------------------------------------------
//############################# REST #################################
//REST - Representa o '...<nome da variavel>' que seria uma forma de armazenar o "resto" dos dados de um vetor ou um array em uma variavel com desustruturaçao
// uso em objetos
const info = {
  nome3: "Diego",
  idade: 23,
  empresa: "rocketseat"
};

const { nome3, ...resto } = info;
console.log(nome);
console.log(resto);

// uso em arrays
const vetor = [1,2,3,4,5];
const [a, b, ...c_resto] = vetor;
console.log(a,b);
console.log(c_resto);

//uso em funções
// Da forma abaixo a função pode receber quantos numeros possivel e todos serão jogados em um array "resto" cahamdo parametros
function somar(...parametros){
  return parametros.reduce((item, next) => item + next);
}

console.log(somar(1,2,3,4,5));
//--------------------------------------------------------------------------------------------------------
//################# SPREAD ########################
// SPREAD - Faz o papel de propar informações de uma estrutura para outra
// unindo arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2]; // mesma coisa que fazer const arr3 = [1,2,3,4,5,6];
// Propangando um objeto para outro e sobrescrevendo um dado específico.
const info2 = {
  nome:"jozivan",
  idade:20
};
const info3 = {...info2, nome:"Marciel"};
console.log(info3);
//--------------------------------------------------------------------------------------------
//####################### TEMPLATE LITERALS ###########################
//Template literals - Forma de concatenar strings de forma mais simples detro do ES6
const meuNome = "jozivan";
const minhaIdade = 20;
// forma normal;
console.log("Meu nome é " + meuNome + " e tenho " + minhaIdade + " anos."); 
// Com template literals
console.log(`Meu nome é ${meuNome} e tenho ${minhaIdade} anos.`);
//--------------------------------------------------------------------------------------
//################ SINTAXE CURTA DE OBJETOS NO EJ6 #######################3
// Sintaxe curta de objetos no ES6
const apelido = "juinn";
const anos = 21;
// Quando vamos criar um objeto atribuindo valores de variaveis ja exitentes se o nome da propriedade for igual ao nome da variavel é necessario apenas colocar a variavel.

const user4 = {
  apelido,
  anos,
  empresa: "Incremetec"
}
console.log(user4);
