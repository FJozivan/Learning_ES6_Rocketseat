"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1° Exercício
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      if (this.admin) {
        console.log('È administrador');
      } else {
        console.log('Não é administrador');
      }
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));

    _set(_getPrototypeOf(Admin.prototype), "admin", true, _assertThisInitialized(_this), true);

    return _this;
  }

  return Admin;
}(Usuario);

var user1 = new Usuario('jozivan@gmail.com', '12345');
var admin = new Admin('Junior@gmail.com', '31231');
user1.isAdmin();
admin.isAdmin(); //--------------------------------------------------------------------------------
// 2° Exercicio

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // usando map

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades); // usando filter

var maiorIdade = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(maiorIdade); // usando find

var userGoogle = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(userGoogle); // usando map e filter unidas.

var multiIdade = usuarios.map(function (item) {
  return {
    nome: item.nome,
    idade: item.idade * 2,
    empresa: item.empresa
  };
}).filter(function (item) {
  return item.idade <= 50;
});
console.log(multiIdade); //------------------------------------------------------------------------------------------
// 3° Exercicio
// 3.1 - Converter em Arrow functions

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // Resposta

var arrowF_map = arr.map(function (item) {
  return item + 10;
}); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario); // Resposta

var mostraIdade2 = function mostraIdade2(usuario) {
  return usuario.idade;
};

console.log(mostraIdade2(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var nome2 = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

mostraUsuario(nome2, idade);
mostraUsuario(nome2); // Resposta

var mostraUsuario3 = function mostraUsuario3() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario3(nome, idade));
console.log(mostraUsuario3(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // Resposta


var promise2 = function promise2() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //-------------------------------------------------------------------------------------
// 4° Exercicio
// 4.1 - usar desestruturação simples para transformar as propiedades do objeto em variaveis com seus rescpectivos valores.


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // Resposta

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
//4.2 - Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente;

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
}); // Resposta

var mostraInfo2 = function mostraInfo2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

var usuario3 = {
  nome: 'Diego',
  cidade: 'Tarrafas',
  idade: 23
};
console.log(mostraInfo2(usuario3)); //----------------------------------------------------------------------------------------------------
// 5° Exercicio
// 5.1 -  defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.

var arr2 = [1, 2, 3, 4, 5, 6]; // Resposta

var x = arr2[0],
    y = arr2.slice(1); //

console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// function soma...
// Resposta

var soma = function soma() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  return parametros.reduce(function (item, next) {
    return item + next;
  });
}; //


console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
// 5.2 - 

var usuario4 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}; // Crie uma variável usuario5 que contenha todos os dados do usuário porém com nome Gabriel.
// Resposta 1

var usuario5 = _objectSpread({}, usuario4, {
  nome: 'Gabriel'
}); // Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
// Resposta


var usuario6 = _objectSpread({}, usuario4, {
  endereco: _objectSpread({}, usuario4.endereco, {
    cidade: 'Lontras'
  })
}); //-------------------------------------------------------------------------------------------
// 6° Exercicio
// Converta o seguinte trecho de código utilizando Template Literals:


var usuario7 = 'Diego';
var idade2 = 23;
console.log('O usuário ' + usuario7 + ' possui ' + idade2 + ' anos'); // Resposta

console.log("O usu\xE1rio ".concat(usuario7, " possui ").concat(idade2, " anos")); //--------------------------------------------------------------------------------------------
// 7° Exercicio
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

var nome3 = 'Diego';
var idade3 = 23;
var usuario8 = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
}; // Resposta

var usuario9 = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
