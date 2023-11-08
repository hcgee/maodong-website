function DY_scroll(wraper,prev,next,img,speed,or)
 { 
  var wraper = $(wraper);
  var prev = $(prev);
  var next = $(next);
  var img = $(img).find('ul');
  var w = img.find('li').outerWidth(true);
  var s = speed;
  next.click(function()
       {
        img.animate({'margin-left':-w},function()
        {
		   img.find('li').eq(0).appendTo(img);
		   img.css({'margin-left':0});
        });
        });
  prev.click(function()
       {
			img.find('li:last').prependTo(img);
			img.css({'margin-left':-w});
			img.animate({'margin-left':0});
        });
  if (or == true)
  {
   ad = setInterval(function() { next.click();},s*1000);
   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
 
  }
 }
 
$(function(){
	var cname="";
	$("#topnav li").hover(function(){
		cname=$(this).attr("class");
		if(!cname){$(this).addClass("hover");}
		$("dl",this).show();
	},function(){
		$("dl",this).hide();
		if(!cname){$(this).removeClass("hover");}
	});
	//
	DY_scroll('.pro_width','.arrow_left','.arrow_right','.pro_width',5,true);

})

//回顶部
window.onload = function () {
    var topbtn = document.getElementById("top");
    var timer = null;
    var pagelookheight = document.documentElement.clientHeight;
	
    topbtn.onclick = function () {

        timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedtop = backtop/4;
            document.body.scrollTop = backtop -speedtop;
            if(backtop ==0){
                clearInterval(timer);
            }
        }, 20);
    }
}