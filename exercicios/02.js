const usuarios = [
    { nome: 'Bruno', idade: 24, cidade: 'Campo Grande' },
    { nome: 'Gustavo', idade: 18, cidade: 'Campo Grande' },
    { nome: 'Antonio', idade: 32, cidade: 'São Paulo' },
];
//2.1
const idade = usuarios.map(function(item){
    return item.idade;
});
console.log(idade);
//2.2
const filtro = usuarios.filter(function(item){
    return item.idade > 18 && item.cidade === 'Campo Grande';
});
console.log(filtro);    
//2.3
const cidadeSp = usuarios.find(function(item){
    return item.cidade === 'São Paulo';
});
console.log(cidadeSp);
//2.4
const novo = usuarios.map(item => ({...item, idade: item.idade*2}));
console.log(novo);
const novo2 = novo.filter(item => item.idade <= 50);
console.log(novo2);

const newUsers = usuarios
    .map( item => ({...item, idade: item.idade*2}))
    .filter( item => item.idade <= 50);
console.log(newUsers);
