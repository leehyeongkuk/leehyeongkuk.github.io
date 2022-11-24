$(function(){
    $.ajax({
        type: "GET",
        url : "/realport/data/navi.json",
        dataType :"json",
        success : function(naviData){
         var naviTag = ''; 
         $.each(naviData, (index, item)=>{
            naviTag +="<li class=\"nav-item active\"><a class=\"nav-link\" href=\""+item.navLink+"\">"+item.navTitle+"<span class=\"sr-only\">(current)</span></a></li>";
            //naviTag +="<li class="+item.navClass+" ><a href="+item.navLink+" target="+item.navTarget+" >"+item.navTitle+"</a></li>";
         })
         $('#gnb').html(naviTag)
  
        },
        error : function(){
          
        }
    })
})