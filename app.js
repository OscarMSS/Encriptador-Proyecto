// Función para mostrar los mensajes e imagen por defecto si no hay texto en la entrada
function verificarEntradaVacia() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const textoSalida = document.getElementById('textoSalida');
    const salidaImagen = document.querySelector('.salida-texto .ilustracion');
    const textoDefault = document.querySelector('.texto-default');

    if (textoEntrada.trim() === '') {
        textoSalida.innerHTML = '<strong>Ningún mensaje fue encontrado</strong>';
        textoDefault.classList.remove('texto-oculto'); // Mostrar el texto por defecto
        salidaImagen.style.display = 'block'; // Mostrar la imagen
    }
}

// Encriptar el texto usando sustitución personalizada
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

    // Reemplazar las vocales por patrones
    const textoEncriptado = textoEntrada
        .replace(/a/g, 'ai').replace(/A/g, 'Ai')
        .replace(/e/g, 'enter').replace(/E/g, 'Enter')
        .replace(/i/g, 'imes').replace(/I/g, 'Imes')
        .replace(/o/g, 'ober').replace(/O/g, 'Ober')
        .replace(/u/g, 'ufat').replace(/U/g, 'Ufat');

    textoSalida.innerHTML = `<strong>${textoEncriptado}</strong>`;
    textoDefault.classList.add('texto-oculto'); // Ocultar el texto por defecto
    desencriptarBtn.disabled = false;
    salidaImagen.style.display = 'none'; // Ocultar la imagen al mostrar el texto
}

// Desencriptar el texto revertiendo la sustitución
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

    // Revertir los patrones a las vocales originales (asegurando el orden correcto)
    const textoDesencriptado = textoEntrada
        .replace(/ufat/g, 'u').replace(/Ufat/g, 'U')
        .replace(/ober/g, 'o').replace(/Ober/g, 'O')
        .replace(/imes/g, 'i').replace(/Imes/g, 'I')
        .replace(/enter/g, 'e').replace(/Enter/g, 'E')
        .replace(/ai/g, 'a').replace(/Ai/g, 'A');

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

// Evento input para verificar si el campo de entrada está vacío
document.getElementById('textoEntrada').addEventListener('input', verificarEntradaVacia);
