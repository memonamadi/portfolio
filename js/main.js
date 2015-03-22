(function() {

  // function init 
  function init() {
    smoothScroll();
    animateArrow();
  }

  function smoothScroll() {
    $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }

  function animateArrow() {
    setInterval(function(){
      $('.arrow').animate({bottom:'20px'}, 500, function(){
          $(this).animate({bottom:'30px'}, 500);
      });

    }, 1000);
  }

  init();

})();
































