// document.getElementById('number').textContent = 'hola';
let num = document.getElementsByClassName('numero')[0];
const boton = document.getElementsByClassName('bot')[0];
var random = Math.trunc(Math.random()*10+1);
// console.log(random)

boton.addEventListener('click', function(){
    num.classList.remove('hidden');
    num.textContent = random;
});
// generator();
