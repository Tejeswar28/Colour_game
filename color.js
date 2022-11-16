
var colors= genraterandomcolors(6);
var squares=document.querySelectorAll(".square");
var pickcolor=pickedcolor();
var colorDisplay=document.getElementById("display");
var messagedisplay=document.getElementById("access");
var menubar=document.querySelector("h1");

var reset=document.querySelector(".new");

	reset.addEventListener("click",function(){
	 colors=genraterandomcolors(6);
	pickcolor=pickedcolor();
	colorDisplay.textContent=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
	squares[i].style.background=colors[i];
	}
	menubar.style.background="steelblue";
	messagedisplay.textContent=" "
	
})
var easy=document.querySelector("#b1");
easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors= genraterandomcolors(3);
	pickcolor=pickedcolor();
	colorDisplay.textContent=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
	squares[i].style.background=colors[i];}
	else{
		squares[i].style.display="none";
	}
	}
	reset.textContent="NewColors";
	menubar.style.background="steelblue";
	messagedisplay.textContent=" "
	})
var hard=document.querySelector("#b2");
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors= genraterandomcolors(6);
	pickcolor=pickedcolor();
	colorDisplay.textContent=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
	squares[i].style.background=colors[i];
	squares[i].style.display="block";
	reset.textContent="NewColors";
	menubar.style.background="steelblue";
	}
})
colorDisplay.textContent=pickcolor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		console.log(clickedcolor)
		if(clickedcolor === pickcolor) 
		{
			messagedisplay.textContent="correct";
			alert("Yahooo!!! You are Correct...");
			reset.textContent="PlayAgain";
			changecolors(clickedcolor);
			menubar.style.background=clickedcolor;
		}
		else{
			this.style.background="steelblue";
			messagedisplay.textContent="Try again";
			alert("Try Again");
		}
	})

}

function changecolors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}
function pickedcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function genraterandomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomcolors());
	}
	return arr;

}
function randomcolors()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r+", "+g+", "+b + ")";
}
