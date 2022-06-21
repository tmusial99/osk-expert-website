const nav = document.querySelector('.navbar');
const nav_toggler = document.querySelector('.navbar-toggler');

document.addEventListener('DOMContentLoaded', function(){
    function addShadow(){
        if(window.scrollY >= 90){
            nav.classList.add('nav-bg');
        }if(window.scrollY < 90){
            nav.classList.remove('nav-bg');
        }
    }

    window.addEventListener('scroll', addShadow);
})

nav_toggler.addEventListener('click', function(){
    nav.classList.toggle('hamburger-active');
})

const nav_link = document.querySelectorAll('.nav-link');
for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].addEventListener("click", function() {
      document.querySelector('.navbar-collapse').classList.remove('show');
      nav.classList.remove('hamburger-active');
    });
}


const pytanie = document.querySelectorAll('.question');
var odpowiedz = document.querySelectorAll('.answer');

for (let i = 0; i < pytanie.length; i++) {
    pytanie[i].addEventListener("click", function() {
      odpowiedz[i].classList.toggle('display-block');
    });
}






