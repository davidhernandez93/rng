// document.getElementById('number').textContent = 'hola';
let num = document.getElementsByClassName('numero')[0];
const boton = document.getElementsByClassName('bot')[0];
var random = Math.trunc(Math.random()*10+1);
// console.log(random)

boton.addEventListener('click', function(){
    num.classList.remove('hidden');
    num.textContent = random;
});
document.addEventListener('keyup', function(event){
    // console.log(event);
    // console.log(event.key);
    if(event.key === 'Escape'){
        num.classList.add('hidden');
        console.log('closed')
        random = Math.trunc(Math.random()*10+1);
    }
});