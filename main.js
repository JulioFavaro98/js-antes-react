// Nullish Coalescing Operator
/*
const idade = null;
document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado'); 

// Objetos
const user = {
  name: 'Julio',
  age: 25,
  address: {
    street: 'Rua teste',
    number: 147
  }
};

document.body.innerText = ('name' in user); //Retorno será true, o operador 'in' verifica se existe a informação que é solicitada, no caso o 'name' no objeto 'user'
document.body.innerText = Object.keys(user); //Retorno serão as chaves do objeto, nesse caso 'name, age, address'
document.body.innerText = Object.values(user); //Retorno serão os valores do objeto, no caso é 'Julio, 25, [object Object]' pois o atributo address é um objeto com seus próprios valores
document.body.innerText = JSON.stringify(Object.values(user)); //Dessa maneira será retornado em formato JSON, com o atributo address mostrando corretamente
document.body.innerText = JSON.stringify(Object.entries(user)); //O retorno será de vetores com duas entradas, o nome da key 'name' e o valor dela 'Julio'

-------------------------------------------------------------------------------------------------------------------

//Desestruturação - Quando você quer pegar um valor de dentro do objeto e inseri-lo em uma variável, por exemplo

const { address, age: idade } = user
document.body.innerText = JSON.stringify({address, idade});

-------------------------------------------------------------------------------------------------------------------

//Rest operator - Ele irá retornar todo o resto do objeto, nesse caso apenas age e address, pois o name foi desestruturado nesse caso

const { name, ...rest } = user;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, , third, ...rest] = array;

-------------------------------------------------------------------------------------------------------------------

//Short Syntax

const name = 'Julio';
const age = 25

const user = {
  name, 
  age
}


//Optional Chaining

const user = {
  name: 'Julio',
  age: 25,
  address: {
    street: 'Rua teste',
    number: 147,
    zip: {
      code: '86410000',
      city: 'Ribeirão Claro'
    }
  }
};

//Metodos de Array - .map()

const array = [1, 2, 3, 4, 5]

const novoArray = array.map(item => {
  item *= 3;
  if (item % 2 == 0) {
    return item * 10;
  } 
  return item;
})

// Métodos de Array - .filter()
const array = [1, 2, 3, 4, 5]

const novoArray = array.filter(item => item % 2 == 0)

// Métodos de Array - .every()
const array = [1, 2, 3, 4, 5, '']
const todosItemsSaoNumero = array.every(item => typeof item == 'number')

// Métodos de Array - .some()

const array = [1, 2, 3, 4, 5]
const peloMenosUmItemNaoNumero = array.some(item => typeof item != 'number')

// Métodos de Array - .find()/.findIndex() o find encontra o item que corresponde a condição, o findIndex encontra o indice do item que corresponde a condição

const array = [1, 2, 3, 4, 5, '']
const par = array.findIndex(item => item % 2 == 0) 

// Métodos de Array - .reduce()
const array = [1, 2, 3, 4, 5]
const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)


document.body.innerText = JSON.stringify(soma);

// Template Literals

const name = null;
const messagem = `Bem vindo, ${name ? name : 'visitante'}`;

document.body.innerText = messagem;

//Promisses (.then/ .catch)

fetch('https://api.github.com/users/JulioFavaro98')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body)
  })
  .catch(err => {
    console.error(err)
  })
  .finally(() => {
    console.log('deu')
  })

async function buscaDadosGithub(){
  try {
    const response = await fetch('https://api.github.com/users/JulioFavaro98');
    const body = await response.json();

    return body.name
  } catch (err){
    console.error(err)
  } finally {
    console.log('deu')
  }
}

buscaDadosGithub().then(name => {
  console.log(name)
});*/