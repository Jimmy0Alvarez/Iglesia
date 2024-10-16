function mostrarResumen() {
    const dias = {
        Martes: document.getElementById('martes').value,
        Jueves: document.getElementById('jueves').value,
        Sábado: document.getElementById('sabado').value,
        Domingo: document.getElementById('domingo').value,
    };

    const aseo = {
        Martes: document.getElementById('aseoMartes').value,
        Jueves: document.getElementById('aseoJueves').value,
        Sábado: document.getElementById('aseoSabado').value,
        Domingo: document.getElementById('aseoDomingo').value,
    };

    const ujier = {
        Martes: document.getElementById('ujierMartes').value,
        Jueves: document.getElementById('ujierJueves').value,
        Sábado: document.getElementById('ujierSabado').value,
        Domingo: document.getElementById('ujierDomingo').value,
    };

    document.getElementById('resumenDias').innerText = JSON.stringify(dias, null, 2);
    document.getElementById('resumenAseo').innerText = JSON.stringify(aseo, null, 2);
    document.getElementById('resumenUjier').innerText = JSON.stringify(ujier, null, 2);
}