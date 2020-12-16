
var x=1;
var y=0

function play(){

    var playerX=document.getElementById("playerX").value;
    var player0=document.getElementById("player0").value;
    document.getElementById('ScoreX').value;
    document.getElementById('Score0').value;
    ScoreX.innerHTML=playerX+" - 0";
    Score0.innerHTML=player0+" - 0";
    document.getElementById('turn');
    if(turn.innerHTML == "TAP TO PLAY"){
    turn.innerHTML=playerX+" TURN";}
    document.getElementById('box1');
    box1.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }

    document.getElementById('box2');
    box2.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }
    
    document.getElementById('box3');
    box3.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }
    
    document.getElementById('box4');
    box4.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }

    document.getElementById('box5');
    box5.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }

    document.getElementById('box6');
    box6.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }
    
    document.getElementById('box7');
    box7.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }
    
    document.getElementById('box8');
    box8.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }
    
    document.getElementById('box9');
    box9.onclick = function(){
        if(this.innerHTML != "X" && this.innerHTML != "0"){
            if(x==1){
            this.innerHTML="X";
            x=0;
            document.getElementById('turn')
            turn.innerHTML=player0+" TURN";
            getWinner();
            }
        else if(x==0){
            if(this.innerHTML != "X" && this.innerHTML != "0");
            this.innerHTML="0";
            x=1;
            document.getElementById('turn')
            turn.innerHTML=playerX+" TURN";
            getWinner();
            }
        }
    }
}

var xWin = 0;
var oWin = 0;
function selectWinnerBoxes(b1,b2,b3){    
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    document.getElementById('turn');
    turn.classList.add("win-turn");
    turn.style.fontSize = "40px";
    document.getElementById("restart");
    restart.classList.add("win-turn");
    if(b1.innerHTML=="X"){
        var playerX=document.getElementById("playerX").value;
        turn.innerHTML=playerX+" Won";
        document.getElementById('ScoreX');
        ScoreX.classList.add("scoreX-win");
        xWin +=1;
        ScoreX.innerHTML=playerX+" - "+xWin;
    }else{
        var player0=document.getElementById("player0").value;
        turn.innerHTML=player0+ " Won";
        document.getElementById('Score0');
        Score0.classList.add("score0-win");
        oWin +=1;
        Score0.innerHTML=player0+" - "+oWin;
    }
    x=2;
}

function tie(b1,b2,b3,b4,b5,b6,b7,b8,b9){
    b1.classList.add("tie");
    b2.classList.add("tie");
    b3.classList.add("tie");
    b4.classList.add("tie");
    b5.classList.add("tie");
    b6.classList.add("tie");
    b7.classList.add("tie");
    b8.classList.add("tie");
    b9.classList.add("tie");
    document.getElementById('turn');
    turn.classList.add("tie-turn");
    turn.innerHTML="TIE";
    document.getElementById('restart');
    restart.classList.add("tie-turn");
}

function getWinner(){
   
    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");
        turn = document.getElementById("turn");

// get all posibilites
  if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
     selectWinnerBoxes(box1,box2,box3);

  if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
     selectWinnerBoxes(box4,box5,box6);
 
  if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
     selectWinnerBoxes(box7,box8,box9);
 
  if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
     selectWinnerBoxes(box1,box4,box7);
 
  if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
     selectWinnerBoxes(box2,box5,box8);
 
  if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
     selectWinnerBoxes(box3,box6,box9);
 
  if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
     selectWinnerBoxes(box1,box5,box9);
 
  if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
     selectWinnerBoxes(box3,box5,box7);

  if((box1.innerHTML == "X" || box1.innerHTML == "0") && (box2.innerHTML == "X" || box2.innerHTML == "0")
  && (box3.innerHTML == "X" || box3.innerHTML == "0") && (box4.innerHTML == "X" || box4.innerHTML == "0")
  && (box5.innerHTML == "X" || box5.innerHTML == "0") && (box6.innerHTML == "X" || box6.innerHTML == "0")
  && (box7.innerHTML == "X" || box7.innerHTML == "0") && (box8.innerHTML == "X" || box8.innerHTML == "0")
  && (box9.innerHTML == "X" || box9.innerHTML == "0") && (turn.innerHTML == "X TURN" || turn.innerHTML == "0 TURN"))
    tie(box1, box2 ,box3, box4, box5, box6, box7, box8, box9);
 
}

function replay(){
    document.getElementById('turn');
    document.getElementById('restart')
    document.getElementById('box1');
    document.getElementById('box2');
    document.getElementById('box3');
    document.getElementById('box4');
    document.getElementById('box5');
    document.getElementById('box6');
    document.getElementById('box7');
    document.getElementById('box8');
    var playerX=document.getElementById("playerX").value;
    turn.innerHTML=playerX+" TURN";
    turn.style.fontSize="35px";
    turn.classList.remove("win-turn");turn.classList.remove("tie-turn");
    restart.classList.remove("win-turn");
    restart.classList.remove("tie-turn");
    document.getElementById('ScoreX');
    ScoreX.classList.remove("scoreX-win"); 
    document.getElementById('Score0');
    Score0.classList.remove("score0-win");
    box1.innerHTML="";box1.classList.remove("win");box1.classList.remove("tie");
    box2.innerHTML="";box2.classList.remove("win");box2.classList.remove("tie");
    box3.innerHTML="";box3.classList.remove("win");box3.classList.remove("tie");
    box4.innerHTML="";box4.classList.remove("win");box4.classList.remove("tie");
    box5.innerHTML="";box5.classList.remove("win");box5.classList.remove("tie");
    box6.innerHTML="";box6.classList.remove("win");box6.classList.remove("tie");
    box7.innerHTML="";box7.classList.remove("win");box7.classList.remove("tie");
    box8.innerHTML="";box8.classList.remove("win");box8.classList.remove("tie");
    box9.innerHTML="";box9.classList.remove("win");box9.classList.remove("tie");
    x=1;
}

