// document.getElementById('number').textContent = 'hola';
let num = document.getElementsByClassName('numero')[0];
const boton = document.getElementsByClassName('bot')[0];
var random = Math.trunc(Math.random()*10+1);

function generar(){
    num.classList.remove('hidden');
    num.textContent = random;
    boton.textContent = 'De nuevo!';
    random = Math.trunc(Math.random()*10+1);
}
boton.addEventListener('click', generar);
boton.addEventListener('touchstart', generar)
