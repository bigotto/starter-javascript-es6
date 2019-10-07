//Rest
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x);
console.log(y);

//Função soma de n parametros
function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//Spread
const usuario = {
    nome: 'Bruno',
    idade: 24,
    endereco: {
        cidade: 'Jales',
        uf: 'SP',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco,   cidade: 'Lontras'}};

console.log(usuario);
console.log(usuario2);
console.log(usuario3);