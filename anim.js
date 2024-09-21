// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You leapt from crumbling bridges watching cityscapes turn to dust", time: 32 },
  { text: "Filming helicopters crashing in the ocean from way above", time: 43 },
  { text: "Got the music in you baby, tell me why", time: 53 },
  { text: "Got the music in you baby, tell me why", time: 59 },
  { text: "You’ve been locked in here forever & you just can’t say goodbye", time: 63 },
  { text: "Kisses on the foreheads of the lovers wrapped in your arms", time: 75 },
  { text: "You’ve been hiding them in hollowed out pianos left in the dark…", time: 84 },
  { text: "Got the music in you baby, tell me why", time: 94 },
  { text: "Got the music in you baby, tell me why", time: 100 },
  { text: "You’ve been locked in here forever & you just can’t say goodbye", time: 104 },
  { text: "Your lips, my lips,", time: 116 },
  { text: "Apocalypse", time: 117 },
  { text: "Your lips, my lips", time: 126 },
  { text: "Apocalypse", time: 127 },
  { text: "Go & sneak us through the rivers, flood is rising up on your knees", time: 135 },
  { text: "Oh please…", time: 142 },
  { text: "Come out & haunt me", time: 143 },
  { text: "I know you want me", time: 147 },
  { text: "Come out & haunt me", time: 150 },
  { text: "Sharing all your secrets with each other since you were kids", time: 156 },
  { text: "Sleeping soundly with the locket that she gave you clutched in your fist…", time: 166 },
  { text: "Got the music in you baby, tell me why", time: 176 },
  { text: "Got the music in you baby, tell me why", time: 181 },
  { text: "You’ve been locked in here forever & you just can’t say goodbye", time: 185 },
  { text: "You’ve been locked in here forever & you just can’t say goodbye", time: 206 },
  { text: "When you’re all alone", time: 239 },
  { text: "I will reach for you", time: 243 },
  { text: "When you’re feeling low", time: 249 },
  { text: "I will be there too", time: 253 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.01; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 900);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 30000);