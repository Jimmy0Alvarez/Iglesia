function prevSection(currentSection) {
    document.getElementById('section' + currentSection).style.display = 'none';
    document.getElementById('section' + (currentSection - 1)).style.display = 'block';
}