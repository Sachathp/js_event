let footer = document.querySelector('footer');

let compteur = 0;

footer.addEventListener('click', function() {
    compteur++;
    console.log(`clique numéro ${compteur}`);
});

let hamburgerMenu = document.querySelector('.navbar-toggler');
let navbarHeader = document.getElementById('navbarHeader');

hamburgerMenu.addEventListener('click', function () {
    navbarHeader.classList.toggle('collapse');
});

let firstCard = document.querySelector('.card');
let editButton = firstCard.querySelector('.btn-group .btn-outline-secondary');


editButton.addEventListener('click', function () {
    const cardText = firstCard.querySelector('.card-text');
    cardText.style.color = 'red';
});

let allCards = document.querySelectorAll('.card');

let secondCard = allCards[1]; 

let editButtonSecondCard = secondCard.querySelector('.btn-group .btn-outline-secondary');

editButtonSecondCard.addEventListener('click', function () {
    let cardText = secondCard.querySelector('.card-text'); 

    if (cardText.style.color === 'green') {
        cardText.style.color = ''; 
    } else {
        cardText.style.color = 'green'; 
    }
});

let navbar = document.querySelector('.navbar');

let bootstrapLink = document.querySelector('link[href*="bootstrap.min.css"]');

navbar.addEventListener('dblclick', function () {
    if (bootstrapLink.disabled) {
        bootstrapLink.disabled = false;
    }
    else {
        bootstrapLink.disabled = true;
    }
});

let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    
  let viewButton = card.querySelector('.btn-success');
  let cardImage = card.querySelector('.card-img-top');
  let cardText = card.querySelector('.card-text');
  
  viewButton.addEventListener('mouseenter', function () {
    cardImage.style.width = '20%';
    cardText.style.display = 'none';
  });

  viewButton.addEventListener('mouseleave', function () {
    cardImage.style.width = '';  
    cardText.style.display = ''; 
  });
});


