// récuperation des données html
let stars = document.getElementsByClassName("fas");
let emoji = document.getElementById("emoji");
let btn =document.getElementById("btn");
let feed = document.querySelector(".feedbackbox")
let T = document.querySelector(".titre")


// declaration d'un tableau d'emoji et un evenement click sur les icons
stars[0].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#e4e4e4";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(0)";
}
stars[1].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-100px)";
}
stars[2].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-200px)";
}
stars[3].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-300px)";
}
stars[4].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    emoji.style.transform = "translateX(-400px)";
}

// change le contenu de la div principale
btn.addEventListener("click", function(e) {

    feed.innerHTML =`
    <i id="coeur"class=" fas fa-heart "> </i>
    <strong> MERCI ! </strong>
    
    `
    T.style.display = 'none';
    
})