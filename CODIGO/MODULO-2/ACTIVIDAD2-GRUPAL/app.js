//Cambiar la imagen del carro y el color del botón cuando una imagen es seleccionada
/// - Seleccionando elementos
const imgFrente = document.querySelector(".frente");
const imgLadoI = document.querySelector(".lado-i");
const imgLadoD = document.querySelector(".lado-d");
const imageCard = document.querySelector(".carro-image");
const cartButton = document.getElementById("button");
const feedbackBtn = document.querySelector(".respuesta");

// Modificando elementos
// - Agregando detectores de eventos

// - Imagen Frente
imgFrente.addEventListener("click", function () {
imageCard.style.backgroundImage = 'url("./image/Desktop_1.png")';
});

// - Imagen Lado Izquierdo
imgLadoI.addEventListener("click", function () {
imageCard.style.backgroundImage = 'url("./image/Desktop_2.png")';
});

// - Imagen Lado Derecho
imgLadoD.addEventListener("click", function () {
imageCard.style.backgroundImage = 'url("./image/Desktop_3.png")';
});



// Implementando el evento clic en el botón
// - Botón
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - Botón de respuesta
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);