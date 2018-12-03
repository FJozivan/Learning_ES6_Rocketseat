// 1° Exercício
class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        if(this.admin){
            console.log('È administrador');
        }else{
            console.log('Não é administrador');
        }
    }

}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        super.admin = true;        
    }
}

const user1 = new Usuario('jozivan@gmail.com', '12345');
const admin = new Admin('Junior@gmail.com', '31231');

user1.isAdmin();
admin.isAdmin();

//--------------------------------------------------------------------------------

// 2° Exercicio
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
// usando map
const idades = usuarios.map(item => item.idade);
console.log(idades);

// usando filter
const maiorIdade = usuarios.filter(item => item.idade > 18 && item.empresa === 'Rocketseat');
console.log(maiorIdade);

// usando find
const userGoogle = usuarios.find(item => item.empresa === 'Google');
console.log(userGoogle);

// usando map e filter unidas.
const multiIdade = usuarios.map(item => ({nome:item.nome, idade:item.idade*2, empresa:item.empresa})).filter(item => item.idade<=50);
console.log(multiIdade);

//------------------------------------------------------------------------------------------

// 3° Exercicio
// 3.1 - Converter em Arrow functions
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
}); 

// Resposta
const arrowF_map = arr.map(item => item +10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);

// Resposta
const mostraIdade2 = usuario => usuario.idade;
console.log(mostraIdade2(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome2 = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome2, idade);
mostraUsuario(nome2);

// Resposta
const mostraUsuario3 = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario3(nome, idade));
console.log(mostraUsuario3(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

// Resposta
const promise2 = () => (new Promise((resolve, reject) => resolve()));
//-------------------------------------------------------------------------------------

// 4° Exercicio

// 4.1 - usar desestruturação simples para transformar as propiedades do objeto em variaveis com seus rescpectivos valores.
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

// Resposta
const {nome, endereco:{cidade,estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2 - Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente;
function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 })

// Resposta
const mostraInfo2 = ({nome, idade}) => `${nome} tem ${idade} anos.`;
const usuario3 = {
    nome: 'Diego', 
    cidade: 'Tarrafas',
    idade: 23
    
}
console.log(mostraInfo2(usuario3));
//----------------------------------------------------------------------------------------------------

// 5° Exercicio

// 5.1 -  defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.
const arr2 = [1, 2, 3, 4, 5, 6]

// Resposta
const [x, ...y] = arr2;
//
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
// Resposta
const soma = (...parametros) => parametros.reduce((item, next) => item + next);
//
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2 - 
const usuario4 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
// Crie uma variável usuario5 que contenha todos os dados do usuário porém com nome Gabriel.
// Resposta 1
const usuario5 = {...usuario4, nome:'Gabriel'};

// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
// Resposta
const usuario6 = {...usuario4, endereco:{...usuario4.endereco, cidade:'Lontras'}};

//-------------------------------------------------------------------------------------------

// 6° Exercicio
// Converta o seguinte trecho de código utilizando Template Literals:

const usuario7 = 'Diego';
const idade2 = 23;
console.log('O usuário ' + usuario7 + ' possui ' + idade2 + ' anos');

// Resposta
console.log(`O usuário ${usuario7} possui ${idade2} anos`);

//--------------------------------------------------------------------------------------------

// 7° Exercicio
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nome3 = 'Diego';
const idade3 = 23;

const usuario8 = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};

// Resposta
const usuario9 = {
    nome,
    idade,
    cidade: 'Rio do Sul'
};