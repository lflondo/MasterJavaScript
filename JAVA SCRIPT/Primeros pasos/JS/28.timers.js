"use stric";

window.addEventListener("load", () => {
  //Timers

  function intervalo() {
    // set interval
    var tiempo = setInterval(() => {
      console.log("Set interval ejecutado");
      var encabezado = document.querySelector("h1");
      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "35px";
      } else {
        encabezado.style.fontSize = "50px";
      }
    }, 1000);
    return tiempo;
  }

  var tiempo = intervalo();

  //set Timeout (Se ejecuta solo una vez)
  /*var tiempo = setTimeout(() => {
    console.log("Set interval ejecutado");
    var encabezado = document.querySelector("h1");
    if (encabezado.style.fontSize == "50px") {
      encabezado.style.fontSize = "35px";
    } else {
      encabezado.style.fontSize = "50px";
    }
  }, 5000);*/

  var stop = document.querySelector("#stop");

  stop.addEventListener("click", () => {
    alert("Haz parado el intervalo en bucle");
    clearInterval(tiempo);
  });

  var start = document.querySelector("#start");

  start.addEventListener("click", () => {
    alert("Haz iniciado el intervalo en bucle");
    intervalo();
  });
});
