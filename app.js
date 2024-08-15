document.getElementById('encrypt').addEventListener('click', function() {
    processText('encriptar');
});

document.getElementById('decrypt').addEventListener('click', function() {
    processText('desencriptar');
});

function processText(action) {
    const inputText = document.getElementById('input-text').value;
    const outputTextElement = document.getElementById('output-text');
    const outputContent = document.querySelector('.output-content');
    const copySection = document.querySelector('.copy-section');
    const titleSection = document.querySelector('.title-section');

    // Aseguramos que el título siempre esté visible
    titleSection.style.display = 'block';

    let resultText;

    if (action === 'encriptar') {
        resultText = encriptar(inputText);
    } else if (action === 'desencriptar') {
        resultText = desencriptar(inputText);
    }

    // Mostrar el resultado en la sección de salida
    outputTextElement.textContent = resultText;

    // Mostrar las secciones de contenido y copiar
    outputContent.classList.add('show');
    copySection.classList.add('show');
}

function encriptar(text) {
    // Lógica de encriptación aquí
    // Ejemplo simple:
    return text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
}

function desencriptar(text) {
    // Lógica de desencriptación aquí
    // Ejemplo simple:
    return text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}
