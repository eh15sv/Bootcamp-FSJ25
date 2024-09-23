export default function Controls(gallery, currentIndex, updateGallery, addImage, removeImage) {
    //Elementos del DOM para los inputs y botones
    const newTitleInput = document.getElementById("new-title");
    const newDescriptionInput = document.getElementById("new-description");
    const newSrcInput = document.getElementById("new-src");    
    const addBtn = document.getElementById("add-btn");    
    const removeBtn = document.getElementById("remove-btn");    

    //Funcion para manejar la adicion de una nueva imagen
    addBtn.addEventListener("click", ()=>{
        const newImage={
            title: newTitleInput.value,
            description: newDescriptionInput.value,
            src: newSrcInput.value,
        };

        //Validar que todos los campos esten llenos
        if (newImage.title && newImage.description && newImage.src) {
            addImage(newImage);//Añadir la nueva imagen
            updateGallery();//Actualizar la galeria para mostrarla
            alert("Imagen agregada correctamente")
        } else {
            alert("Por favor, completa todos los campos");//Mostrar mensaje de error si falto informacion
        }
    });

    //Funcion para manejar la eliminacion de la imagen actual
    removeBtn.addEventListener("click", ()=>{
        if (gallery.length > 1) {//Verifica que haya mas de una imagen
            removeImage(currentIndex);//Elimina la imagen actual
            updateGallery();//Actualiza la galeria despues de eliminar la imagen
            alert("Imagen eliminada")
        } else {
            alert("Debe haber al menos una imagen en la galeria")
        }
    });

}