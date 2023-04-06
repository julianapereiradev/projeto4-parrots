let contador = 0;
let jogar = document.querySelector('.direction-row');
let qtdeCartas = Number(prompt('Com quantas cartas quer jogar?'));

while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas % 2 !== 0) {
  qtdeCartas = Number(prompt('Com quantas cartas quer jogar?'));
}

while (contador < qtdeCartas) {
  jogar.innerHTML =
    jogar.innerHTML +
    `<div class="card" data-test="card">
        <div class="front-face face">
            <img class="parrot-virado-baixo" src="./images//back.png" data-test="face-down-image" >
        </div>
        <div class="back-face face">
            Desvirou
        </div>
    </div>`;
  contador++;
}
