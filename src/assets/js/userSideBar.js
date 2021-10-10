export default function userSideBar(){
  function autochangesize(){
    var sidebar_height=$(window).height()-$("header").height()+"px";
    var sidebar_top=$("header").height()+"px"
    console.log($("header").height())
    $(".usercenter-sidebar").css("top",sidebar_top);
    $(".usercenter-sidebar").css("height",sidebar_height);
    $(".simplebar-userbar").css("height",sidebar_height);
  }
  autochangesize();
  $(window).resize(autochangesize);        
}