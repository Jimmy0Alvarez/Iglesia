function nextSection(currentSection) {
    const section = document.getElementById('section' + currentSection);
    const inputs = section.querySelectorAll('input[required]');

    let allFilled = true;
    inputs.forEach((input) => {
        if (!input.value) {
        input.setCustomValidity('Este campo es requerido.');
        allFilled = false;
        } else {
        input.setCustomValidity('');
        }
        input.reportValidity();
    });

    if (allFilled) {
        document.getElementById('section' + currentSection).style.display = 'none';
        document.getElementById('section' + (currentSection + 1)).style.display = 'block';

        if (currentSection === 3) {
        mostrarResumen();
        }
    }
}