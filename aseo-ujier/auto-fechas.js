 // Establecer fechas automáticamente
 function establecerFechas() {
    const hoy = new Date();
    const diaActual = hoy.getDay();
    const anioActual = hoy.getFullYear();
    const mesActual = hoy.getMonth();

    // Calcular el próximo martes (2), jueves (4), sábado (6) y domingo (0)
    for (let i = 0; i < 7; i++) {
      const fechaFutura = new Date(anioActual, mesActual, hoy.getDate() + (i + 1));
      const dia = fechaFutura.getDay();

      if (dia === 2) { // Martes
        document.getElementById('martes').value = fechaFutura.toISOString().split('T')[0];
      } else if (dia === 4) { // Jueves
        document.getElementById('jueves').value = fechaFutura.toISOString().split('T')[0];
      } else if (dia === 6) { // Sábado
        document.getElementById('sabado').value = fechaFutura.toISOString().split('T')[0];
      } else if (dia === 0) { // Domingo
        document.getElementById('domingo').value = fechaFutura.toISOString().split('T')[0];
      }
    }
  }

  // Llamar a la función de establecer fechas cuando se carga la página
  window.onload = establecerFechas;