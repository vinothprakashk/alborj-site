/* eslint-disable */

export default () => {
  new WOW().init({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default,
  });

  var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  // read the link on how above code works
  
  var findMe = document.querySelectorAll('.counts');
  
  window.addEventListener('scroll', function(event) {
    // add event on scroll
    findMe.forEach(element => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("draw");
        $('.count').not('animated').each(function () {
          $(this).addClass('animated');
          $(this).prop('Counter',0).animate({
              Counter: $(this).attr('data-count')
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
        });
      }
    });
  }, false);

  function animate(obj, initVal, lastVal, duration) {

    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime ) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
              startTime = currentTime ;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime  - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
              window.requestAnimationFrame(step);
        }
        else{
              window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
  }

  $(window).on('load', function() {

    $('.owl-carousel').not('.job-list').owlCarousel({
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      loop: true,
      navRewind: true,
      margin: 10,
      nav: false,
      dots: true,
      lazyLoad: true,
      stagePadding: 10,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    })
  })
  
  /*
    ** Only run on client-side and only in production mode
    */
  if (process.env.NODE_ENV !== 'production')
    return
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','G-XB0ZXDPM34');
}
