
$(document).ready(function() {
  $(window).scroll(function(){
    // 현재 스크롤 위치를 가져옵니다.
    var scrollPosition = $(window).scrollTop();

    // 스크롤 위치가 50px 이상이면 클래스를 추가하고, 그렇지 않으면 제거합니다.
    if(scrollPosition >= 50){
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });
  $(".navbar-toggler").click(function(){
      $("#aside").toggleClass("on");
      $(".aside_bg").toggleClass("on");
      $(this).toggleClass("on");

      function toggleClassBasedOnScreenSize() {

      if ($(window).width() > 1024) { 
          $("#aside").removeClass("on");
          $(".aside_bg").removeClass("on");
          $(".navbar-toggler").removeClass("on");
          $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
        } else {
        
        }
      }
      toggleClassBasedOnScreenSize();

      $(window).resize(function() {
          toggleClassBasedOnScreenSize();
      });

     
    });
    $(".aside_bg").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $(".navbar-toggler").removeClass("on");
        $("#aside .navbar-nav_m li").removeClass("on");
        $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
    });


    // $("#aside .navbar-nav_m li .sub").hide();
    $("#aside .navbar-nav_m li").click(function(){
        $(this).toggleClass("on");
        //$(this).find(".sub").slideDown();
        $('#aside .navbar-nav_m li').not(this).removeClass('on');        
        let subElement = $(this).find(".sub");

        if (subElement.is(":visible")) {
          subElement.slideUp();
        } else {
          $("#aside .navbar-nav_m li .sub").slideUp();
          subElement.slideDown();
        }
    });

    $('.nav-item').mouseenter(function(){
      //$(this).find('.sub_menu').stop().slideDown();
      $(this).addClass("on");
      $(this).find('.sub_menu').addClass("on");
      $("#header").addClass("on");
    });
    $("#navbarNav").mouseenter(function(){
      $("#header").addClass("on");
    }); 
    $('.nav-item').mouseleave(function(){
        //$(this).find('.sub_menu').stop().slideUp();
        $(this).removeClass("on");
        $(this).find('.sub_menu').removeClass("on");
 
    });
    $("#navbarNav").mouseleave(function(){
      $("#header").removeClass("on");
    }); 
});
    


$(document).ready(function() {
  $('.select_box .top').click(function(e) {
      e.preventDefault();
      $(".select_box").toggleClass("on");
      $(".sub_box").toggleClass("on");
  });
  $(".fo_menu h2").click(function() {
      $(this).toggleClass("on");
      $(".fo_menu ol").toggleClass("on");
      $(".fo_menu ol.active").animate({
        maxHeight: $(".fo_menu ol.on").hasClass("on") ? $(".fo_menu ol.on")[0].scrollHeight + "px" : 0
    }, 2000);
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
          $('#topBtn.go_top').addClass("on");
      } else {
          $('#topBtn.go_top').removeClass("on");
      }
  });

  $('#topBtn.go_top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
  });
  AOS.init();
});











