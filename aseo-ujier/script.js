// Botones de Aseo
document.getElementById('showAseoMar2').onclick = function() {
	document.getElementById('content-aseoMar2').style.display = 'inline-block'
	document.getElementById('aseoMar2').required = true
	document.getElementById('showAseoMar2').style.display = "none";
	document.getElementById('hiddenAseoMar2').onclick = function () {
		document.getElementById('content-aseoMar2').style.display = "none"
		document.getElementById('aseoMar2').required = false
		document.getElementById('showAseoMar2').style.display = "inline-block"
	}
}
document.getElementById('showAseoJue2').onclick = function() {
	document.getElementById('content-aseoJue2').style.display = 'inline-block'
	document.getElementById('aseoJue2').required = true
	document.getElementById('showAseoJue2').style.display = "none"
	document.getElementById('hiddenAseoJue2').onclick = function () {
		document.getElementById('content-aseoJue2').style.display = "none";
		document.getElementById('aseoJue2').required = false
		document.getElementById('showAseoJue2').style.display = "inline-block"
	}
}
document.getElementById('showAseoSab2').onclick = function() {
	document.getElementById('content-aseoSab2').style.display = 'inline-block'
	document.getElementById('aseoSab2').required = true
	document.getElementById('showAseoSab2').style.display = "none"
	document.getElementById('hiddenAseoSab2').onclick = function () {
		document.getElementById('content-aseoSab2').style.display = "none"
		document.getElementById('aseoSab2').required = false
		document.getElementById('showAseoSab2').style.display = "inline-block"
	}
}
document.getElementById('showAseoDom2').onclick = function() {
	document.getElementById('content-aseoDom2').style.display = 'inline-block'
	document.getElementById('aseoDom2').required = true
	document.getElementById('showAseoDom2').style.display = "none"
	document.getElementById('hiddenAseoDom2').onclick = function () {
		document.getElementById('content-aseoDom2').style.display = "none"
		document.getElementById('aseoDom2').required = false
		document.getElementById('showAseoDom2').style.display = "inline-block"
	}
}
// Botones de Ujier
document.getElementById('showUjierMar2').onclick = function() {
	document.getElementById('content-ujierMar2').style.display = 'inline-block'
	document.getElementById('ujierMar2').required = true
	document.getElementById('showUjierMar2').style.display = "none";
	document.getElementById('hiddenUjierMar2').onclick = function () {
		document.getElementById('content-ujierMar2').style.display = "none"
		document.getElementById('ujierMar2').required = false
		document.getElementById('showUjierMar2').style.display = "inline-block"
	}
}
document.getElementById('showUjierJue2').onclick = function() {
	document.getElementById('content-ujierJue2').style.display = 'inline-block'
	document.getElementById('ujierJue2').required = true
	document.getElementById('showUjierJue2').style.display = "none"
	document.getElementById('hiddenUjierJue2').onclick = function () {
		document.getElementById('content-ujierJue2').style.display = "none";
		document.getElementById('ujierJue2').required = false
		document.getElementById('showUjierJue2').style.display = "inline-block"
	}
}
document.getElementById('showUjierSab2').onclick = function() {
	document.getElementById('content-ujierSab2').style.display = 'inline-block'
	document.getElementById('ujierSab2').required = true
	document.getElementById('showUjierSab2').style.display = "none"
	document.getElementById('hiddenUjierSab2').onclick = function () {
		document.getElementById('content-ujierSab2').style.display = "none"
		document.getElementById('ujierSab2').required = false
		document.getElementById('showUjierSab2').style.display = "inline-block"
	}
}
document.getElementById('showUjierDom2').onclick = function() {
	document.getElementById('content-ujierDom2').style.display = 'inline-block'
	document.getElementById('ujierDom2').required = true
	document.getElementById('showUjierDom2').style.display = "none"
	document.getElementById('hiddenUjierDom2').onclick = function () {
		document.getElementById('content-ujierDom2').style.display = "none"
		document.getElementById('ujierDom2').required = false
		document.getElementById('showUjierDom2').style.display = "inline-block"
	}
}

// Función Enviar
document.getElementById('enviar').onclick = function(event) {
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
	if (document.getElementById('aseoMar2').value !== '' && document.getElementById('content-aseoMar2').style.display == 'inline-block'){
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
	
	//Ujier Campus 1
	var ujierMar = document.getElementById('ujierMar').value
	var ujierJue = document.getElementById('ujierJue').value
	var ujierSab = document.getElementById('ujierSab').value
	var ujierDom = document.getElementById('ujierDom').value

	// Ujier Campus 2
	if (document.getElementById('ujierMar2').value !== '') {
		var ujierMar2 = document.getElementById('ujierMar2').value
		var siUjierMar2 = '%0A-%20'+ujierMar2
	} else {
		document.getElementById('ujierMar2').removeAttribute('name')
		var siUjierMar2 = ''
	}
	if (document.getElementById('ujierJue2').value !== '') {
		var ujierJue2 = document.getElementById('aujierue2').value
		var siUjierJue2 = '%0A-%20'+ujierJue2
	} else {
		document.getElementById('ujierJue2').removeAttribute('name')
		var siUjierJue2 = ''
	}
	if (document.getElementById('ujierSab2').value !== '') {
		var ujierSab2 = document.getElementById('ujierSab2').value
		var siUjierSab2 = '%0A-%20'+ujierSab2
	} else {
		document.getElementById('ujierSab2').removeAttribute('name')
		var siUjierSab2 = ''
	}
	if (document.getElementById('ujierDom2').value !== '') {
		var ujierDom2 = document.getElementById('ujierDom2').value
		var siUjierDom2 = '%0A-%20'+ujierDom2
	} else {
		document.getElementById('ujierDom2').removeAttribute('name')
		var siUjierDom2 = ''
	}
	
	// Enviar
	if (document.getElementById('form').checkValidity()) {
		event.preventDefault()
		window.open('https://api.whatsapp.com/send/?text=*ASEO%20Y%20UJIER*%0A%0A`Para%20los%20d%C3%ADas:`%0A-%20Martes%20'+dayMar+'%0A-%20Jueves%20'+dayJue+'%0A-%20S%C3%A1bado%20'+daySab+'%0A-%20Domingo%20'+dayDom+'%0A%0A`Aseo:`%0A-%20*Mar.*%20'+aseoMar+siAseoMar2+'%0A-%20*Jue.*%20'+aseoJue+siAseoJue2+'%0A-%20*S%C3%A1b.*%20'+aseoSab+siAseoSab2+'%0A-%20*Dom.*%20'+aseoDom+siAseoDom2+'%0A%0A`Ujier:`%0A-%20*Mar.*%20'+ujierMar+siUjierMar2+'%0A-%20*Jue.*%20'+ujierJue+siUjierJue2+'%0A-%20*S%C3%A1b.*%20'+ujierSab+siUjierSab2+'%0A-%20*Dom.*%20'+ujierDom+siUjierDom2)
	}
}