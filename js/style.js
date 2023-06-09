$(document).ready(function () {

     $('#team').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
      });

      $('#client_slider').owlCarousel({
        loop:true,
        margin: 30, 
        nav: false,
        autoplay: true,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100){
            sticky.addClass('fixed');
        }
        else{
            sticky.removeClass('fixed');
        }
      });
      
});
