$(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });

    $(document).scroll(function () {
      var $nav = $(".navbars");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      console.log($nav.height())
    });
    

  });
  