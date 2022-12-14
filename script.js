// Sélection des numéros

const circle = document.getElementsByClassName("circle");
let rating_number = 0;

function selectedRating(index){
    let lastBc = circle[index].style.background;
    if(lastBc === ""){
        lastBc = "rgb(46, 58, 72)"
    }
    for(let i = 1; i <= 5; i++){
        circle[i].style.background = "hsl(212, 22%, 23%)";
        circle[i].style.borderColor = "hsl(212, 22%, 23%)";
        circle[i].style.color = "hsl(217, 12%, 63%)";
        rating_number = 0;
    }
    // Mettre le bouton touché en sélectionné
    if(circle[index].style.background === lastBc){
        circle[index].style.background = "hsl(217, 12%, 63%)";
        circle[index].style.borderColor = "hsl(217, 12%, 63%)";
        circle[index].style.color = "white";
        rating_number = index;
    }

}

function ratingSubmitted(){
    if(rating_number != 0){
        document.querySelector(".rating-wrapper").style.display = "none";
        document.querySelector(".rating-submitted").style.display = "block";
        document.querySelector(".selected-number").innerHTML = rating_number;
    } else {
        document.querySelector(".error-message").style.display = "block";
    }
}