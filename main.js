
let btn = document.querySelectorAll(".btn");
let newgame= document.querySelector("#newgame");
let reset = document.querySelector("#reset");
let d3 = document.querySelector(".d3")
let p = document.querySelector(".p1");
let drawmessg = document.querySelector(".drawmesg");
let p1 = document.querySelector(".p3")
let turn = true;
count = 0;
let winptrn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

let disablebtns =  ()=>{
    for (const box of btn) {
        box.disabled = true;
    }
}
let enablebtns =  ()=>{
    turn = true;
    for (const box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
}
let resetbtn = ()=>{
enablebtns();
p.classList.add("p2");
p1.classList.add("p4")
count=0;


}
const winmsg = (ps1)=>{
    p.innerText = `Congrats Winner is ${ps1}`;
    p.classList.remove("p2");
  
}
const drawmsg = () =>{
    p1.innerText = " !!! Match Draw !!! ";
    p1.classList.remove("p4");
    disablebtns();
}

const checkWinner = ()=>{
for (const element of winptrn) {
    let ps1 =btn[element[0]].innerText;
    let ps2 =btn[element[1]].innerText;
    let ps3 =btn[element[2]].innerText;
    if(ps1 != "" && ps2 != "" && ps3 != "" ){

        if(ps1===ps2&&ps2===ps3){
    winmsg(ps1);
    disablebtns();
        }
    }
}
}  
  btn.forEach((btn) => {
    btn.addEventListener("click",()=>{
       if(turn===true){
        btn.innerText="O";
        btn.style.color = "yellow";
        turn=false;
       }
    
       else{
        btn.innerText="X";
        turn=true;
       }
       btn.disabled= true;
       let win = checkWinner();
      count++;
      if(count ===9 && !win){
      drawmsg();
    }
        });
});
reset.addEventListener("click",resetbtn);
newgame.addEventListener("click",resetbtn);

