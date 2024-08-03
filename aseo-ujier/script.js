// Constante Con Array de Los Días De Servicio
const showButton = ['Mar', 'Jue', 'Sab', 'Dom'];

// Botones Mostar Campus De Aseo
showButton.forEach(day => {
	document.getElementById(`showAseo${day}2`).onclick = () => {
		document.getElementById(`showAseo${day}2`).style.display = 'none';
		document.getElementById(`aseo${day}2`).required = true;
		document.getElementById(`content-aseo${day}2`).style.display = 'inline-block';
		document.getElementById(`hiddenAseo${day}2`).onclick = () => {
			document.getElementById(`aseo${day}2`).required = false;
			document.getElementById(`content-aseo${day}2`).style.display = 'none';
			document.getElementById(`showAseo${day}2`).style.display = 'inline-block';
		};
	};
});

// Botones Mostar Campus De Ujier
showButton.forEach(day => {
	document.getElementById(`showUjier${day}2`).onclick = () => {
		document.getElementById(`showUjier${day}2`).style.display = 'none';
		document.getElementById(`ujier${day}2`).required = true;
		document.getElementById(`content-ujier${day}2`).style.display = 'inline-block';
		document.getElementById(`hiddenUjier${day}2`).onclick = () => {
			document.getElementById(`ujier${day}2`).required = false;
			document.getElementById(`content-ujier${day}2`).style.display = 'none';
			document.getElementById(`showUjier${day}2`).style.display = 'inline-block';
		}
	};
})

// Función Enviar
document.getElementById('myForm').addEventListener('submit', function(event) {
    // alert('hola');
    event.preventDefault();
    //Fecha del Martes, Jueves, Sabado y domingo
    const dates = {
        Mar: new Date(document.getElementById('dateMar').value),
        Jue: new Date(document.getElementById('dateJue').value),
        Sab: new Date(document.getElementById('dateSab').value),
        Dom: new Date(document.getElementById('dateDom').value)
    };

    const days = {
        Mar: dates.Mar.getUTCDate(),
        Jue: dates.Jue.getUTCDate(),
        Sab: dates.Sab.getUTCDate(),
        Dom: dates.Dom.getUTCDate()
    };

	// Inputs De Aseo
    const aseo = ['Mar', 'Jue', 'Sab', 'Dom'].reduce((acc, day) => {
		const value = document.getElementById(`aseo${day}`).value;
		const value2 = document.getElementById(`aseo${day}2`).value;
		const contentDisplay = document.getElementById(`content-aseo${day}2`).style.display;
		acc += `%0A-%20*${day}%20${value}`;
		if (value2 !== '' && contentDisplay === 'inline-block') {
			acc += `%0A-%20${value2}`;
		}
		return acc;
	}, '');
	
	// Inputs De Ujier
    const ujier = ['Mar', 'Jue', 'Sab', 'Dom'].reduce((acc, day) => {
        const value = document.getElementById(`ujier${day}`).value;
        const value2 = document.getElementById(`ujier${day}2`).value;
        const contentDisplay = document.getElementById(`content-ujier${day}2`).style.display;
		acc += `%0A-%20*${day}*%20${value}`;
        if (value2 !== '' && contentDisplay === 'inline-block') {
			acc += `%0A-%20${value2}`;
        }
		return acc;
    }, '');

	// Redirecionando
  if(myForm.checkValidity()){
    window.open(`https://api.whatsapp.com/send/?text=*ASEO%20Y%20UJIER*%0A%0A\`Para%20los%20d%C3%ADas:\`%0A-%20Martes%20${days.Mar}%0A-%20Jueves%20${days.Jue}%0A-%20S%C3%A1bado%20${days.Sab}%0A-%20Domingo%20${days.Dom}%0A%0A\`Aseo:\`${aseo}%0A%0A\`Ujier:\`${ujier}`);
  }
});