$(function() {
    "use strict";
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-4 .navbar-brand img").attr("src", "assets/images/logo-4.png");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-4 .navbar-brand img").attr("src", "assets/images/logo.png");
        }
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    var scrollLink = $('.page-scroll');
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    // $('.testimonial-author-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.testimonial-content'
    // });
    // $('.testimonial-content').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
    //     nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
    //     asNavFor: '.testimonial-author-slider',
    //     dots: false,
    //     focusOnSelect: true
    // });

    var elements = $('.modal-overlay, .modal');

    $('#contact_modal').click(function(){
        elements.addClass('active');
    });

    $('.close-modal').click(function(){
        elements.removeClass('active');
    });


    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    var wow = new WOW({
        boxClass: 'wow',
        mobile: false,
    })
    wow.init();


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let a = [1,2,3,4,5,6,7];

    // let len = $('#devs .col-md-4').length; 

    shuffleArray(a);

    for(let i = 0; i < 7; i++) {
        $('#devs .col-md-4').eq(i).css('order', a[i]);
    }
    
    $(document).ready(function(){

      var owl = $(".owl-carousel").owlCarousel({
        loop: true,
        autoplayTimeout: 2500,
        margin: 20,
        nav: false,
        autoplay: true,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
      });
        $('.customNextBtn').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('.customPrevBtn').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
        })

    });
});




// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
