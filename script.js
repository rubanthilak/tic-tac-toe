var box = document.querySelectorAll(".column");
var reset = document.getElementById("reset")
let currentPlayer = "X";

let nextPlayer;

reset.addEventListener("click",restart)

box.forEach((e) => {
  e.addEventListener("click", myFunction);
})

function check() {
  let i = 0;
  if (
    box[i].innerText == box[i + 4].innerText &&
    box[i].innerText == box[i + 8].innerText
  ) {
    return box[i].innerText;
  }
  if (
    box[i + 2].innerText == box[i + 4].innerText &&
    box[i + 2].innerText == box[i + 6].innerText
  ) {
    return box[i + 2].innerText;
  }
  for (i = 0; i < 3; i++) {
    if (
      box[i].innerText == box[i + 3].innerText &&
      box[i].innerText == box[i + 6].innerText
    ) {
      return box[i].innerText;
    }
  }
  for (i = 0; i < 8; i = i + 3) {
    if (
      box[i].innerText == box[i + 1].innerText &&
      box[i].innerText == box[i + 2].innerText
    ) {
      return box[i].innerText;
    }
  }
  return null;
}

function myFunction(event){
        nextPlayer = (currentPlayer=="X") ? "O":"X";
        document.getElementById("result").innerText ="play mr."+ nextPlayer ;
        let isEmpty = event.target.innerText;
        if (isEmpty != "X" && isEmpty != "O") {
          event.target.innerHTML = `<p class="x"> ${currentPlayer}</p>`;
          currentPlayer = currentPlayer == "X" ? "O" : "X";
        }
        let win = check();
        if(win=="X" || win =="O"){
            document.getElementById("result").innerText ="Winner is : "+ win;
            box.forEach(e=>{
                e.removeEventListener('click',myFunction,false);
            })
        }
      

}
function restart(){
  nextPlayer = (currentPlayer=="X") ? "O":"X";
  document.getElementById("result").innerText ="play mr."+ nextPlayer ;
  box.forEach( e => {
    e.innerText = null;
    e.addEventListener("click", myFunction);
  })
}
