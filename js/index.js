// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
document.getElementById('random').addEventListener('click', function()
{
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta
            console.log(data.results[0]);
                renderizarDadosUsuario(data.results[0]);
        });
});

function renderizarDadosUsuario(dados) {
    let container = document.querySelector('div.card');
    container.innerHTML = '';

    let infoNome = dados.name;
    let nomeCompleto = infoNome.title + " " + infoNome.first + " " + infoNome.last;
    let picture = dados.picture.large;
    let email = dados.email;

    let nameNode = document.createElement('h2').appendChild(document.createTextNode(nomeCompleto));
    
    let img = document.createElement('img');
    img.setAttribute("src", picture);
    
    let mailText = document.createTextNode(email);
    
    container.classList.add('card')
    container.appendChild(nameNode);
    container.appendChild(img);
    container.appendChild(mailText);
    document.querySelector('div.card').appendChild(container);
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.