

// go up page button script

$(document).ready(function() {
  $(window).scroll(function() {
    $(this).scrollTop() >= 400 ? $('#up').show() : $('#up').hide();

    $('#up').click(function() {
      $(window).scrollTop(0);
    });
  });
});

// create menu button script

$(document).ready(function() {
  $(".menu").click(function() {
    $(".sidebar").css("left", "0px");
    function showMenu() {
      $(".sidebar").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,100% 100%,0% 100%)"
      );
      $(".menu").animate({ right: "-100" }, 300);
      $(".logo").animate({ left: "400" }, 300);
    }
    setTimeout(showMenu, 100);
  });

  $(".close").click(function() {
    $(".sidebar").css(
      "-webkit-clip-path",
      "polygon(0 0,0% 0,100% 100%,0% 100%)"
    );
    function hideMenu() {
      $(".sidebar").css("left", "-300px");
      $(".menu").animate({ right: "50" }, 300);
      $(".logo").animate({ left: "10%" }, 300);
    }
    setTimeout(hideMenu, 300);

    function originalLayout() {
      $(".sidebar").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,0% 100%,0% 100%)"
      );
    }
    setTimeout(originalLayout, 600);
  });
});

// initialization of swipper slider

var swiper = new Swiper(".swiper-container", {
  speed: 3000,
  autoplay: {
    delay: 3000
  },
  effect: "fade",
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// initialization of wow library

new WOW().init();

// init owl carousel

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    itemsCustom: false,
    singleItem: false,
    itemsScaleUp: false,
    autoplayHoverPause: false,
    margin: 30,
    smartSpeed: 700,
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      500: { items: 2 },
      800: { items: 3 }
    }
  });
});


// header-2 script

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $("header.fixed-header").addClass("sticky");
    } else {
      $("header.fixed-header").removeClass("sticky");
    }
  });
});


// search bar animated width

$(document).ready(function(){
  $('.search-animate').click(function(){
  $('.search-animate, .search-bar').toggleClass('active');
  $('input[type=search]').focus();
  });
});

// message us fixed button

$(document).ready(function(){
  $('.message').click(function(e){
    e.preventDefault();
    $(this).fadeOut();
    $('.message-us textarea').focus();
    $('.message-us').css('transform', 'scale(1)');
    $('#close-message-box').click(function(){
      $('.message-us').css('transform', 'scale(0)');
      $('.message').fadeIn();
    });
  });
});

// prevent default for bell

$(document).ready(function(){
  $('.notification-bell').click(function(e) {
    e.preventDefault();
  })
});