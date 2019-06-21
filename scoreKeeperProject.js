var bp1=document.querySelector("#b1");
var bp2=document.querySelector("#b2");
var p1Disp=document.querySelector("#p1Disp");
var p2Disp=document.querySelector("#p2Disp");
var rst=document.querySelector("#rst");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span")
var winningScore=0;
var p1Count=0;
var p2Count=0;
var gameOver=false;
bp1.addEventListener("click",function(){
	if (!gameOver) {
      p1Count++;
      if (p1Count===winningScore) {
       gameOver=true;
       p1Disp.classList.add("winner");
   }
      p1Disp.textContent=p1Count;
}
})

bp2.addEventListener("click",function(){
   if (!gameOver) {
      p2Count++;
      if (p2Count===winningScore) {p2Disp.classList.add("winner");
       gameOver=true;}
    p2Disp.textContent=p2Count;
}
})

function reset(){
	p1Count=0;
	p2Count=0;
	gameOver=false;
	p1Disp.classList.remove("winner");
	p2Disp.classList.remove("winner");
	p1Disp.textContent=p1Count;
	p2Disp.textContent=p2Count;
}

rst.addEventListener("click",function(){
	reset();
})
numInput.addEventListener("change",function(){
	reset();
   winningScore=Number(numInput.value);
   winningScoreDisplay.textContent=winningScore;
})
