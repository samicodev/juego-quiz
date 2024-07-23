// Array de objetos que contiene las preguntas del cuestionario
const preguntas = [
  {
    pregunta: "¿Qué etiqueta HTML se usa para definir una celda en una tabla?",
    opciones: ["<table>", "<tr>", "<td>", "<th>"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué elemento HTML se utiliza para crear un enlace a otra página web?",
    opciones: ["<a>", "<link>", "<div>", "<span>"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál de los siguientes es un operador aritmético en JavaScript?",
    opciones: ["&&", "+", "==", "||"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué método se usa en JavaScript para convertir un string a un número entero?",
    opciones: ["parseFloat()", "parseInt()", "toString()", "Number()"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué significa JSON en el contexto de desarrollo web?",
    opciones: ["JavaScript Object Notation", "JavaScript Online Notation", "Java Standard Object Notation", "JavaScript Ordered Notation"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué propiedad CSS se usa para cambiar el color del texto?",
    opciones: ["background-color", "color", "font-size", "text-align"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué significa el término 'responsive design' en desarrollo web?",
    opciones: ["Diseño que se adapta a diferentes tamaños de pantalla", "Diseño que usa solo imágenes en alta resolución", "Diseño que se enfoca en la velocidad de carga", "Diseño que solo funciona en dispositivos móviles"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es el propósito del atributo 'alt' en las etiquetas de imagen HTML?",
    opciones: ["Proporcionar un texto alternativo si la imagen no puede ser cargada", "Cambiar el color de la imagen", "Especificar el tamaño de la imagen", "Añadir un enlace a la imagen"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es el propósito del atributo 'href' en una etiqueta <a> en HTML?",
    opciones: ["Especificar la URL del enlace", "Establecer el color del enlace", "Definir el estilo del enlace", "Definir el texto del enlace"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué etiqueta HTML se utiliza para definir una lista desordenada?",
    opciones: ["<ul>", "<ol>", "<li>", "<dl>"],
    respuestaCorrecta: 0
  }
];

// Variables para almacenar el índice de la pregunta actual y el puntaje
let indicePreguntaActual = 0;
let puntaje = 0;
const totalPreguntas = preguntas.length;

// Mostrar el número total de preguntas
document.getElementById('total-preguntas').innerText = totalPreguntas;

// Llamar a la función para mostrar la primera pregunta
mostrarPregunta();

// Función para mostrar la pregunta actual y sus opciones
function mostrarPregunta() {
  const preguntaActual = preguntas[indicePreguntaActual];

  document.getElementById('numero-pregunta').innerText = indicePreguntaActual + 1;
  document.getElementById('pregunta').innerText = preguntaActual.pregunta;

  const contenedorOpciones = document.getElementById('opciones');
  //Se vacia el contenedor para agregar nuevas opciones
  contenedorOpciones.innerHTML = '';

  // Crear botones para cada opción y añadirlos al contenedor
  for (let i = 0; i < preguntaActual.opciones.length; i++) {
    const boton = document.createElement('button');
    boton.innerText = preguntaActual.opciones[i];
    boton.onclick = () => verificarRespuesta(i, boton);
    contenedorOpciones.appendChild(boton);
  }
}

// Función para verificar la respuesta seleccionada por el usuario
function verificarRespuesta(indice, botonSeleccionado) {
  const preguntaActual = preguntas[indicePreguntaActual];
  const botones = document.querySelectorAll('#opciones button');

  // Verificar si la opción seleccionada es la correcta
  if (indice === preguntaActual.respuestaCorrecta) {
    botonSeleccionado.classList.add('correcto');
    puntaje++; 
  } else {
    botonSeleccionado.classList.add('incorrecto');
  }

  // Deshabilitar todos los botones después de seleccionar una opción
  for (let i = 0; i < botones.length; i++) {
    botones[i].disabled = true;
    if (i === preguntaActual.respuestaCorrecta) {
      botones[i].classList.add('correcto');
    }
  }

}

// Función para mostrar la siguiente pregunta o el puntaje final
function mostrarSiguientePregunta() {
  // Verificar si hay más preguntas
  if (indicePreguntaActual < totalPreguntas - 1) {
    indicePreguntaActual++;
    mostrarPregunta();
  } else {
    document.getElementById('puntaje-final').innerText = puntaje;
    document.getElementById('puntaje').style.display = 'block';
    document.getElementById('boton-reiniciar').style.display = 'block';
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  indicePreguntaActual = 0;
  puntaje = 0;
  document.getElementById('puntaje').style.display = 'none';
  document.getElementById('boton-reiniciar').style.display = 'none';

  mostrarPregunta();
}
