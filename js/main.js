const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//contiene immagini
let active_image = '';

//ciclo per mostrare immagini
images.forEach((elem) => {
    active_image += `<div class="item">
    <img src="./${elem.image}" alt="image">
    <div class="position-absolute bottom-50 text-right color-white padding-text">
        <h2>${elem.title}</h2>
        <h5>${elem.text}</h5>
    </div>
</div> `
});

//recupero contenitore immagini e appendo stringa
const main_image = document.querySelector('.images').innerHTML = active_image;

//salvo in variabile l'indice di partenza di array e assegno classe active
let active_element = 0;
let imagesDom = document.querySelectorAll('.item');
//prendo solo il primo valore
imagesDom[active_element].classList.add('active');

//recupero pulsanti dal dom
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');


//mettere in ascolto i pulsanti
nextBtn.addEventListener('click', function(){
    //prima rimuovo classe active
    imagesDom[active_element].classList.remove('active');
    //aumento element
    active_element ++;
    //assegno classe active
    imagesDom[active_element].classList.add('active');
});

prevBtn.addEventListener('click', function(){
    imagesDom[active_element].classList.remove('active');
    active_element --;
    imagesDom[active_element].classList.add('active');
});
