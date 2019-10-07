///////////////////////////////////////////////
//   Converter as funções em arrow functions /
//////////////////////////////////////////////

// 3.1
const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });
const newArr = arr.map(item => item +10);
console.log(newArr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
//Valores default nessa função!!!
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
//    }
//Trasformando a função mais interna em arrow function
const promise = function(){
    return new Promise((resolve, reject) => resolve());
}
//Transformando todo o conjunto em arrow function
const promise = () => new Promise((resolve, reject) => resolve());