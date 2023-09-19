let botonADN = document.getElementById("adn");
let botonARN = document.getElementById("arn");

document.getElementById('BotonGenerador').addEventListener('click', function () {
    let Caracteres = 'ACGT';
    let secuenciaADN = '';
    let secuenciaARN = '';

    for (let i = 0; i < 18; i++) {
        let randomIndex = Math.floor(Math.random() * Caracteres.length);
        secuenciaADN += Caracteres.charAt(randomIndex);
    }

    for (i = 0, j = 0; i < secuenciaADN.length; i++, j++) {
        secuenciaARN += '';
    
        if (secuenciaADN[i] == 'A') {
            secuenciaARN += 'T';
        } else if (secuenciaADN[i] == 'T') {
            secuenciaARN += 'U';  
        } else if (secuenciaADN[i] == 'C') {
            secuenciaARN += 'G';  
        } else if (secuenciaADN[i] == 'G') {
            secuenciaARN += 'C'; 
        }
    }
    
    document.getElementById('secuenciaADN').textContent = 'Secuencia de ADN generada: ' + secuenciaADN;
    document.getElementById('secuenciaARN').textContent = 'Secuencia de ARN generada: ' + secuenciaARN;

// TEXTO ADN
botonADN.addEventListener("click", function () {
  let elementoMensaje = document.getElementById("texto1");
  let mensaje = "Se genera la cadena de ADN";
  elementoMensaje.textContent = mensaje;
});

// TEXTO ARN
botonARN.addEventListener("click", function () {
    let elementoMensajee = document.getElementById("texto2");
    let mensaje2 = "Se traduce la cadena de ADN a ARN";
    elementoMensajee.textContent = mensaje2;
  });

});

