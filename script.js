var box = document.querySelectorAll(".tile");
var start = document.getElementById("start");
var reset = document.getElementById("reset");
let count = 0;
let currentPlayer = "O";
let nextPlayer;

start.addEventListener("click", newGame);
reset.addEventListener("click", restart);

box.forEach((e) => {
  e.addEventListener("click", playTicTacToe);
});

function check() {
  let i = 0;
  if (
    box[i].innerText == box[i + 4].innerText &&
    box[i].innerText == box[i + 8].innerText &&
		box[i].innerText != ''
  ) {
    return box[i].innerText;
  }
  if (
    box[i + 2].innerText == box[i + 4].innerText &&
    box[i + 2].innerText == box[i + 6].innerText &&
		box[i].innerText != ''
  ) {
    return box[i + 2].innerText;
  }
  for (i = 0; i < 3; i++) {
    if (
      box[i].innerText == box[i + 3].innerText &&
      box[i].innerText == box[i + 6].innerText &&
			box[i].innerText != ''
    ) {
      return box[i].innerText;
    }
  }
  for (i = 0; i < 8; i = i + 3) {
    if (
      box[i].innerText == box[i + 1].innerText &&
      box[i].innerText == box[i + 2].innerText &&
			box[i].innerText != ''
    ) {
      return box[i].innerText;
    }
  }
  return null;
}

function playTicTacToe(event) {
  nextPlayer = currentPlayer == "X" ? "O" : "X";
  document.getElementById("result").innerText = nextPlayer + "'s turn";
  let isEmpty = event.target.innerText;
  if (isEmpty != "X" && isEmpty != "O") {
		count++;
    event.target.innerHTML = `<p class="mark ${currentPlayer.toLowerCase()}"> ${currentPlayer}</p>`;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
	if(count > 8) {
		document.getElementById("result").innerText = "It's a draw";
		reset.classList.remove('hide');
		return;
	}
  let win = check();
  if (win == "X" || win == "O") {
    document.getElementById("result").innerText = win + " WON !!!";
    box.forEach((e) => {
      e.removeEventListener("click", playTicTacToe, false);
    });
	reset.classList.remove('hide');
}
}

function newGame() {
	document.querySelector('.wrapper').classList.remove('hide');
	start.classList.add('hide');
}

function restart() {
	count = 0;
  nextPlayer = currentPlayer == "X" ? "O" : "X";
  document.getElementById("result").innerText = nextPlayer + "'s turn";
  box.forEach((e) => {
    e.innerText = null;
    e.addEventListener("click", playTicTacToe);
  });
}
