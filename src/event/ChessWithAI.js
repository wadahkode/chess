let PLAYER_REG = /(^[g-h]+\d)/;
let COMPUTER_REG = /(^[a-b]+\d)/;
let playerInGame = {
  b: [],
  w: [],
};
let slotEmpty = [];
let turn = "w";
let current = null;
let rev = {
  "g-4": {
    target: "b-4",
    move: 2,
  },
  "g-5": {
    target: "b-8",
    move: 1,
  },
  "g-1": {
    target: "a-2",
    initial: "n",
    move: 2,
  },
};
let fps = 30;
let x = 60;
let y = 60;
let first = true;

export default function ChessWithAI(config) {
  config.board.forEach((slot) => setPlayer(slot));

  const game = setInterval(() => {
    if (turn == "w") {
      playerInGame.w.map((slot) => {
        slot.addEventListener("dragstart", (event) => startCapture(event));
      });
    } else if (turn == "b") {
      playerInGame.b.map((slot) => {
        slot.addEventListener("click", (event) => {
          // clearInterval(game);
          let pieces = document.getElementById(rev[current.id].target);

          setTimeout(() => {
            if (first) {
              pieces.style.transform =
                "translate(0," + y * rev[current.id].move + "px)";
              first = false;
            } else if (rev[current.id].initial == "n") {
              pieces.style.transform = `translate(${x}px, ${
                y * rev[current.id].move
              }px)`;
            } else {
              pieces.style.transform = `translate(0, ${
                y * rev[current.id].move
              }px)`;
            }

            turn = "w";
          }, fps * 60);
        });
        slot.click();
      });
    }
  }, fps);

  slotEmpty.forEach((slot) => {
    slot.addEventListener("dragstart", (event) => startCapture(event));
    slot.addEventListener("dragover", (event) => allowCapture(event));
    slot.addEventListener("drop", (event) => getCapture(event));
  });
}

const allowCapture = (event) => event.preventDefault();
const getCapture = (event) => {
  const id = event.dataTransfer.getData("id");
  const data = document.getElementById(id);

  if (turn == "w") {
    event.target.appendChild(data);

    turn = "b";
    current = data;
  }
};

const startCapture = (event) => {
  event.dataTransfer.setData("id", event.target.id);
};

const setPlayer = (slot) => {
  if (slot.id.match(PLAYER_REG)) {
    playerInGame.w.push(slot);
  } else if (slot.id.match(COMPUTER_REG)) {
    playerInGame.b.push(slot);
  } else {
    slotEmpty.push(slot);
  }
};
