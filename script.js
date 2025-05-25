const projetos = [
    {
        nome: "Projeto A",
        descricao: "Descrição do Projeto A.",
        link: "https://github.com/seuusuario/projeto-a"
    },
    {
        nome: "Projeto B",
        descricao: "Descrição do Projeto B.",
        link: "https://github.com/seuusuario/projeto-b"
    }
];

const secaoProjetos = document.getElementById('projetos');

projetos.forEach(proj => {
    const div = document.createElement('div');
    div.className = 'projeto';
    
    const titulo = document.createElement('h2');
    titulo.textContent = proj.nome;

    const descricao = document.createElement('p');
    descricao.textContent = proj.descricao;

    const link = document.createElement('a');
    link.href = proj.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Ver no GitHub";

    div.appendChild(titulo);
    div.appendChild(descricao);
    div.appendChild(link);

    secaoProjetos.appendChild(div);
});
