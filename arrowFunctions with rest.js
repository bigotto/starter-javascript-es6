// function soma(...params) {
//     return params.reduce(function(total, next){
//         return total+next;
//     });
// }

//Transformar a função reduce em arrow function
// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }

//Transformar a função soma em arrow function
const soma = (...params) => params.reduce((total, next) => total + next);

console.log(soma(1,2,3,4));