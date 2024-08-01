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
document.getElementById('enviar').addEventListener('click', function() {
	//Fecha del Martes, Jueves, Sabado y domingo
	var dateMartes = document.getElementById('dateMar').value;
	var dateMart = new Date(dateMartes);
	var dayMar = dateMart.getDate() + 1;
	var dateJueves = document.getElementById('dateJue').value;
	var dateJue = new Date(dateJueves);
	var dayJue = dateJue.getDate() + 1;
	var dateSabado = document.getElementById('dateSab').value;
	var dateSab = new Date(dateSabado);
	var daySab = dateSab.getDate() + 1;
	var dateDomingo = document.getElementById('dateDom').value;
	var dateDom = new Date(dateDomingo);
	var dayDom = dateDom.getDate() + 1;

	// Aseo Campus 1
	var aseoMar = document.getElementById('aseoMar').value;
	var aseoJue = document.getElementById('aseoJue').value;
	var aseoSab = document.getElementById('aseoSab').value;
	var aseoDom = document.getElementById('aseoDom').value;

	// Aseo Campus 2
	var aseoMar2 = document.getElementById('aseoMar2').value !== '' && document.getElementById('content-aseoMar2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('aseoMar2').value : '';
	if (aseoMar2 === ''){document.getElementById('aseoMar2').removeAttribute('name')};
	var aseoJue2 = document.getElementById('aseoJue2').value !== '' && document.getElementById('content-aseoJue2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('aseoJue2').value : '';
	if (aseoJue2 === ''){document.getElementById('aseoJue2').removeAttribute('name')};
	var aseoSab2 = document.getElementById('aseoSab2').value !== '' && document.getElementById('content-aseoSab2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('aseoSab2').value : '';
	if (aseoSab2 === ''){document.getElementById('aseoSab2').removeAttribute('name')};
	var aseoDom2 = document.getElementById('aseoDom2').value !== '' && document.getElementById('content-aseoDom2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('aseoDom2').value : '';
	if (aseoDom2 === ''){document.getElementById('aseoDom2').removeAttribute('name')};
	
	//Ujier Campus 1
	var ujierMar = document.getElementById('ujierMar').value;
	var ujierJue = document.getElementById('ujierJue').value;
	var ujierSab = document.getElementById('ujierSab').value;
	var ujierDom = document.getElementById('ujierDom').value;

	// Ujier Campus 2
	var ujierMar2 = document.getElementById('ujierMar2').value !== '' && document.getElementById('content-ujierMar2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('ujierMar2').value : '';
	if (ujierMar2 === ''){document.getElementById('ujierMar2').removeAttribute('name')};
	var ujierJue2 = document.getElementById('ujierJue2').value !== '' && document.getElementById('content-ujierJue2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('ujierJue2').value : '';
	if (ujierJue2 === ''){document.getElementById('ujierJue2').removeAttribute('name')};
	var ujierSab2 = document.getElementById('ujierSab2').value !== '' && document.getElementById('content-ujierSab2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('ujierSab2').value : '';
	if (ujierSab2 === ''){document.getElementById('ujierSab2').removeAttribute('name')};
	var ujierDom2 = document.getElementById('ujierDom2').value !== '' && document.getElementById('content-ujierDom2').style.display === 'inline-block' ? '%0A-%20'+document.getElementById('ujierDom2').value : '';
	if (ujierDom2 === ''){document.getElementById('ujierDom2').removeAttribute('name')};
	
	// Enviar
	window.open('https://api.whatsapp.com/send/?text=*ASEO%20Y%20UJIER*%0A%0A`Para%20los%20d%C3%ADas:`%0A-%20Martes%20'+dayMar+'%0A-%20Jueves%20'+dayJue+'%0A-%20S%C3%A1bado%20'+daySab+'%0A-%20Domingo%20'+dayDom+'%0A%0A`Aseo:`%0A-%20*Mar.*%20'+aseoMar+aseoMar2+'%0A-%20*Jue.*%20'+aseoJue+aseoJue2+'%0A-%20*S%C3%A1b.*%20'+aseoSab+aseoSab2+'%0A-%20*Dom.*%20'+aseoDom+aseoDom2+'%0A%0A`Ujier:`%0A-%20*Mar.*%20'+ujierMar+ujierMar2+'%0A-%20*Jue.*%20'+ujierJue+ujierJue2+'%0A-%20*S%C3%A1b.*%20'+ujierSab+ujierSab2+'%0A-%20*Dom.*%20'+ujierDom+ujierDom2)
})