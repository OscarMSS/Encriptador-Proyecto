// Función para encriptar el texto
function encryptText(text) {
    // Aquí se aplica la lógica de encriptación: "hola" => "hoberlai"
    let encrypted = text
        .replace(/h/g, 'ho')
        .replace(/o/g, 'ber')
        .replace(/l/g, 'la')
        .replace(/a/g, 'i');
    return encrypted;
}

// Función para desencriptar el texto
function decryptText(text) {
    // Aquí se aplica la lógica de desencriptación: "hoberlai" => "hola"
    let decrypted = text
        .replace(/ho/g, 'h')
        .replace(/ber/g, 'o')
        .replace(/la/g, 'l')
        .replace(/i/g, 'a');
    return decrypted;
}

// Función para actualizar el área de salida
function updateOutput(text) {
    const outputContent = document.querySelector('.output-content');
    const outputText = document.querySelector('.output-text');
    const subtext = document.querySelector('.subtext');
    const copyButton = document.getElementById('copy');

    if (text.trim() === '') {
        // Si el texto está vacío, mostrar la imagen y los mensajes por defecto
        outputContent.querySelector('img').style.display = 'block';
        outputText.textContent = 'Ningún mensaje fue encontrado';
        subtext.textContent = 'Ingresa el texto que desees encriptar o desencriptar';
        copyButton.style.display = 'none';
    } else {
        // Mostrar el texto encriptado/desencriptado y el botón de copiar
        outputContent.querySelector('img').style.display = 'none';
        outputText.textContent = text;
        subtext.textContent = '';
        copyButton.style.display = 'block';
    }
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    const outputText = document.querySelector('.output-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

// Event listeners para los botones
document.getElementById('encrypt').addEventListener('click', function() {
    const inputText = document.querySelector('textarea').value;
    const encryptedText = encryptText(inputText);
    updateOutput(encryptedText);
});

document.getElementById('decrypt').addEventListener('click', function() {
    const inputText = document.querySelector('textarea').value;
    const decryptedText = decryptText(inputText);
    updateOutput(decryptedText);
});

document.getElementById('copy').addEventListener('click', copyToClipboard);

// Event listener para cuando se borra el texto de la caja de entrada
document.querySelector('textarea').addEventListener('input', function() {
    const inputText = document.querySelector('textarea').value;
    updateOutput(inputText);
});
