const arrayCartas = [
  'images/bobrossparrot.gif',
  'images/explodyparrot.gif',
  'images/fiestaparrot.gif',
  'images/metalparrot.gif',
  'images/revertitparrot.gif',
  'images/tripletsparrot.gif',
  'images/unicornparrot.gif',
];

const arraySelecionado = [];

let contador = 0;

let cartaCriada = '';

function quantidadeCartas() {
  let qtdeCartas = prompt('Digite a quantidade de cartas que você quer jogar');

  while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas % 2 !== 0) {
    qtdeCartas = Number(
      prompt(
        'Com quantas cartas quer jogar? Só pode valores pares entre 4 e 14'
      )
    );
  }

  contador = 0;
  while (qtdeCartas / 2 > contador) {
    arraySelecionado.push(`${arrayCartas[contador]}`);
    arraySelecionado.push(`${arrayCartas[contador]}`);
    contador++;
  }

  let lista = document.querySelector('.div-pai');

  contador = 0;
  while (qtdeCartas > contador) {
    lista.innerHTML =
      lista.innerHTML +
      `<div class="card" data-test="card">
            <div class="front-face face">
                <img class="parrot-virado-baixo" src="./images//back.png" data-test="face-down-image"/>
            </div>
            <div class="back-face face">
                <img class="parrot-virado-cima" src="./${arraySelecionado[contador]}" />
            </div>
        </div>`;
    contador++;
    console.log('arraySelecionado antes', arraySelecionado);
  }

  console.log('qtdeCartas', qtdeCartas);
  console.log('lista', lista);
  console.log('lista.innerHTML', lista.innerHTML);
  console.log('arrayCartas', arrayCartas);
  console.log('arrayCartas[contador]', arrayCartas[contador]);
  console.log('arrayCartas.length', arrayCartas.length);
  console.log('arraySelecionado depoiss', arraySelecionado);
  console.log('contador', contador);
}
quantidadeCartas();
