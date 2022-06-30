import "./styles.css";


/**
 * @brief crea un # aleatorio
 * @returns dato
 */
 function tirar_dado() {
  var dado = Math.floor(Math.random() * 6 + 1);
  // document.getElementById("valor_dado").innerHTML = dado;
  return dado;
}

/**
* @brief sirve para simular una jugada
* @return 1 - 0
*/
function jugar(dado , jugador, turno) {
  console.log("turno = " + turno);
  var jugador = cambiar_jugador(turno);
  // función tirar dado
  document.getElementById("valor_dado").innerHTML = dado;

    // document.getElementById("valor_dado").innerHTML = dado;
    // si el dado es 6 
    if (dado === 6) {
      // si el jugador es 1 
      if (jugador == 1) {
        puntaje_1++;
        document.getElementById("puntaje_1").innerText = puntaje_1;
        document.getElementById("turno").style.background = 'red'
        console.info("jugador1 = GANÓ")
      }
      if (jugador == 2) {
        puntaje_2++;
        document.getElementById("puntaje_2").innerText = puntaje_2;

        console.info("jugador2 = GANÓ")
      }
  
      document.getElementById("mensaje").innerText = "😂";
    } else {
      document.getElementById("mensaje").innerText = "🤬";
    }

    // cambio color 

    if(jugador == 1) {
      document.getElementById("turno").style.background = 'blue'
    }
    if(jugador == 2) {
      document.getElementById("turno").style.background = 'red'
    }

  return true;

}

/**
* @brief cambio de jugador usando par o impar
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



// Definir variables
var jugador = 1;

var puntaje_1 = 0;
var puntaje_2 = 0;

document.getElementById("app").innerHTML = `
<h1 id="titulo">Dice Game</h1>
<header>
  <div id="turno">
  <h2 id="jugador_turno">TURNO</h2>
  </div>
</header>
<div class="pantalla">
  <div class="jugador_1">
    <h2 id="puntaje_1">0</h2>
  </div>
  <div id="valor_dado">
  </div>  
  <div class="jugador_2">
    <h2 id="puntaje_2">0</h2>
  </div>
</div>
<footer>
<h3 id="mensaje"></h3>
</footer>

`;

var jugadas = [1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20]

jugadas.forEach( (jugada, turno) => {

  if (false) {

  }
  else{
    setTimeout(function() {
      // simular tiempo
    //alert(turno)
    var dado = tirar_dado()
    // usar intervalo 
    jugar(dado, jugador, turno)

    //setInterval(jugar, 1000, dado , jugador, turno);
    }, 500*(turno+1)) // or just index, depends on your needs
}   
  
} ) 
