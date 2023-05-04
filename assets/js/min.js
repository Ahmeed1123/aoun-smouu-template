
const ssvg = document.getElementById('ssvg');
const navbar = document.getElementById('navbar');
const minIcon = document.getElementById('minIcon');
 document.getElementById('icon').onclick = function () {
this.classList.toggle('change');
navbar.classList.toggle('active');
ssvg.classList.toggle('del');
minIcon.classList.toggle('del-2');
} 

const ceeo1 = document.getElementById('ceeo1');
const ceo1 = document.getElementById('ceo1');
ceo1.onclick = function() {
    ceo1.classList.toggle('active');
    ceeo1.classList.toggle('cheack');
    // ceo.style.display = 'none';
    ceeo.classList.remove("cheack")
}
const ceeo = document.getElementById('ceeo');
const ceo = document.getElementById('ceo');
ceo.onclick = function() {
    ceo.classList.toggle('active');
    ceeo.classList.toggle('cheack');
    ceeo1.classList.remove("cheack")
}

//   imag
const web = document.getElementById('web');
const weeb = document.getElementById('weeb');
web.onclick = function() {
    web.classList.toggle('active');
    weeb.classList.toggle('change');
}

const shrgiaa = document.getElementById('shrgiaa');
const shrgia = document.getElementById('shrgia');
shrgia.onclick = function() {
    shrgia.classList.toggle('active');
    shrgiaa.classList.toggle('change');
}
const grbia = document.getElementById('grbia');
const grbiaa = document.getElementById('grbiaa');
grbia.onclick = function() {
    grbia.classList.toggle('active');
    grbiaa.classList.toggle('change');
}
const shmalia = document.getElementById('shmalia');
const shmaliaa = document.getElementById('shmaliaa');
shmalia.onclick = function() {
    shmalia.classList.toggle('active');
    shmaliaa.classList.toggle('change');
}
const all = document.getElementById('all');
all.onclick = function() {

    shmaliaa.classList.toggle('change');
   
    grbiaa.classList.toggle('change');

    shrgiaa.classList.toggle('change');
 
    weeb.classList.toggle('change');
}


// eeeend image