const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overLay');
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', ()=>{
console.log('click hamburger');

if(header.classList.contains('open')){//close harmburger
    body.classList.remove('noscroll')
    header.classList.remove('open');
    fadeElems.forEach((element)=>{
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    })
}else{
    header.classList.add('open')//open harmburger
    body.classList.add('noscroll')
    fadeElems.forEach((element)=>{
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    })
    
}

})

