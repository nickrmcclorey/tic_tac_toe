var turn = 'X';
//connecting to all the spots on the board
var topleft = document.getElementById('one');
var topmiddle = document.getElementById('two');
var topright = document.getElementById('three');
var middleleft= document.getElementById('four');
var middle = document.getElementById('five');
var middleright = document.getElementById('six');
var bottomleft =document.getElementById('seven');
var bottom = document.getElementById('eight');
var bottomright = document.getElementById('nine');

//changes the spot on the board

function change(spot){
if ((spot.textContent=='')&&(message_board.textContent=='')){
spot.textContent=turn;

if ((topleft.textContent==turn)&&(topmiddle.textContent==turn)&&(topright.textContent==turn)||(middleright.textContent==turn)&&(middle.textContent==turn)&&(middleleft.textContent==turn) || (bottomleft.textContent==turn)&&(bottom.textContent==turn)&&(bottomright.textContent==turn)||(topleft.textContent==turn)&&(middleleft.textContent==turn)&&(bottomleft.textContent==turn)||(topmiddle.textContent==turn)&&(middle.textContent==turn)&&(bottom.textContent==turn)||(topright.textContent==turn)&&(middleright.textContent==turn)&&(bottomright.textContent==turn)||(topright.textContent==turn)&&(middle.textContent==turn)&&(bottomleft.textContent==turn)||(topleft.textContent==turn)&&(middle.textContent==turn)&&(bottomright.textContent==turn)){
	message_board.textContent=('Game Over '+ turn +' wins');
};//end of if checking for end of game

	if (turn=='X'){
	turn='O';} else {
		turn='X'
	};
};//end of outer if
}//end of function

function reset() {
	topleft.textContent='';
	topmiddle.textContent='';
	topright.textContent='';
	middleright.textContent='';
	middle.textContent='';
	middleleft.textContent='';
	bottomleft.textContent='';
	bottom.textContent='';
	bottomright.textContent='';
	message_board.textContent='';
}

document.getElementById('reset').addEventListener("click",reset,false);

topleft.addEventListener("click",function(){
	change(topleft);
},false);

topmiddle.addEventListener("click",function(){
	change(topmiddle);
},false);

topright.addEventListener("click",function(){
	change(topright);
},false);

middleleft.addEventListener("click",function(){
	change(middleleft);
},false);

middle.addEventListener("click",function(){
	change(middle);
},false);

middleright.addEventListener("click",function(){
	change(middleright);
},false);

middleright.addEventListener("click",function(){
	change(middleright);
},false);

bottomleft.addEventListener("click",function(){
	change(bottomleft);
},false);

bottom.addEventListener("click",function(){
	change(bottom);
},false);

bottomright.addEventListener("click",function(){
	change(bottomright);
},false);
