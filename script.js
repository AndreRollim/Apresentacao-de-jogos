let listaCarros = [
    {
        "nome": "BMW-M3 Gtr",
        "img": "assets/OIP.jpg",
        "descricao": "NFS MostWanted",
    },
    {
       "nome": "Nissan Skyline Gtr",
        "img": "assets/NFSU1.jpeg",
        "descricao": "NFS Underground" ,
    },
    {
        "nome": "Nissan 350Z Gtr",
         "img": "assets/NFSU2.jpeg",
         "descricao": "NFS Underground 2" ,
    },
    {
        "nome": "Audi R8 Gtr",
         "img": "assets/NFSC.jpeg",
         "descricao": "NFS Carbon", 
    },
    {
        "nome": "Mazda rx7",
         "img": "assets/NFSH.jpeg",
         "descricao": "NFS Heat" ,
    },
    {
        "nome": "Lancer Evo",
         "img": "assets/NFSPS.jpeg",
         "descricao": "NFS Pro-Street", 
    }
]
// <div class="card m-2"> Utilizei o m-2 como função do bootstrap para aplicar margem
listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
    <div class="col-md-4">
        <div class="card m-2">
            <img src="${carro.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${carro.descricao}</h5>
            <a href="#" class="btn btn-secondary" onClick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></i></a>
            </div>
        </div>
    </div>
        
    `

})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high"></i>`;
    }
}