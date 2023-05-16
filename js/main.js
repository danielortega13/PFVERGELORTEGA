/*Efectos para los menus*/
$(document).ready(function() {
    // Agrega la clase "hover" cuando se pasa el ratón por encima de los menús
    $('.menu > li').hover(function() {
    $(this).addClass('hover');
    }, function() {
    $(this).removeClass('hover');
    });
});

/*Efectos para el login*/
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".login-form");
    loginForm.style.opacity = 1;
    loginForm.style.transform = "translateY(0)";
});

/*login blogs*/
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});