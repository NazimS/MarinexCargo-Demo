
// search-click begin
$(() => {
  $("#searchic").click(function () {
    $(".search-click").slideToggle("slow");
  });
  $(".fa-times-circle").click(function () {
    $(".search-click").slideToggle("slow");
  });
});

// search-click end


// Burger menu begin
$(() => {
  $(".burger-m").click(function () {
    $(".burger-menu").animate({   // right to left
      width: "toggle"
    });

  });
  $(".fa-times").click(function () {
    $(".burger-menu").animate({  // left to right
      width: "toggle"
    });
  });
});
// Burger menu end


// dasinma-suallar 'questions' begin
$(() => {
  $(".q1").click(function () {
    $("#ans-1").slideToggle("slow");
    $(this).find(".fa-arrow-down").toggleClass("fa-arrow-up");
  });

  $(".q2").click(function () {
    $("#ans-2").slideToggle("slow");
    $(this).find(".fa-arrow-down").toggleClass("fa-arrow-up");
  });

  $(".q3").click(function () {
    $("#ans-3").slideToggle("slow");
    $(this).find(".fa-arrow-down").toggleClass("fa-arrow-up");
  });
  $(".q4").click(function () {
    $("#ans-4").slideToggle("slow");
    $(this).find(".fa-arrow-down").toggleClass("fa-arrow-up");
  });
});
// dasinma-suallar 'questions' end

// navbar fixed, scroll top begin
window.onscroll = function (){myFunction()}

const nav1 = document.querySelector(".nav1")
let sticky = nav1.offsetTop;

function myFunction() {

  if (window.pageYOffset >= sticky) {
    nav1.classList.add("sticky");
    document.querySelector(".connect-chevron").style.display = "block";
  } else {
    nav1.classList.remove("sticky");
    document.querySelector(".connect-chevron").style.display = "none";
  }

}
// navbar fixed, scroll top end

// slider begin
$(() => {
  $(".home-slider").owlCarousel({ // for first slider( add some class(home-slider) into 'owl-carousel')
    items: 1,
    margin: 10,
    loop: true,
    autoplayHoverPause: true, // stop loop during hovering mouse
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".shop-slider").owlCarousel({  // for second slider( add some class(shop-slider) into 'owl-carousel')
    items: 1,
    margin: 10,
    loop: true,
    autoplayHoverPause: true, // stop loop during hovering mouse
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,  // amount of items
      },
      1000: {
        items: 5,
      },
    },
  });
});

// slider end
