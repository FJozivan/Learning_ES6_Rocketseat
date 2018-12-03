"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//################################### Classes no EJ6 #################################
var List =
/*#__PURE__*/
function () {
  // Construtor da classe, que é o primeiro metodo a ser executado na classe.
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  } // Metodo normal com parametro


  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    } // Metodo static, pode ser executado sem que a classe precise ser instanciada.

  }], [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return List;
}(); // classe que faz um extends de outra classe e puxa seus metodos


var todoList =
/*#__PURE__*/
function (_List) {
  _inherits(todoList, _List);

  function todoList() {
    _classCallCheck(this, todoList);

    // o metodo super() é usado para executar o metodo construtor() da classe instaciada nesse caso a classe List.
    return _possibleConstructorReturn(this, _getPrototypeOf(todoList).call(this));
  }

  return todoList;
}(List); // Exemplo de como instanciar uma classe no EJ6


var minhaLista = new todoList();

document.getElementById('novoMetodo').onclick = function () {} // Chamar metodo da classe insranciada
// minhaLista.add('todo');
// Chamando o metodo static da classe List{}
// var result = List.soma(1,4); 
;

console.log(); //---------------------------------------------------------------------------------------------
//######################## Operações em Array com ES6 ##############################
// Criação  de vetor

var vet = [1, 2, 3, 4, 5, 6, 7, 8]; // Função map - Percorre cada item do vetor, afim de criar um novo vetor, executando uma ação que é definida no return da função, o Parametro 'item' acessa o valor e o parametro 'index' que é a posição do valor.

var newVet = vet.map(function (item) {
  return item * 2;
});
console.log(newVet); // Função reduce - Consumir todo vetor e transforma em uma unica informação, um numero.

var sum = vet.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // Função filter - Fitra os elementos do array de acordo com alguma comparação estabelecida no retorno da função e assim cria outro array apenas com os valore filtrados

var pares = vet.filter(function (item) {
  return item % 2 === 0;
});
console.log(pares); // Função find - Encontra um elemento no array, se o elemento existir ele o retorna, se não retorna 'undefined';

var procura = vet.find(function (item) {
  return item === 8;
});
console.log(procura); //--------------------------------------------------------------
//################# Arrow Functions ###################
// Diminuindo o tamanho da função map e reduce com arrow functions;

var arr = [2, 3, 1, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var somando = arr.reduce(function (total, next) {
  return total + next;
});
console.log(somando); //--------------------------------------------------------------
//############### Valores padrão ########
// valores padrãoo em paramentros de funções

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
}

console.log(soma(1, 5));
console.log(soma(1));
console.log(soma()); //-------------------------------------------------------------
//################## Desestruturação de objetos ########

var obj = {
  nome: 'Jozivan',
  idade: 20,
  endereco: {
    rua: 'Travessa Porteiras',
    cidade: 'Crato'
  } // Recuperando dados sem a Desustruturação

};
var nome = obj.nome;
var idade = obj.idade;
var cidade = obj.endereco.cidade; // console.log(nome,idade, cidade);
// Recuperando dados com Desustruturação
///const {nome, idade, endereco:{cidade}} = obj;
// console.log(nome, idade, cidade);
// usando Desustruturação em funções

function exibir(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      rua = _ref.endereco.rua;
  console.log(nome, idade, rua);
}

exibir(obj); //----------------------------------------------------------------------------------------------------------------
//############################# REST #################################
//REST - Representa o '...<nome da variavel>' que seria uma forma de armazenar o "resto" dos dados de um vetor ou um array em uma variavel com desustruturaçao
// uso em objetos

var info = {
  nome3: "Diego",
  idade: 23,
  empresa: "rocketseat"
};

var nome3 = info.nome3,
    resto = _objectWithoutProperties(info, ["nome3"]);

console.log(nome);
console.log(resto); // uso em arrays

var vetor = [1, 2, 3, 4, 5];
var a = vetor[0],
    b = vetor[1],
    c_resto = vetor.slice(2);
console.log(a, b);
console.log(c_resto); //uso em funções
// Da forma abaixo a função pode receber quantos numeros possivel e todos serão jogados em um array "resto" cahamdo parametros

function somar() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  return parametros.reduce(function (item, next) {
    return item + next;
  });
}

console.log(somar(1, 2, 3, 4, 5)); //--------------------------------------------------------------------------------------------------------
//################# SPREAD ########################
// SPREAD - Faz o papel de propar informações de uma estrutura para outra
// unindo arrays

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2); // mesma coisa que fazer const arr3 = [1,2,3,4,5,6];
// Propangando um objeto para outro e sobrescrevendo um dado específico.

var info2 = {
  nome: "jozivan",
  idade: 20
};

var info3 = _objectSpread({}, info2, {
  nome: "Marciel"
});

console.log(info3); //--------------------------------------------------------------------------------------------
//####################### TEMPLATE LITERALS ###########################
//Template literals - Forma de concatenar strings de forma mais simples detro do ES6

var meuNome = "jozivan";
var minhaIdade = 20; // forma normal;

console.log("Meu nome é " + meuNome + " e tenho " + minhaIdade + " anos."); // Com template literals

console.log("Meu nome \xE9 ".concat(meuNome, " e tenho ").concat(minhaIdade, " anos.")); //--------------------------------------------------------------------------------------
//################ SINTAXE CURTA DE OBJETOS NO EJ6 #######################3
// Sintaxe curta de objetos no ES6

var apelido = "juinn";
var anos = 21; // Quando vamos criar um objeto atribuindo valores de variaveis ja exitentes se o nome da propriedade for igual ao nome da variavel é necessario apenas colocar a variavel.

var user4 = {
  apelido: apelido,
  anos: anos,
  empresa: "Incremetec"
};
console.log(user4);
