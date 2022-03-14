// Estado de la APP
let STATE = {
    currentWord: "", // Aquí debemos guardar el resultado de getNextWord()
    currentProgressWord: 0, // indica cual es la siguiente posición del "currentWord" a procesar

    // Si le pasas una letra, te dice si esa letra va justamente en la posición 'currentProgressWord'
    isCorrectLetter: function (inputLetter) {
        return this.currentWord[STATE.currentProgressWord] == inputLetter;
    },

    // Nos indica si hemos escrito ya toda la letra
    isWordFinished: function () {
        return this.currentProgressWord == this.currentWord.length;
    }
}

// Paso 1: al hacer click en el botón empezar, obtener la primera palabra a procesar. Debemos también ocultar el botón de empezar y mostrar el contenedor con la palabra a escribir. Añadir el listener de teclado

let buttonStart = document.querySelector("button");
buttonStart.addEventListener("click", function () {
    buttonStart.style.display = "none";
    let randomWord = document.querySelector("#next-word-card");
    randomWord.classList.remove("w3-hide");
    STATE.currentProgressWord = getNextWord();
    randomWord.textContent = STATE.currentProgressWord;

});

document.body.addEventListener("keyup", handleInput);

function handleInput(event) {
    // En el objeto event, tenemos la propiedad 'key', que nos va a informar de qué tecla ha pulsado el usuario
    let keyPressed = event.key;
    let answer = document.querySelector(".answer").textContent = keyPressed;

    console.log(event.keyCode);
}
