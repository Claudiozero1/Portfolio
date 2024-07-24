// Aquí se seleccionan tres elementos del DOM:

// menuBtn: el botón del menú.
// menuBtnIcon: el ícono dentro del botón del menú.
// dropDownMenu: el menú desplegable.

const menuBtn = document.querySelector('.menu_btn');
const menuBtnIcon = document.querySelector('.menu_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');


/////// Asignar un evento onclick al botón del menú ////////

// Cuando se hace clic en menuBtn, se ejecuta la función asignada.
menuBtn.onclick = function () {
    // Dentro de esta función, se alterna la clase open en dropDownMenu usando classList.toggle('open'). Esto abre o cierra el menú desplegable.
    dropDownMenu.classList.toggle('open')
    // Luego, se verifica si dropDownMenu contiene la clase open con classList.contains('open') y se guarda el resultado en isOpen.
    const isOpen = dropDownMenu.classList.contains('open')
    // Dependiendo del valor de isOpen, se cambia la clase del ícono del botón del menú (menuBtnIcon) a fa-solid fa-xmark (ícono de cerrar) si el menú está abierto, o a fa-solid fa-bars (ícono de menú) si está cerrado.
    menuBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}



const project = document.querySelector('.project');
const hover = document.querySelector('.project:hover');
const info = document.querySelector('.info');


// Este código permite que al hacer clic en el botón del menú, el menú desplegable se abra o cierre, y el ícono del botón cambie entre un ícono de menú y un ícono de cerrar. ¿Te gustaría saber algo más sobre este código?

project.onclick = function () {
    // Dentro de esta función, se alterna la clase open en dropDownMenu usando classList.toggle('open'). Esto abre o cierra el menú desplegable.
    dropDownMenu.classList.toggle('open')
    // Luego, se verifica si dropDownMenu contiene la clase open con classList.contains('open') y se guarda el resultado en isOpen.
    const isOpen = dropDownMenu.classList.contains('open')
    // Dependiendo del valor de isOpen, se cambia la clase del ícono del botón del menú (menuBtnIcon) a fa-solid fa-xmark (ícono de cerrar) si el menú está abierto, o a fa-solid fa-bars (ícono de menú) si está cerrado.
    menuBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}