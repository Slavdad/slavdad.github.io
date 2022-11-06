$('.menu_item_contacts').on('click', function(e) {
    e.preventDefault();
    return $("html, footer").animate({
      scrollTop: $("#footer_rect_navigation").offset().top
    });
  });

let condition = true;
let start = 0;
let end = 0;

// Анимация меню
function forwards() {
    anime({
     targets: '.menu-small',
     translateX: ['-100%', '0'],
     easing: 'easeInOutQuad',
     direction: 'alternate',
     duration: 1000,
     loop: false
    });
    condition: false;
   }
   
function backwards() {
    anime({
     targets: '.menu-small',
     translateX: ['0', '-100%'],
     easing: 'easeInOutQuad',
     direction: 'alternate',
     duration: 1000,
     loop: false
    });
    condition: true;
   }

// Анимация "Бургера"
function stick_1(){
    anime({
        targets: '.menu_small.icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
       })  

    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
   })
   }

function stick_2(){
    anime({
        targets: '.menu_small.icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
       })

    anime({
        targets: '.stick',
        rotate: 360,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
   })
   }




$('.menu_small_icon').click(function () {
    if (condition == true) {
        forwards();
        stick_1();
     // изменение значения переменной condition
        condition = false
    } else {
     // анимация скрытия
        backwards();
        stick_2();
     // изменение значения переменной condition
        condition = true
    }
});
   
$('.container').on('touchstart', function(event){
    start = event.originalEvent.touches[0].pageX;
})
$('.container').on('touchend', function(event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forwards();
        condition = false;
    }
    else if (start - end >= 100 && !condition) {
        backwards();
        condition = true;
    }
})