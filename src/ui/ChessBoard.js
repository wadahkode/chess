import { boardConfig } from "../config/board.config";
import { PiecesConfig } from "../config/pieces.config";
import { Pieces } from "./pieces";

//? @suggest dicha
const BOARD_SIZE = boardConfig.maxSize;
const board = [];
const columns = boardConfig.objColumn;
const pieces = PiecesConfig.pieces;
const slotBoard = boardConfig.slotName;

export const ChessBoard = () => {
  const main = document.createElement("main");

  //? @code from Om Jason Wihardja
  for (let i = 0; i < BOARD_SIZE; i += 2) {
    setChessBoard(...slotBoard);
    setChessBoard(...[...slotBoard].reverse());
  }

  main.appendChild(getFrameBoard());

  return main;
};

/**
 * Setter color for slot
 *
 * @param {*} head
 * @param {*} tail
 * @code from Om Jason Wihardja
 */
const setChessBoard = (head, tail) => {
  for (let i = 0; i < BOARD_SIZE; i += 2) {
    board.push(head, tail);
  }
};

const getFrameBoard = () => {
  const frame = document.createElement("div");
  const slotId = [];
  let img = undefined;
  let name = "";

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      slotId.push(columns[i] + ((j % BOARD_SIZE) + 1));
    }
  }

  board.map((className, key) => {
    const slots = document.createElement("div");

    if (key < 1 || key < 16) {
      name = pieces.black[key];
      slots.innerHTML = Pieces[name][1];
    } else {
      if (key >= 48) {
        name = pieces.white[key - 48];
        slots.innerHTML = Pieces[name][0];
      }
    }

    // Slot id and className
    slots.id = slotId[key];
    slots.className = className;

    // Image id
    img = slots.querySelector("img");
    if (img instanceof HTMLElement) {
      let s = slotId[key].match(/\d+/);
      img.id = slotId[key].replace(/\d+/, "-" + s[0]);
    }

    frame.appendChild(slots);

    // Add event captureMouse
    // slots.addEventListener("drop", getCaptureMouse);
    // slots.addEventListener("dragover", allowCaptureMouse);
  });

  frame.className = "chess-board";

  return frame;
};
