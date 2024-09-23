export default function Gallery({gallery,currentIndex, updateGallery}){
    //Elementos del DOM a actualizar
    const titleElement = document.getElementById("tittle");
    const imageElement = document.getElementById("image");
    const descriptionElement = document.getElementById("description");

    //Funcion que actualiza el contenido de la galeria
    function updateContent() {
        const currentItem = gallery[currentIndex]; //Toma la imagen actual del array
        titleElement.textContent = currentItem.title;//Actualiza el titulo de la imagen
        imageElement.src = currentItem.src;//Actualiza la imagen
        descriptionElement.textContent = currentItem.description;//Actualiza la descripcion
    }

    updateContent();//Llama a la funcion para actualizar la galeria inicialmente

    //Botones de navegacion
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    //Funcion de navegacion que se reutiliza para los botones prev y next
    function navigate(direction) {
        currentIndex = (currentItem + direction + gallery.length) % gallery.length;
        updateContent();
    }
    
    //Añadir event listeners a los botones, reutilizando la funcion navigate
    prevBtn.addEventListener("click",() => navigate(-1));//Navega a la imagen anterior
    nextBtn.addEventListener("click",() => navigate(+1));//Navega a la imagen siguiente
    
}