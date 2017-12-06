'use strict';

$(".container").on("mousemove", tiltelement);

function tiltelement(event){
    let x = event.offsetX / this.offsetWidth - 0.5;
    let y = event.offsetY / this.offsetHeight -0.5;

    let backgroundCSS = `rotateY(${x*20}deg) rotateX(${y*-20}deg)`;
    $(".background").css('transform', backgroundCSS);

    let borderCSS = `translateY(${y*-80}px) translateX(${x*-50}px)`;
    $(".border").css('transform', borderCSS);

    let textCSS = `translateY(${y*30}px) translateX(${x*-70}px)`;
    $(".text").css('transform', textCSS);

    let gradientCSS = `translateY(${y*70}px) translateX(${x*-50}px) translateZ(${x*-50}px) `;
    $(".gradient").css('transform', gradientCSS);

   // $(".container").css('transform', 'rotateX('+x*60+'45deg)');
}