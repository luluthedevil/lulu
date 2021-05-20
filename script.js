$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up
    $('.scroll-up-btn').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 0);
        // removing smooth scroll on slide-up button click
        $('html, body').css("scrollBehavior", "auto");
    });
    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing animation
    var typed = new Typed(".typing", {
        strings: ["Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
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