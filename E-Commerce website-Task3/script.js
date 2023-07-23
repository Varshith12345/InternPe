// Script for navigation bar
const bar=document.getElementsById('bar')
const nav=document.getElementById('navbar')
const close=document.getElementsById('close')
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}
