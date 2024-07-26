document.getElementById('showAseoMar2').onclick = function() {
	document.getElementById('content-aseoMar2').style.display = 'inline-block';
	document.getElementById('showAseoMar2').style.display = "none";
	document.getElementById('aseoMar2').removeAttribute('disabled');
	document.getElementById('hiddenAseoMar2').onclick = function () {
		document.getElementById('content-aseoMar2').style.display = "none";
	document.getElementById('showAseoMar2').style.display = "inline";
	document.getElementById('aseoMar2').setAttribute('disabled', '');
	}
};

document.getElementById('Enviar').onclick = function() {
	//Fecha del Martes
	var dateMartes = document.getElementById('dateMar').value;
	var dateMart = new Date(dateMartes);
	var dayMar = dateMart.getDate() + 1;
	//Fecha del Jueves
	var dateJueves = document.getElementById('dateJue').value;
	var dateJue = new Date(dateJueves);
	var dayJue = dateJue.getDate() + 1;
	//Fecha del Sabado
	var dateSabado = document.getElementById('dateSab').value;
	var dateSab = new Date(dateSabado);
	var daySab = dateSab.getDate() + 1;
	//Fecha del Domingo
	var dateDomingo = document.getElementById('dateDom').value;
	var dateDom = new Date(dateDomingo);
	var dayDom = dateDom.getDate() + 1;

	//Aseo
	var aseoMar = document.getElementById('aseoMar').value;
	if (document.getElementById('aseoMar2').hasAttribute('disabled')) {
		document.getElementById('aseoMar2').removeAttribute('name');
	} else {
		var aseoMar2 = document.getElementById('aseoMar2').value;
	}
	var aseoJue = document.getElementById('aseoJue').value;
	if (document.getElementById('aseoJue2').hasAttribute('disabled')) {
		document.getElementById('aseoJeu2').removeAttribute('name');
	} else {
		var aseoJue2 = document.getElementById('aseoJue2').value;
	}
	var aseoSab = document.getElementById('aseoSab').value;
	if (document.getElementById('aseoSab2').hasAttribute('disabled')) {
		document.getElementById('aseoSab2').removeAttribute('name');
	} else {
		var aseoSab2 = document.getElementById('aseoSab2').value;
	}
	var aseoDom = document.getElementById('aseoDom').value;
	if (document.getElementById('aseoDom2').hasAttribute('disabled')) {
		document.getElementById('aseoDom2').removeAttribute('name');
	} else {
		var aseoDom2 = document.getElementById('aseoDom2').value;
	}
	//Ujier
	var ujierMar = document.getElementById('ujierMar').value;
	var ujierJue = document.getElementById('ujierJue').value;
	var ujierSab = document.getElementById('ujierSab').value;
	var ujierDom = document.getElementById('ujierDom').value;

	// Enviar
	if (aseoMar2) {
		var siAseoMar2 = '%0A-%20'+aseoMar2;
	} else {
		var siAseoMar2 = '';
	}
	if (aseoJue2) {
		var siAseoJue2 = '%0A-%20'+aseoJue2;
	} else {
		var siAseoJue2 = '';
	}
	if (aseoSab2) {
		var siAseoSab2 = '%0A-%20'+aseoSab2;
	} else {
		var siAseoSab2 = '';
	}
	if (aseoDom2) {
		var siAseoDom2 = '%0A-%20'+aseoDom2;
	} else {
		var siAseoDom2 = '';
	}
	window.open('https://api.whatsapp.com/send/?text=*ASEO%20Y%20UJIER*%0A%0A`Para%20los%20d%C3%ADas:`%0A-%20Martes%20'+dayMar+'%0A-%20Jueves%20'+dayJue+'%0A-%20S%C3%A1bado%20'+daySab+'%0A-%20Domingo%20'+dayDom+'%0A%0A`Aseo:`%0A-%20*Mar.*%20'+aseoMar+siAseoMar2+'%0A-%20*Jue.*%20'+aseoJue+siAseoJue2+'%0A-%20*S%C3%A1b.*%20'+aseoSab+siAseoSab2+'%0A-%20*Dom.*%20'+aseoDom+siAseoDom2+'%0A%0A`Ujier:`%0A-%20*Mar.*%20'+ujierMar+'%0A-%20*Jue.*%20'+ujierJue+'%0A-%20*S%C3%A1b.*%20'+ujierSab+'%0A-%20*Dom.*%20'+ujierDom);
}