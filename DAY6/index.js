const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const numberButton = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');

const display = new Display(displayValorAnterior, displayValorActual);
numberButton.forEach(boton => {
    boton.addEventListener('click', () => display.setNumber(boton.innerHTML));
});
