
"use strict";




// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}


// Theme-banner slider 
function BannerSlider () {
  var banner = $("#theme-main-banner");
  if (banner.length) {
      banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
        height: '51%',
        pagination: true,
        thumbnails: false,
        playPause: false,
        autoplay:true,
        pauseOnClick: false,
        hover: false,
        overlayer: true,
        loader: 'none',
        time: 6000,
        minHeight: '500px',
      });
  };
}



// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       50,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  }
}


// Client SLider
function clientSlider () {
  var sliderC = $(".client-slider-wrapper");
  if(sliderC.length) {
    sliderC.owlCarousel({
        animateOut: 'slideOutLeft',
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:5500,
        lazyLoad:true,
        items:1,
    })
  }
}


// Journal Slider 
function journalSlider () {
  var jSlider = $ (".journel-slider");
  if(jSlider.length) {
    jSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:1300,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:1
            },
            751:{
                items:2
            },
            1001:{
                items:2
            }
        }
    })
  }
}


// Partner Logo Footer 
function partnersLogo () {
  var pSlider = $ ("#partner-logo");
  if(pSlider.length) {
     pSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:900,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            751:{
                items:3
            },
            1182:{
                items:5
            }
        }
    })
  }
}


// Footer Blog SLider
function footerBlogSlider () {
  var footerSlider = $(".footer-blog-slider");
  if(footerSlider.length) {
    footerSlider.owlCarousel({
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:900,
        lazyLoad:true,
        items:1,
    })
  }
}


// Quick Contact Slider
function quickContact () {
  var quickSLider = $ (".quick-contact-slider");
  if(quickSLider.length) {
     quickSLider.owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:900,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            767:{
                items:1
            },
            1001:{
                items:2
            }
        }
    })
  }
}



// Sidebar News
function sidebarNewsSlider () {
  var nSLdier = $ (".siderbar-news-sldier");
  if(nSLdier.length) {
    nSLdier.owlCarousel({
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:500,
        lazyLoad:true,
        items:1,
    })
  }
}

// Doughnut Charts 
function doughnutChartBox () {
  var roundChart = $ ("#doughnut-chartBox");  
  if(roundChart.length) {
    CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#e2f354",
                "#0f0f7a",
                "#e2f354",
                "#0f0f7a"               
                ]);
    var chart = new CanvasJS.Chart("doughnut-chartBox",{
      colorSet: "greenShades",
      animationEnabled: true,
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      data: [
      {        
        type: "pie",       
        showInLegend: false,
        toolTipContent: "{y} - <strong>#percent%</strong>",
        dataPoints: [
          {  y: 2581563, indexLabel: "Nokia" },
          {  y: 2575498, indexLabel: "mi" },
          {  y: 2525844, exploded: true, indexLabel: "Xbox" },
          {  y: 2576121, indexLabel: "Hp"},
        ]
      }
      ]
    });
    chart.render();
  };
}

// Bar chart function 
function barTableOne () {
  var ctx = $("#chart-tableOne");

  if(ctx.length) {
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
              datasets: [
              {
                  label: "Company dataset",
                  backgroundColor: "rgba(226,243,84,1)",
                  borderColor: "rgba(226,243,84,1)",
                  borderWidth: 1,
                  hoverBackgroundColor: "rgba(226,243,84,1)",
                  hoverBorderColor: "rgba(226,243,84,1)",
                  data: [65, 59, 80, 81, 56, 55, 65],
              }
          ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
  };
}


// Scroll to top
function scrollToTop () {
  var scrollTop = $ (".scroll-top")
  if (scrollTop.length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        scrollTop.fadeIn();
      } else {
        scrollTop.fadeOut();
      }
    });
    
    //Click event to scroll to top
      scrollTop.on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        sub: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  if($('.closeAlert').length) {
    $(".closeAlert").on('click', function(){
      $(".alert-wrapper").fadeOut();
    });
    $(".closeAlert").on('click', function(){
      $(".alert-wrapper").fadeOut();
    })
  }
}


// Sticky header
function stickyHeader () {
  var sticky = $('.theme-main-menu'),
      scroll = $(window).scrollTop();

  if (sticky.length) {
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}


// toggle menu for mobile
function mobileDropdown () {
  if($('.theme-main-menu').length) {
    $('.menu-wrapper .navbar-nav li.dropdown-holder').append(function () {
      return '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    });
    $('.menu-wrapper .navbar-nav li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     BannerSlider ();
     wowAnimation ();
     clientSlider ();
     journalSlider ();
     partnersLogo ();
     footerBlogSlider ();
     quickContact ();
     sidebarNewsSlider ();
     doughnutChartBox ();
     barTableOne ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     mobileDropdown ();
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ();
  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});
