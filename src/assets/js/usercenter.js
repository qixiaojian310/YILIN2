export default function userCenter(){
  function autochangesize(){
    var sidebar_height=$(window).height()-$("header").height()+"px";
    var sidebar_top=$("header").height()+"px";
    $(".usercenter-sidebar").css("top",sidebar_top);
    $(".usercenter-sidebar").css("height",sidebar_height);
  }
  autochangesize();
  $(window).resize(autochangesize);        
}