class Usuario {
    constructor(email, senha){
            email,
            senha,
            this.admin = false
        }
    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());