// Función para mostrar los mensajes e imagen por defecto si no hay texto en la entrada
function verificarEntradaVacia() {
    const textoEntrada = document.querySelector('.input-section textarea').value;
    const textoSalida = document.querySelector('.output-text');
    const salidaImagen = document.querySelector('.output-content img');
    const textoDefault = document.querySelector('.subtext');
    const copiarBtn = document.getElementById('copy');

    if (textoEntrada.trim() === '') {
        textoSalida.innerHTML = 'Ningún mensaje fue encontrado';
        textoDefault.classList.remove('texto-oculto'); // Mostrar el texto por defecto
        salidaImagen.style.display = 'block'; // Mostrar la imagen
        copiarBtn.style.display = 'none'; // Ocultar el botón de copiar
    } else {
        textoDefault.classList.add('texto-oculto'); // Ocultar el texto por defecto si hay entrada
        salidaImagen.style.display = 'none'; // Ocultar la imagen si hay entrada
        copiarBtn.style.display = 'block'; // Mostrar el botón de copiar
    }
}

// Encriptar el texto usando sustitución personalizada
function encriptarTexto() {
    const textoEntrada = document.querySelector('.input-section textarea').value;
    const textoSalida = document.querySelector('.output-text');
    const desencriptarBtn = document.getElementById('decrypt');
    const salidaImagen = document.querySelector('.output-content img');
    const textoDefault = document.querySelector('.subtext');
    const copiarBtn = document.getElementById('copy');
    const titulo = document.querySelector('.title-section');
    const subtitulo = document.querySelector('.subtext');

    if (textoEntrada.trim() === '') {
        textoSalida.innerHTML = 'Ningún mensaje fue encontrado';
        textoDefault.classList.remove('texto-oculto'); // Mostrar el texto por defecto
        salidaImagen.style.display = 'block'; // Mostrar la imagen si no hay texto
        copiarBtn.style.display = 'none'; // Ocultar el botón de copiar
        titulo.style.display = 'block'; // Mostrar el título
        subtitulo.style.display = 'block'; // Mostrar el subtítulo
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
    copiarBtn.style.display = 'block'; // Mostrar el botón de copiar
    titulo.style.display = 'none'; // Ocultar el título
    subtitulo.style.display = 'none'; // Ocultar el subtítulo
}

// Desencriptar el texto revertiendo la sustitución
function desencriptarTexto() {
    const textoEntrada = document.querySelector('.input-section textarea').value;
    const textoSalida = document.querySelector('.output-text');
    const salidaImagen = document.querySelector('.output-content img');
    const textoDefault = document.querySelector('.subtext');
    const copiarBtn = document.getElementById('copy');
    const titulo = document.querySelector('.title-section');
    const subtitulo = document.querySelector('.subtext');

    if (textoEntrada.trim() === '') {
        textoSalida.innerHTML = 'Ningún mensaje fue encontrado';
        textoDefault.classList.remove('texto-oculto'); // Mostrar el texto por defecto
        salidaImagen.style.display = 'block'; // Mostrar la imagen si no hay texto
        copiarBtn.style.display = 'none'; // Ocultar el botón de copiar
        titulo.style.display = 'block'; // Mostrar el título
        subtitulo.style.display = 'block'; // Mostrar el subtítulo
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
    copiarBtn.style.display = 'block'; // Mostrar el botón de copiar
    titulo.style.display = 'none'; // Ocultar el título
    subtitulo.style.display = 'none'; // Ocultar el subtítulo
}

// Copiar el texto al portapapeles
function copiarTexto() {
    const textoSalida = document.querySelector('.output-text').innerText;

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
document.querySelector('.input-section textarea').addEventListener('input', verificarEntradaVacia);

// Añadir eventos a los botones
document.getElementById('encrypt').addEventListener('click', encriptarTexto);
document.getElementById('decrypt').addEventListener('click', desencriptarTexto);
document.getElementById('copy').addEventListener('click', copiarTexto);
