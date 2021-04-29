var heightLogo = $('.logo').height();
var heightNavbar = $('.navbar').height();

console.log("nav: " + heightNavbar)

$(window).scroll(function(){
   if($(this).scrollTop() > heightLogo) {
    $('.menu-bar').addClass('fixed');
    }
    else{
        $('.menu-bar').removeClass('fixed');
      }
});

$(window).scroll(function(){
   if($(this).scrollTop() > heightNavbar) {
       console.log("entrou");
    $('.navbar').addClass('fixednavbar');
    }
    else{
        $('.navbar').removeClass('fixednavbar');
      }
});

