document.getElementById('BotonGenerador').addEventListener('click', function () {
    let dnaChars = 'ACGT';
    let secuenciaADN= '';
    for (var i = 0; i < 18; i++) {
        let randomIndex = Math.floor(Math.random() * dnaChars.length);
        secuenciaADN += dnaChars.charAt(randomIndex);
    }
    document.getElementById('secuenciaADN').textContent = 'Secuencia de ADN generada: ' + secuenciaADN;
});