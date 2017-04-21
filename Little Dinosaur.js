function one()
{
	$("#bird").animate({top: '-20px'});
}

function two()
{
    $("#bird").animate({top: '100px'});
}

function three()
{
	$("#bird").animate({top: '220px'});
}

//背景
var current = 1;

function update() 
{  
  var background = document.getElementById("background");

    if (current == 1) {
      background.src = "dinosuar_background1.jpg";
    }
    if (current == 2) {
      background.src = "dinosuar_background2.jpg";
    }
    if (current == 3) {
      background.src = "dinosuar_background3.jpg";
    }
    if (current == 4) {
      background.src = "dinosuar_background4.jpg";
    }
    if (current == 5) {
      background.src = "dinosuar_background5.jpg";
    }

    current = current + 1;
    if (current > 5) {
        current = 1;
    }

}
setInterval(update, 400);
//背景end

//障礙
var position = -850;

function bird_update()
{
	var bird2 = document.getElementById("bird2");

	if (current == 1) {
      background.src = "dinosuar_background1.jpg";
    }
    if (current == 2) {
      background.src = "dinosuar_background2.jpg";
    }
    if (current == 3) {
      background.src = "dinosuar_background3.jpg";
    }
    if (current == 4) {
      background.src = "dinosuar_background4.jpg";
    }
    if (current == 5) {
      background.src = "dinosuar_background5.jpg";
    }

    current = current + 1;
    if (current > 5) {
        current = 1;
    }

    position = position + 100;

    if(position>=260)
    {
    	position=-850;
    	var height = Math.random()*90+1;
    	if(height>=60)
    	{
    		height=-20;
    		bird2.style.top = height+"px";
    	}
    	else if(height>=30)
    	{
    		height=100;
    		bird2.style.top = height+"px";
    	}
    	else
    	{
    		height=220;
    		bird2.style.top = height+"px";
    	}
    }

    bird2.style.right = position+"px";
}

setInterval(bird_update,400);
//障礙end

//碰到
var bird=document.getElementById("bird");
var bird2=document.getElementById("bird2");

if((bird.style.top==bird2.style.top))
{
	alert("666");
}
