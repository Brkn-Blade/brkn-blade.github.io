let buttons = document.querySelectorAll('.button');
buttons.forEach(e => {
    e.addEventListener("click", changeColor)
});

function changeColor() {
    alert("Hola")
}