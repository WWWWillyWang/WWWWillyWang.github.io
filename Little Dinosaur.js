function one()
{
	$("#bird").animate({top: '120px'});
}

function two()
{
    $("#bird").animate({top: '240px'});
}

function three()
{
	$("#bird").animate({top: '360px'});
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
var score = 0;
var position = 1000;

function bird2_update()
{
	var bird2 = document.getElementById("bird2");

    position = position - 50;

    if(position<=0)
    {
    	position=1000;
    	var height = Math.random()*90+1;
    	if(height>=60)
    	{
    		height=120;
    		bird2.style.top = height+"px";
    	}
    	else if(height>=30)
    	{
    		height=240;
    		bird2.style.top = height+"px";
    	}
    	else
    	{
    		height=360;
    		bird2.style.top = height+"px";
    	}
    }

    score+=7.5;
    document.getElementById("score").innerHTML = score;
    bird2.style.left = position+"px";
}

function bird3_update()
{
	var bird2 = document.getElementById("bird2");
	var bird3 = document.getElementById("bird3");

    position = position - 50;

    if(position<=0)
    {
    	position=1000;
    	var height = Math.random()*90+1;
    	if(height>=60)
    	{
    		height=120;
    		bird3.style.top = height+"px";
    	}
    	else if(height>=30)
    	{
    		height=240;
    		bird3.style.top = height+"px";
    	}
    	else
    	{
    		height=360;
    		bird3.style.top = height+"px";
    	}
    }

    while(bird2.style.top == bird3.style.top)
    {
    	var height = Math.random()*90+1;
    	if(height>=60)
    	{
    		height=120;
    		bird3.style.top = height+"px";
    	}
    	else if(height>=30)
    	{
    		height=240;
    		bird3.style.top = height+"px";
    	}
    	else
    	{
    		height=360;
    		bird3.style.top = height+"px";
    	}
    }
    score+=7.5;
    document.getElementById("score").innerHTML = score;
    bird3.style.left = position+"px";
}

setInterval(bird2_update,400);
setInterval(bird3_update,400);
//障礙end

//碰到
function gameover()
{
	var bird=document.getElementById("bird");
	var bird2=document.getElementById("bird2");
	var bird3=document.getElementById("bird3");

	if((bird.style.top==bird2.style.top)&&((bird2.style.left<="150px")&&(bird2.style.left>="0px")))
	{
		score=0;
		document.getElementById("score").innerHTML = score;
		alert("Gameover");
		bird2.style.left="1000px";
		bird3.style.left="1000px";
		position=1000;
	}
	else if((bird.style.top==bird3.style.top)&&((bird3.style.left<="150px")&&(bird3.style.left>="0px")))
	{
		score=0;
		document.getElementById("score").innerHTML = score;
		alert("Gameover");
		bird2.style.left="1000px";
		bird3.style.left="1000px";
		position=1000;
	}
}

setInterval(gameover,400);
//碰到end

//暫停
function pause()
{
	alert("點擊確定繼續...");
}
//暫停end

