$(function(){
  //언어선택
  $(".btnLang").click(function(e){
    e.preventDefault();
    $(this).toggleClass("on");
    $(".langList").slideToggle();
  });
  // 검색창
  $(".btnSch").click(function(){
      $(".schArea").slideToggle();
    });
  $(".btnClose").click(function(){
      $(".schArea").slideUp();
    });

  //gnb
  $("#gnb li").mouseenter(function(){
    $(".subMenuBg").stop().slideDown();
    $(".dep2").stop().slideDown();
  });
  $("#gnb").mouseleave(function(){
    $(".subMenuBg").stop().slideUp();
    $(".dep2").stop().slideUp();
  });
  $(".dep2").mouseleave(function(){
    $(".subMenuBg").stop().slideUp();
    $(".dep2").stop().slideUp();
  });

  //con3 탭
  $(".tabMenu li").click(function(e){
      e.preventDefault();
      var tc1 = $(this).children().attr("data-tab");
      var tc2 = "#" + tc1;
      $(".tabCon").hide();
      $(tc2).show();
      $(".tabMenu li").removeClass("on");
      $(this).addClass("on");
      console.log(tc1);
      console.log(tc2);
    });

  //패밀리사이트
  $(".btnFamily").click(function(e){
    e.preventDefault();
    $(this).toggleClass("on");
    $(".familyList").slideToggle();
  });
});
