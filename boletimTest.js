var pdf = require("html-pdf");

var nomeDoUsuario = "Seu Nome";
var curso = "Desenvolvimento Sistemas";
var categoria = "TI";

const materias = [
    { nome: "Programação Orientada a Objetos", nota: "98" },
    { nome: "Banco de Dados", nota: "99" },
    { nome: "Desenvolvimento Web", nota: "100" },
    { nome: "Redes de Computadores", nota: "97" }
];


var conteudo = `
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        h1 { color: red; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        img {
            width: 100px;
        }
    </style>
</head>
<body>
    <h1>TURMA 3A</h1>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SENAI_S%C3%A3o_Paulo_logo.png/1280px-SENAI_S%C3%A3o_Paulo_logo.png' />
    <hr>
    <p>Modelo de PDF</p>
    <p>Nome: ${nomeDoUsuario}</p>
    <p>Curso: ${curso}</p>
    <p>Categoria: ${categoria}</p>
    <h2>Matérias Cursadas</h2>
    <table>
        <tr>
            <th>Nome da Matéria</th>
            <th>Nota</th>
        </tr>
        ${materias.map(materia => `
            <tr>
                <td>${materia.nome}</td>
                <td>${materia.nota}</td>
            </tr>
        `).join('')}
    </table>
</body>
</html>
`;

pdf.create(conteudo, {}).toFile("./meupdf.pdf", (err, res) => {
    if (err) {
        console.log("UM ERRO ACONTECEU: (");
    } else {
        console.log(res);
    }
})