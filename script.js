$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 5000,
        autoplatHoverPause: true,
        responsive: {
            0:{
                items: 1, 
                nav: false
            },
            700:{
                items: 2, 
                nav: false
            },
            1100:{
                items: 3, 
                nav: false
            }
        }
    });
});