
let sign = "x";
let disp = document.getElementById("player");
let square;


function printx(number){
    let square = document.getElementById("r"+number);
  //console.log(square);
  
  if(square.innerText==""){
  square.innerText=sign;
  winner();
  checksign();
 disp.innerHTML="<center>"+ sign + "  's TURN"+"</center>";
 
  }
  
  
}
function checksign(){
    if(sign=="x")sign ="o";
    else sign = "x";
    winner();
   
}
function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}
function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
       return true;
    else return false;   
}

function winner(){
if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
    ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
    ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
    disp.innerHTML = "<center>" +sign + " won the game!" + "</center>";
    for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML="";
    }
  throw "game end";
}else{
    if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
   getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
   getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){

    disp.innerHTML = "<center> WHOOPS! Its a tie </center>";
    for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML="";
    }
      throw "Whoop its a tie";
   }
}
}

