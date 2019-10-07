const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
//Desestruturação
const { nome, endereco:{ cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

//4.2
const usuario = {
    nome: 'Bruno',
    idade: 24,
};

function mostraInfo ({nome, idade}) {
    //const {nome, idade} = usuario;
    // return `${usuario.nome} tem ${usuario.idade} anos.`;
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
