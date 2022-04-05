var dice1= Math.floor(Math.random()*6)+1;

var img1="dice"+dice1+".png";
var finalImg1="images/"+img1;
var change1=document.querySelectorAll("img")[0];
change1.setAttribute("src",finalImg1);

var dice2=Math.floor(Math.random()*6)+1;
var finalImg2="images/dice"+dice2+".png";
document.querySelectorAll("img")[1].setAttribute("src",finalImg2);

if(dice1>dice2){
  document.querySelector("h1").textContent="🏆Player1 Won";
}
else if(dice1<dice2){
  document.querySelector("h1").innerHTML="Player2 Won🏆"
}
else{
  document.querySelector("h1").innerHTML="DRAW!!!"
}
