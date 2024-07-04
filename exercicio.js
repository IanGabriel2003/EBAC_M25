const alunos = [
    {
        nome: "Pedro",
        nota: 7,
        materia: "Português"
    },
    {
        nome: "Maria",
        nota: 4,
        materia: "Português"
    },
    {
        nome: "Lucas",
        nota: 9,
        materia: "Português"
    },
    {
        nome: "Paulo",
        nota: 5,
        materia: "Português"
    }
];

function filtrarNotas(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarNotas(alunos);
console.log(alunosAprovados)