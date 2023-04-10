
const arrayCartas = [
    'images/bobrossparrot.gif',
    'images/explodyparrot.gif',
    'images/fiestaparrot.gif',
    'images/metalparrot.gif',
    'images/revertitparrot.gif',
    'images/tripletsparrot.gif',
    'images/unicornparrot.gif',
];

let jogada = 0;

let qtdeCartas = prompt('Digite a quantidade de cartas que você quer jogar');

let cont = 0;

let arraySelecionado = [];

let containter = document.querySelector('.container');

let lista = [];


cont = 0
while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas % 2 !== 0) {
    qtdeCartas = Number(
        prompt(
            'Com quantas cartas quer jogar? Só pode valores pares entre 4 e 14'
        )
    );
}

while (qtdeCartas > cont) {
    lista[cont] = ` <div onclick="virarCarta(this)" class="card card_fli" data-test="card">
                            <div class="imageInnerHTML">${arrayCartas[cont]}</div>
                            <div class="front-face face">
                                <img data-test="face-down-image" src="./images/back.png"/>
                            </div>
                            <div class="back-face face">
                                <img data-test="face-up-image" src="./${arrayCartas[cont]}"/>
                            </div>
                        </div>
                        `;
    cont = cont + 1;
}


cont = 0;
while (cont < qtdeCartas / 2) {
    arraySelecionado.push(lista[cont]);
    arraySelecionado.push(lista[cont]);
    cont++;
}

arraySelecionado.sort(comparadorSort);
function comparadorSort() {
    return Math.random() - 0.5;
}

cont = 0;
while (cont < arraySelecionado.length) {
    containter.innerHTML += arraySelecionado[cont];
    cont++;
}


let verificaCarta = [];

let DivCardFlippedCards = [];

let cartaToda = document.querySelectorAll('.card');

let flippedCards = document.querySelectorAll('.flippedCards');


function virarCarta(selector) {
    jogada = jogada + 1;

    let front = selector.querySelector('.front-face')
    front.classList.add('frontFace');

    let back = selector.querySelector('.back-face')
    back.classList.add('backFace');

    selector.classList.add('flippedCards');
    flippedCards = document.querySelectorAll('.flippedCards');

    let imageInnerHTML = selector.querySelector('.imageInnerHTML').innerHTML;

    selector.classList.remove('card_fli');
    selector.removeAttribute('onclick');
    verificaCarta.push(imageInnerHTML);
    DivCardFlippedCards.push(selector);


    if (verificaCarta.length > 1) {

        for (let indice = 0; indice < arraySelecionado.length; indice++) {
            cartaToda[indice].removeAttribute('onclick');
        }

        setTimeout(() => {
            if (verificaCarta[0] === verificaCarta[1]) {
                let comparaCarta = document.querySelectorAll('.card_fli');
                console.log('comparaCarta antes', comparaCarta)
                for (let indice = 0; indice < comparaCarta.length; indice++) {
                    comparaCarta[indice].setAttribute('onclick', "virarCarta(this)");
                }
                verificaCarta = [];
                DivCardFlippedCards = [];

                if (flippedCards.length == arraySelecionado.length) {
                    alert(`Você ganhou em ${jogada} jogadas!`);
                }

            } else if (verificaCarta[0] !== verificaCarta[1]) {
                DivCardFlippedCards[0].querySelector('.front-face').classList.remove('frontFace');
                DivCardFlippedCards[0].querySelector('.back-face').classList.remove('backFace');

                DivCardFlippedCards[0].classList.remove('flippedCards');

                DivCardFlippedCards[1].querySelector('.front-face').classList.remove('frontFace');
                DivCardFlippedCards[1].querySelector('.back-face').classList.remove('backFace');

                DivCardFlippedCards[1].classList.remove('flippedCards');

                DivCardFlippedCards[0].classList.add('card_fli');

                DivCardFlippedCards[1].classList.add('card_fli');

                let comparaCarta = document.querySelectorAll('.card_fli');

                for (let indice = 0; indice < comparaCarta.length; indice++) {
                    comparaCarta[indice].setAttribute('onclick', "virarCarta(this)");
                    console.log('comparaCarta despois', comparaCarta)
                }

                DivCardFlippedCards = [];
                verificaCarta = [];
            }
        }, 1000);
    }
}


// let arraySelecionado = []

// let cards = document.querySelectorAll(".memory-card")

// let jogadas = 0

// let primeiraCarta, segundaCarta

// let carta_

// let qtdcarta = prompt("Digite a quantidade de cartas que você quer jogar (4 a 14)")
// qtdcarta = Number(qtdcarta)

// while ((qtdcarta % 2 !== 0) ||
//     (qtdcarta < 4) || (qtdcarta > 14)) {
//     qtdcarta = prompt("Com quantas cartas quer jogar? Só pode valores pares entre 4 e 14")
//     qtdcarta = Number(qtdcarta)
// }

// for (let i = 0; i < qtdcarta; i++) {
//     arraySelecionado.push(cards[i])
//     // console.log('cards[i]', cards[i])
//     console.log('arrayseleconado', arraySelecionado.push(cards[i]))
// }

// arraySelecionado.sort(() => Math.random() > 0.5 ? 1 : -1);
    
// arraySelecionado.forEach(card => {
//     // card.style.order = Math.floor(Math.random() * 14);;
//     card.setAttribute("onclick", "clicandoCartas(this)")
//     card.classList.remove("escondido")
//     // console.log('card depois', card)
//     // console.log('arrayseleconado dpsss',arraySelecionado[0])
// })


// function clicandoCartas(selector) {
//     const virandoCartas = document.querySelectorAll(".card-flipped")
//     if (virandoCartas.length < 2) {
//         if (primeiraCarta == undefined) {
//             primeiraCarta = selector
//             primeiraCarta.removeAttribute("onclick")
//         } else if (primeiraCarta != selector) {
//             segundaCarta = selector
//             primeiraCarta.removeAttribute("onclick")
//         }
//         if (primeiraCarta != undefined && segundaCarta != undefined) {

//             if (primeiraCarta.id == segundaCarta.id) {
//                 primeiraCarta.classList.add("estat")
//                 segundaCarta.classList.add("estat")

//                 const esticCartas = document.querySelectorAll(".estat")
//                 primeiraCarta.classList.remove("card-flipped")
//                 segundaCarta.classList.remove("card-flipped")
//                 primeiraCarta = undefined
//                 segundaCarta = undefined
//                 if (esticCartas.length == qtdcarta) {
//                     setTimeout(() => {
//                         alert(`Você ganhou em ${jogadas/2} jogadas!`)
//                     }, 500)

//                 }

//             } else {
//                 selector.classList.add("card-flipped")
//                 if (segundaCarta != undefined) {
//                     setTimeout(() => {
//                         primeiraCarta.classList.remove("card-flipped")
//                         segundaCarta.classList.remove("card-flipped")
//                         primeiraCarta.setAttribute("onclick", "clicandoCartas(this)")
//                         segundaCarta.setAttribute("onclick", "clicandoCartas(this)")
//                         primeiraCarta = undefined
//                         segundaCarta = undefined
//                     }, 1000)
//                 }
//             }
//         } else {
//             selector.classList.add("card-flipped")
//             if (segundaCarta != undefined) {
//                 setTimeout(() => {
//                     primeiraCarta.classList.remove("card-flipped")
//                     segundaCarta.classList.remove("card-flipped")
//                     primeiraCarta.setAttribute("onclick", "clicandoCartas(this)")
//                     segundaCarta.setAttribute("onclick", "clicandoCartas(this)")
//                     primeiraCarta = undefined
//                     segundaCarta = undefined
//                 }, 1000)
//             }
//         }
//     }
//     jogadas = jogadas + 1
// }
