window.onload = function() {
    // Listas de palabras
    let inicio = "Un ";
    let adjetivos = ["extraño ", "gigante ", "lento ", "enojado ", "gracioso ", "pequeño ", "asustado ", "loco "];
    let sujetos = ["gato ", "niño ", "taxista ", "vecino ", "perro ", "pájaro ", "robot "];
    let acciones = ["se llevó mi ", "rompió mi ", "perdió mi ", "comió mi ", "tiró mi ", "manchó mi "];
    let objetos = ["mochila ", "teléfono ", "cartera ", "zapato ", "laptop ", "chaqueta ", "bocadillo "];
    let lugares = ["en el parque", "en mi casa", "en la oficina", "en el supermercado", "en el autobús", "en la calle", "en la escuela"];
  
    // Variables aleatorias
    let aleatorio1 = Math.floor(Math.random() * adjetivos.length);
    let aleatorio2 = Math.floor(Math.random() * sujetos.length);
    let aleatorio3 = Math.floor(Math.random() * acciones.length);
    let aleatorio4 = Math.floor(Math.random() * objetos.length);
    let aleatorio5 = Math.floor(Math.random() * lugares.length);
  
    // Creando la excusa
    document.querySelector("#excusa").innerHTML = 
      inicio + adjetivos[aleatorio1] + sujetos[aleatorio2] + acciones[aleatorio3] + objetos[aleatorio4] + lugares[aleatorio5];
  };
  