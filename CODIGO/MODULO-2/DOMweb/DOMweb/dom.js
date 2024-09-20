// Seleccionar elementos del DOM
let employmentStatus = document.getElementById('employmentStatus');
let toggleStatusButton = document.getElementById('toggleStatus');
let profileImage = document.getElementById('profileImage');
let uploadImage = document.getElementById('uploadImage');
let addSkillButton = document.getElementById('addSkill');
let skillInput = document.getElementById('skillInput');
let skillsList = document.getElementById('skills');
let changeColorButton = document.getElementById('changeColor');

// Cambiar el estado laboral entre 'Laborando' y 'Desempleado'
toggleStatusButton.addEventListener('click', () => {
    if (employmentStatus.textContent === 'Laborando') {
        employmentStatus.textContent = 'Desempleado';
        
    } else {
        employmentStatus.textContent = 'Laborando';
    }
});

// Cambiar la imagen de perfil al seleccionar un archivo
uploadImage.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload = function() {
        profileImage.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Agregar una aptitud a la lista
addSkillButton.addEventListener('click', () => {
    let skillValue = skillInput.value.trim();
    if (skillValue) {
        let newSkill = document.createElement('li');
        newSkill.innerHTML = `${skillValue} <button class="deleteSkill">Borrar</button>`;
        skillsList.appendChild(newSkill);
        skillInput.value = '';
    } else {
        alert('Por favor, ingresa una aptitud.');
    }
});

// Eliminar una aptitud de la lista
skillsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteSkill')) {
        event.target.parentElement.remove();
    }
});

// Cambiar el color de fondo a un degradado aleatorio
changeColorButton.addEventListener('click', () => {
    let color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});
