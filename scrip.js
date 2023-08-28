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
});

