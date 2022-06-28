import "./styles.css";
// Definir variables
var jugador = 1;

// TODO: @ALL variable puntaje del jugador 1
// TODO: @ALL variable puntaje del jugador 2

// funcion tirar dado
function tirar_dado() {
  var dado = Math.floor(Math.random() * 6 + 1);
  document.getElementById("valor_dado").innerHTML = dado;
  return dado;
}

/**
 * @param num_jugador
 *
 * @return siguiente
 */
function cambiar_jugador(turno) {
  // 0, 1... 20
  var jugador = 1;
  turno = turno + 1;
  var result = turno % 2;
  if (result === 0) {
    console.log("PAR: " + turno);
    return jugador + 1; // 2
  } else {
    console.log("IMPAR: " + turno);
    return jugador; // 1
  }
}

var titulo = document.createElement("h1");
titulo.innerHTML = "HELLO WORLD";

document.getElementById("app").innerHTML = `
<h1>Dice Game</h1>
<div>
<h1 id="valor_dado"></h1>
<h2 id="jugador"></h2>
<h3 id="mensaje"></h3>
</div>
`;
document.getElementById("app").append(titulo);

// TODO: @ALL Crear tabla de puntajes

// funcion cambiar jugador

// representa turnos
for (var turno = 0; turno <= 20; turno++) {
  console.log("turno = " + turno);
  cambiar_jugador(turno);

  // función tirar dado
  var dado = tirar_dado();

  if (dado === 6) {
    // ?? quien es el jugador
    // TODO: @ALL sumar un punto al jugador
    document.getElementById("mensaje").innerText = "😂";
  } else {
    document.getElementById("mensaje").innerText = "🤬";
  }
}
