import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas}`
    }
}

const novoAdmin = new Admin('Amanda', 'a@a.com', '2022-01-01')
console.log(novoAdmin.criarCurso('JS', 20))