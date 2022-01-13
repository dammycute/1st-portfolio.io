const toggleFront = document.getElementById("toggle-front");
const toggleUi = document.getElementById("toggle-ui");
const toggleData = document.getElementById("toggle-data");
const toggleBrand = document.getElementById("toggle-brand");
const clear = document.getElementById('x');
const clear2 = document.getElementById('x2');
const clear3 = document.getElementById('x3');
const clear4 = document.getElementById('x4');
const front = document.getElementById('front');
const services = document.getElementById('services');
const data = document.getElementById('data');
const ui = document.getElementById('ui');
const brand = document.getElementById('brand');
const modal = document.getElementById('modal');
const ul = document.getElementById('ul');
const hamburger = document.getElementById('hamburger');
const logo = document.getElementById('logo');
const x =document.getElementById('x');

toggleFront.onclick = function (params) {
    modal.style.display = 'block'
    ui.style.display = 'none'
    data.style.display = 'none'
    brand.style.display = 'none'
}
toggleUi.onclick = function (params) {
    modal.style.display = 'block'
    front.style.display = 'none'
    data.style.display = 'none'
    brand.style.display = 'none'
}
toggleBrand.onclick = function (params) {
    modal.style.display = 'block'
    front.style.display = 'none'
    data.style.display = 'none'
    ui.style.display = 'none'
}

toggleData.onclick = function (params) {
    modal.style.display = 'block'
    front.style.display = 'none'
    brand.style.display = 'none'
    ui.style.display = 'none'
}


clear.addEventListener('click', function () {
    modal.style.display = 'none'
    data.style.display = 'block'
    front.style.display = 'block'
    brand.style.display = 'block'
    ui.style.display = 'block'
    
});

clear2.addEventListener('click', function () {
    modal.style.display = 'none'
    data.style.display = 'block'
    front.style.display = 'block'
    brand.style.display = 'block'
    ui.style.display = 'block'
});

clear3.addEventListener('click', function () {
    modal.style.display = 'none'
    data.style.display = 'block'
    front.style.display = 'block'
    brand.style.display = 'block'
    ui.style.display = 'block'
});

clear4.addEventListener('click', function () {
    modal.style.display = 'none'
    data.style.display = 'block'
    front.style.display = 'block'
    brand.style.display = 'block'
    ui.style.display = 'block'
});

hamburger.onclick = function (params) {
    ul.style.display = 'flex'
    ul.style.flexDirection = 'column'
    ul.style.backgroundColor = '#6C63FF'
    logo.style.display = 'none'
    hamburger.style.display ='none'
    x.style.display='block'
}

x.onclick = function (params) {
    ul.style.display = 'none'
    logo.style.display = 'block'
    hamburger.style.display ='block'
    x.style.display='none'
}

