$(document).ready(function(){function a(){$(".inlinesparkline").sparkline("html",{type:"bar",height:"100",barWidth:10,barColor:"#4fa950",negBarColor:"#ce483d",stackedBarColor:"#FFA93C",});var f=[1200000,800000,650000,500000,300000,200000];$(".dynamicsparkline").sparkline(f,{type:"bar",height:"200",barWidth:120,barSpacing:20,barColor:"#e74c3c",negBarColor:"#ce483d",stackedBarColor:"#FFA93C",tooltipFormat:"{{offset:offset}} {{value}}",tooltipValueLookups:{offset:{0:"Bungalow",1:"Semi-Detached",2:"Terrace",3:"Townhouse",4:"Condominium",5:"Flats",}},});function b(){$(".sparkline-bar").sparkline([5,6,7,2,0,-4,-2,-6],{type:"bar",height:"100",barColor:"#4fa950",negBarColor:"#ce483d",stackedBarColor:"#FFA93C",barWidth:10,barSpacing:3,nullColor:"#aaa"})}function c(){$(".sparkline-stackbar").sparkline([[1,4],[2,2],[2,4],[5,2],[3,5],[4,1]],{type:"bar",height:"100",barWidth:12,barSpacing:3,stackedBarColor:["#00aced","#ce483d","#FFA93C","#4fa950"]})}function e(){$(".sparkline-line").sparkline([5,6,7,9,9,5,3,2,0,4,6,7],{type:"line",width:"100px",height:"100px",lineColor:"#82b721",fillColor:"#538115",lineWidth:5,spotColor:"#95c535",minSpotColor:"#95c535",maxSpotColor:"#95c535",highlightSpotColor:"#333",highlightLineColor:"#000",spotRadius:6,normalRangeColor:"#111",drawNormalOnTop:false})}function d(){$(".sparkline-pie").sparkline([1,1,2,5],{type:"pie",width:"100px",height:"100px",sliceColors:["#00aced","#ce483d","#FFA93C","#4fa950"],offset:0})}e();b();c();d()}a();$("a.switcher").bind("click",function(d){d.preventDefault();var b=$(this).attr("id");var c=$("#property-list");var f=$(this).attr("class").split(" ");if($(this).hasClass("active")){return false}else{if(b=="gridview"){$(this).addClass("active");$("#listview").removeClass("active");c.removeClass("list-layout");c.addClass("grid-layout")}else{if(b=="listview"){$(this).addClass("active");$("#gridview").removeClass("active");c.removeClass("grid-layout");c.addClass("list-layout")}}}});$("#filmstrip").filmstrip({interval:3000});$(".popover-demo a").popover();$(".popover-demo a").on("click",function(b){b.preventDefault();return true})});

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