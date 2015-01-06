$(document).ready(function() {
  $("a.switcher").bind("click",function(d){d.preventDefault();
    
    var b = $(this).attr("id");
    var c = $("#property-list");
    var f = $(this).attr("class").split(" ");

    if($(this).hasClass("active")){
      return false
    }else{
      if(b == "listview"){
        $(this).addClass("active");
        $("#gridview").removeClass("active");
        c.removeClass("grid-layout");
        c.addClass("list-layout")
      }else{
        if(b == "gridview"){
          $(this).addClass("active");
          $("#listview").removeClass("active");
          c.removeClass("list-layout");
          c.addClass("grid-layout")
        }
      }
    }
  });
});

$(document).ready(function () {
    $(window).load(function() { $("#loading").fadeOut(1000); 
  });
});

$(document).ready(function() {
  $('#top-menu-bar').scrollToFixed();
});

$(document).ready(function() {
	$("#wizard").bwizard();
});

$(document).ready(function() {
var config = {
  '.chosen-select'           : {},
  '.chosen-select-deselect'  : {allow_single_deselect:true},
  '.chosen-select-no-single' : {disable_search_threshold:10},
  '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
  '.chosen-select-width'     : {width:"95%"}
}
for (var selector in config) {
  $(selector).chosen(config[selector]);
}
});


$(document).ready(function() {
    $("#toTop").scrollToTop(1000);
});

$(document).ready(function() {
    $(".tooltipsku").tooltip();
});

function optionCheck(){
  var option = document.getElementById("populateList").value;
  $("#aside-property-search").css("display","none");
  $("."+option).css("display","block");
}

$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});