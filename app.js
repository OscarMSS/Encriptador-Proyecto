// Encriptar el texto usando una técnica simple (Cifrado César)
function encriptarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const textoSalida = document.getElementById('textoSalida');
    const desencriptarBtn = document.getElementById('desencriptar');
    const salidaImagen = document.querySelector('.salida-texto .ilustracion');
    const textoDefault = document.querySelector('.texto-default');
    
    if (textoEntrada.trim() === '') {
        textoSalida.innerHTML = '<strong>Ningún mensaje fue encontrado</strong>';
        textoDefault.classList.remove('texto-oculto'); // Mostrar el texto por defecto
        desencriptarBtn.disabled = true;
        salidaImagen.style.display = 'block'; // Mostrar la imagen si no hay texto
        return;
    }

    const textoEncriptado = cifrarCesar(textoEntrada);
    textoSalida.innerHTML = `<strong>${textoEncriptado}</strong>`;
    textoDefault.classList.add('texto-oculto'); // Ocultar el texto por defecto
    desencriptarBtn.disabled = false;
    salidaImagen.style.display = 'none'; // Ocultar la imagen al mostrar el texto
}

// Desencriptar el texto usando la técnica inversa (Cifrado César)
function desencriptarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const textoSalida = document.getElementById('textoSalida');
    const salidaImagen = document.querySelector('.salida-texto .ilustracion');
    const textoDefault = document.querySelector('.texto-default');
    
    if (textoEntrada.trim() === '') {
        textoSalida.innerHTML = '<strong>Ningún mensaje fue encontrado</strong>';
        textoDefault.classList.remove('texto-oculto'); // Mostrar el texto por defecto
        salidaImagen.style.display = 'block'; // Mostrar la imagen si no hay texto
        return;
    }

    const textoDesencriptado = decifrarCesar(textoEntrada);
    textoSalida.innerHTML = `<strong>${textoDesencriptado}</strong>`;
    textoDefault.classList.add('texto-oculto'); // Ocultar el texto por defecto
    salidaImagen.style.display = 'none'; // Ocultar la imagen al mostrar el texto
}

// Copiar el texto al portapapeles
function copiarTexto() {
    const textoSalida = document.getElementById('textoSalida').innerText;
    
    if (textoSalida.trim() === '' || textoSalida.includes('Ningún mensaje')) {
        alert('No hay texto para copiar.');
        return;
    }

    navigator.clipboard.writeText(textoSalida).then(() => {
        alert('Texto copiado al portapapeles.');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Función para cifrar texto usando el cifrado César
function cifrarCesar(texto) {
    const desplazamiento = 3; // Número de posiciones a desplazar
    return texto.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - 97 + desplazamiento) % 26 + 97);
        }
        return char;
    }).join('');
}

// Función para descifrar texto usando el cifrado César
function decifrarCesar(texto) {
    const desplazamiento = 3; // Número de posiciones a desplazar
    return texto.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - 97 - desplazamiento + 26) % 26 + 97);
        }
        return char;
    }).join('');
}
