let arraySelecionado = []

let cards = document.querySelectorAll(".memory-card")

let jogadas = 0

let primeiraCarta, segundaCarta

let carta_

let qtdcarta = prompt("Digite a quantidade de cartas que você quer jogar (4 a 14)")
qtdcarta = Number(qtdcarta)

while ((qtdcarta % 2 !== 0) ||
    (qtdcarta < 4) || (qtdcarta > 14)) {
    qtdcarta = prompt("Com quantas cartas quer jogar? Só pode valores pares entre 4 e 14")
    qtdcarta = Number(qtdcarta)
}

for (let i = 0; i < qtdcarta; i++) {
    arraySelecionado.push(cards[i])
    // console.log('cards[i]', cards[i])
    console.log('arrayseleconado', arraySelecionado.push(cards[i]))
}

arraySelecionado.forEach(card => {
    card.style.order = Math.floor(Math.random() * 14);;
    card.setAttribute("onclick", "clicandoCartas(this)")
    card.classList.remove("escondido")
    // console.log('card depois', card)
    // console.log('arrayseleconado dpsss',arraySelecionado[0])
})


function clicandoCartas(selector) {
    const virandoCartas = document.querySelectorAll(".card-flipped")
    if (virandoCartas.length < 2) {
        if (primeiraCarta == undefined) {
            primeiraCarta = selector
            primeiraCarta.removeAttribute("onclick")
        } else if (primeiraCarta != selector) {
            segundaCarta = selector
            primeiraCarta.removeAttribute("onclick")
        }
        if (primeiraCarta != undefined && segundaCarta != undefined) {

            if (primeiraCarta.id == segundaCarta.id) {
                primeiraCarta.classList.add("estat")
                segundaCarta.classList.add("estat")

                const esticCartas = document.querySelectorAll(".estat")
                primeiraCarta.classList.remove("card-flipped")
                segundaCarta.classList.remove("card-flipped")
                primeiraCarta = undefined
                segundaCarta = undefined
                if (esticCartas.length == qtdcarta) {
                    setTimeout(() => {
                        alert(`Você ganhou em ${jogadas/2} jogadas!`)
                    }, 500)

                }

            } else {
                selector.classList.add("card-flipped")
                if (segundaCarta != undefined) {
                    setTimeout(() => {
                        primeiraCarta.classList.remove("card-flipped")
                        segundaCarta.classList.remove("card-flipped")
                        primeiraCarta.setAttribute("onclick", "clicandoCartas(this)")
                        segundaCarta.setAttribute("onclick", "clicandoCartas(this)")
                        primeiraCarta = undefined
                        segundaCarta = undefined
                    }, 1000)
                }
            }
        } else {
            selector.classList.add("card-flipped")
            if (segundaCarta != undefined) {
                setTimeout(() => {
                    primeiraCarta.classList.remove("card-flipped")
                    segundaCarta.classList.remove("card-flipped")
                    primeiraCarta.setAttribute("onclick", "clicandoCartas(this)")
                    segundaCarta.setAttribute("onclick", "clicandoCartas(this)")
                    primeiraCarta = undefined
                    segundaCarta = undefined
                }, 1000)
            }
        }
    }
    jogadas = jogadas + 1
}