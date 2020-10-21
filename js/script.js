// se crea la variable y se llama a la clase con el nombre accordion
const accordion = document.querySelectorAll('.accordion');

//se le añade un for que va a recorrer a la variable y se le pone un evento click
//para que cada vez que suceda el evento se abra y se cierre el acordeón

for(let i = 0; accordion.length; i++){
    accordion[i].addEventListener('click', (event) =>{
        event.preventDefault(); //se evita que el texto salga por defecto

        const element = event.currentTarget;
        const text = element.nextElementSibling;
        //se define el comportamiento del accordion cuando este con
        // o sin el texto sobresaliendo
        if(text.style.display == "block"){
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    }
)}