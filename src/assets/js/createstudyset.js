export default function createInit() {
  var flag = true;
  //如果flag为真则toggle在左反之在右
  var show_area_global;
  var hide_area_global;

  function creastudyset_autochange() {
    var window_width = $(window).width();
    var studySetHeadHeight = $(".study-set-head").height()+$("header").height();
    var window_height = $(window).height();
    var switch_botton = window_width * 0.14 + "px";
    var show_area = window_width * 0.86 + "px";
    var hide_area = (-window_width * 0.86) + "px";
    show_area_global = show_area;
    hide_area_global = hide_area;
    $(".study-set-toggle1").css("height", (window_height - studySetHeadHeight) + "px");
    $(".study-set-toggle1").css("width", switch_botton);
    $(".study-set-toggle1").css("top", studySetHeadHeight + "px");
    // $(".study-set-show-area1").css("height", window_height);
    $(".study-set-show-area1").css("top", studySetHeadHeight + "px");
    $(".study-set-show-area1").css("width", show_area);
    $(".study-set-show-area2").css("top", studySetHeadHeight + "px");
    // $(".study-set-show-area2").css("height", window_height);
    $(".study-set-show-area2").css("width", show_area);
    if (flag == true) {
      $(".study-set-toggle1").css("left", "0px");
      $(".study-set-show-area2").hide(0);
    } else {
      $(".study-set-toggle1").css("left", show_area);
      $(".study-set-show-area1").hide(0);
    }
  }
  creastudyset_autochange();
  $(window).resize(creastudyset_autochange);
  $(".study-set-show-area2").css("left", hide_area_global);
  //左边可见右边不可见
  function left_toggle() {
    $(".study-set-show-area1").animate({
      right: hide_area_global
    });
    $(".study-set-show-area2").show();
    $(".study-set-show-area2").animate({
      left: "0px"
    });
    $(".study-set-toggle1").animate({
      left: show_area_global
    });
    $(".study-set-show-area1").css("box-shadow", "none")
    $("#toggle-btn1").hide();
    $("#toggle-btn2").show();
  }
  //右边可见左边不可见
  function right_toggle() {
    // $(".study-set-show-area1").css("box-shadow", "0px 0px 20px rgb(90, 90, 90)")
    $(".study-set-show-area2").animate({
      left: hide_area_global
    });
    $(".study-set-show-area1").show();
    $(".study-set-show-area1").animate({
      right: "0px"
    });
    $(".study-set-toggle1").animate({
      left: "0px"
    });
    $("#toggle-btn2").hide();
    $("#toggle-btn1").show();
  }
  $(".study-set-toggle1").click(
    function () {
      if (flag) {
        left_toggle();
        $(".study-set-show-area1").hide(0.001);
        flag = false;
      } else {
        right_toggle();
        $(".study-set-show-area2").hide(0.001);
        flag = true;
      }
    }
  );
}
