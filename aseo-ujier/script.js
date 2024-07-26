// Botones de Aseo
document.getElementById('showAseoMar2').onclick = function() {
	document.getElementById('content-aseoMar2').style.display = 'inline-block'
	document.getElementById('showAseoMar2').style.display = "none";
	document.getElementById('hiddenAseoMar2').onclick = function () {
		document.getElementById('content-aseoMar2').style.display = "none"
		document.getElementById('showAseoMar2').style.display = "inline-block"
	}
}
document.getElementById('showAseoJue2').onclick = function() {
	document.getElementById('content-aseoJue2').style.display = 'inline-block'
	document.getElementById('showAseoJue2').style.display = "none"
	document.getElementById('hiddenAseoJue2').onclick = function () {
		document.getElementById('content-aseoJue2').style.display = "none";
		document.getElementById('showAseoJue2').style.display = "inline-block"
	}
}
document.getElementById('showAseoSab2').onclick = function() {
	document.getElementById('content-aseoSab2').style.display = 'inline-block'
	document.getElementById('showAseoSab2').style.display = "none"
	document.getElementById('hiddenAseoSab2').onclick = function () {
		document.getElementById('content-aseoSab2').style.display = "none"
		document.getElementById('showAseoSab2').style.display = "inline-block"
	}
}
document.getElementById('showAseoDom2').onclick = function() {
	document.getElementById('content-aseoDom2').style.display = 'inline-block'
	document.getElementById('showAseoDom2').style.display = "none"
	document.getElementById('hiddenAseoDom2').onclick = function () {
		document.getElementById('content-aseoDom2').style.display = "none"
		document.getElementById('showAseoDom2').style.display = "inline-block"
	}
}

// Función Enviar
document.getElementById('Enviar').onclick = function Enviar() {
	var form = document.getElementById('form')
	if (!form.checkValidity()) {
		alert('completa el formulario mi soo')
		return
	}
	//Fecha del Martes, Jueves, Sabado y domingo
	var dateMartes = document.getElementById('dateMar').value
	var dateMart = new Date(dateMartes)
	var dayMar = dateMart.getDate() + 1
	var dateJueves = document.getElementById('dateJue').value
	var dateJue = new Date(dateJueves)
	var dayJue = dateJue.getDate() + 1
	var dateSabado = document.getElementById('dateSab').value
	var dateSab = new Date(dateSabado)
	var daySab = dateSab.getDate() + 1
	var dateDomingo = document.getElementById('dateDom').value
	var dateDom = new Date(dateDomingo)
	var dayDom = dateDom.getDate() + 1

	// Aseo Campus 1
	var aseoMar = document.getElementById('aseoMar').value
	var aseoJue = document.getElementById('aseoJue').value
	var aseoSab = document.getElementById('aseoSab').value
	var aseoDom = document.getElementById('aseoDom').value

	// Aseo Campus 2
	if (document.getElementById('aseoMar2').value !== '') {
		var aseoMar2 = document.getElementById('aseoMar2').value
		var siAseoMar2 = '%0A-%20'+aseoMar2
	} else {
		document.getElementById('aseoMar2').removeAttribute('name')
		var siAseoMar2 = ''
	}
	if (document.getElementById('aseoJue2').value !== '') {
		var aseoJue2 = document.getElementById('aseoJue2').value
		var siAseoJue2 = '%0A-%20'+aseoJue2
	} else {
		document.getElementById('aseoJue2').removeAttribute('name')
		var siAseoJue2 = ''
	}
	if (document.getElementById('aseoSab2').value !== '') {
		var aseoSab2 = document.getElementById('aseoSab2').value
		var siAseoSab2 = '%0A-%20'+aseoSab2
	} else {
		document.getElementById('aseoSab2').removeAttribute('name')
		var siAseoSab2 = ''
	}
	if (document.getElementById('aseoDom2').value !== '') {
		var aseoDom2 = document.getElementById('aseoDom2').value
		var siAseoDom2 = '%0A-%20'+aseoDom2
	} else {
		document.getElementById('aseoDom2').removeAttribute('name')
		var siAseoDom2 = ''
	}
	
	//Ujier
	var ujierMar = document.getElementById('ujierMar').value
	var ujierJue = document.getElementById('ujierJue').value
	var ujierSab = document.getElementById('ujierSab').value
	var ujierDom = document.getElementById('ujierDom').value

	// Enviar
	window.open('https://api.whatsapp.com/send/?text=*ASEO%20Y%20UJIER*%0A%0A`Para%20los%20d%C3%ADas:`%0A-%20Martes%20'+dayMar+'%0A-%20Jueves%20'+dayJue+'%0A-%20S%C3%A1bado%20'+daySab+'%0A-%20Domingo%20'+dayDom+'%0A%0A`Aseo:`%0A-%20*Mar.*%20'+aseoMar+siAseoMar2+'%0A-%20*Jue.*%20'+aseoJue+siAseoJue2+'%0A-%20*S%C3%A1b.*%20'+aseoSab+siAseoSab2+'%0A-%20*Dom.*%20'+aseoDom+siAseoDom2+'%0A%0A`Ujier:`%0A-%20*Mar.*%20'+ujierMar+'%0A-%20*Jue.*%20'+ujierJue+'%0A-%20*S%C3%A1b.*%20'+ujierSab+'%0A-%20*Dom.*%20'+ujierDom)
}