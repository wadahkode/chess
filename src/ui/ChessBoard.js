import { allowCaptureMouse, getCaptureMouse } from "../event/Capture";
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
    if (i % 2 != 0) {
      setChessBoard("black-slot slot black", "white-slot slot white");
    } else {
      setChessBoard("white-slot slot white", "black-slot slot black");
    }
  }

  const abjad = ["a", "b", "c", "d", "e", "f", "g", "h"];

  board.map((className, key) => {
    const slots = document.createElement("div");
    slots.id =
      key >= 16 && key < 24
        ? abjad[2] + "-" + ((key % 8) + 1)
        : key >= 24 && key < 32
        ? abjad[3] + "-" + ((key % 8) + 1)
        : key >= 32 && key < 40
        ? abjad[4] + "-" + ((key % 8) + 1)
        : key >= 40 && key < 48
        ? abjad[5] + "-" + ((key % 8) + 1)
        : "";
    slots.className = className;
    let name = "";

    if (pieces.black[key]) {
      name = pieces.black[key];
      slots.innerHTML = Pieces[name] != undefined && Pieces[name][1];
      pieces.white.unshift("", "", "");
    } else if (pieces.white[key]) {
      name = pieces.white[key];
      slots.innerHTML = Pieces[name] != undefined && Pieces[name][0];
    }

    let img = slots.querySelector("img");

    if (img instanceof HTMLElement) {
      img.id =
        key < 1 || key < 8
          ? abjad[0] + "-" + ((key % 8) + 1)
          : key < 9 || key < 16
          ? abjad[1] + "-" + ((key % 8) + 1)
          : key < 48 || key < 56
          ? abjad[6] + "-" + ((key % 8) + 1)
          : abjad[7] + "-" + ((key % 8) + 1);

      img.draggable = true;
    }

    frame.appendChild(slots);

    slots.addEventListener("drop", getCaptureMouse);
    slots.addEventListener("dragover", allowCaptureMouse);

    main.appendChild(frame);
  });
  //? End Frame

  return main;
};

const setChessBoard = (first = "", last = "") => {
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
