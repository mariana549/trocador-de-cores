let button = document.querySelector(".alternador");
let nomeCor = document.querySelector(".nomeCor");
let fundoMain = document.querySelector(".main");
let listaDeCor = document.querySelector(".listaDeCor");

function gerarCorAleatoria() {
    let letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function criarListCor(cor) {
    if (cor) {
        listaDeCor.innerHTML += `
            <li 
                class="liColors"
                style="background: ${cor};">
                    ${cor}
            </li>
        `
    } else {
        listaDeCor.innerHTML += `
        <li>#fff</li>
        `
    }
}

function removerPrimeiraCor(listColors) {
    if (listColors.children.length >= 5) {
        listColors.removeChild(listColors.children[0]);
    }
}


function toggleColor() {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        gerarCorAleatoria();

        let cor = gerarCorAleatoria();

        nomeCor.textContent = cor;
        nomeCor.style.color = cor;
        fundoMain.style.backgroundColor = cor;

        criarListCor(cor);

        removerPrimeiraCor(listaDeCor);
    })
}
toggleColor();