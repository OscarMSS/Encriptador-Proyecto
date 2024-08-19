// Función para encriptar el texto usando el Cifrado César
function encryptText(text, shift = 3) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Letras mayúsculas
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Letras minúsculas
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char; // No encriptar caracteres no alfabéticos
    }).join('');
}

// Función para desencriptar el texto usando el Cifrado César
function decryptText(text, shift = 3) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Letras mayúsculas
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Letras minúsculas
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
        return char; // No desencriptar caracteres no alfabéticos
    }).join('');
}

// Función para actualizar el área de salida
function updateOutput(text) {
    const outputContent = document.querySelector('.output-content');
    const outputText = document.querySelector('.output-text');
    const subtext = document.querySelector('.subtext');
    const copyButton = document.getElementById('copy');

    if (text.trim() === '') {
        outputContent.querySelector('img').style.display = 'block';
        outputText.textContent = 'Ningún mensaje fue encontrado';
        subtext.textContent = 'Ingresa el texto que desees encriptar o desencriptar';
        copyButton.style.display = 'none';
    } else {
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
    const outputText = document.querySelector('.output-text').textContent;
    const decryptedText = decryptText(outputText);
    updateOutput(decryptedText);
});

document.getElementById('copy').addEventListener('click', copyToClipboard);

// Event listener para cuando se borra el texto de la caja de entrada
document.querySelector('textarea').addEventListener('input', function() {
    const inputText = document.querySelector('textarea').value;
    updateOutput(inputText);
});
