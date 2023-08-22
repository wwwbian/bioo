document.getElementById('BotonGenerador').addEventListener('click', function () {
    let Caracteres= 'ACGT';
    let secuenciaADN= '';
    for (let i = 0; i < 18; i++) {
        let randomIndex = Math.floor(Math.random() * Caracteres.length);
        secuenciaADN += Caracteres.charAt(randomIndex);
    }
    document.getElementById('secuenciaADN').textContent = 'Secuencia de ADN generada: ' + secuenciaADN;
});