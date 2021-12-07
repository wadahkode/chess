import { Pieces } from "./pieces";

const pieces = {
  black: [
    "rook",
    "knight",
    "bishop",
    "king",
    "queen",
    "bishop",
    "knight",
    "rook",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
  ],
  white: [
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "rook",
    "knight",
    "bishop",
    "king",
    "queen",
    "bishop",
    "knight",
    "rook",
  ],
};
const board = [];

export const ChessBoard = () => {
  const main = document.createElement("main");
  const frame = getFrameBoard();

  //? Frame
  for (let i = 0; i < 8; i++) {
    i % 2 != 0
      ? setChessBoard("white-slot", "black-slot")
      : setChessBoard("black-slot", "white-slot");
  }

  board.map((className, key) => {
    const slots = document.createElement("div");
    const img = document.createElement("img");
    let name = "";

    slots.className = className;

    if (pieces.black[key]) {
      name = pieces.black[key];
      img.src = Pieces[name] != undefined && Pieces[name][1];

      pieces.white.unshift("", "", "");
    } else if (pieces.white[key]) {
      name = pieces.white[key];

      img.src = Pieces[name] != undefined && Pieces[name][0];
    }

    slots.appendChild(img);
    frame.appendChild(slots);
    main.appendChild(frame);
  });
  //? End Frame

  return main;
};

const setChessBoard = (first, last) => {
  for (let i = 0; i < 8; i++) {
    board.push(i % 2 != 0 ? first : last);
  }

  return board;
};

const getFrameBoard = () => {
  const frame = document.createElement("div");
  frame.className = "chess-board";

  return frame;
};
