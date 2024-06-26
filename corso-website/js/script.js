"use strict";


function scroll () {
    const userScroll = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            userScroll.classList.add('bg-dark');
        }else{
            userScroll.classList.remove('bg-dark');
        }
    });
}
document.addEventListener('DOMContentLoaded', scroll);