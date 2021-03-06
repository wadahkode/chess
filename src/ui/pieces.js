import pawnWhite from "./assets/pieces/pawn-white.png";
import pawnBlack from "./assets/pieces/pawn-black.png";
import knightWhite from "./assets/pieces/knight-white.png";
import knightBlack from "./assets/pieces/knight-black.png";
import bishopWhite from "./assets/pieces/bishop-white.png";
import bishopBlack from "./assets/pieces/bishop-black.png";
import queenWhite from "./assets/pieces/queen-white.png";
import queenBlack from "./assets/pieces/queen-black.png";
import kingWhite from "./assets/pieces/king-white.png";
import kingBlack from "./assets/pieces/king-black.png";
import rookWhite from "./assets/pieces/rook-white.png";
import rookBlack from "./assets/pieces/rook-black.png";

export const Pieces = {
  pawn: [
    `<img name="pawn" data-target="white" src="${pawnWhite}" />`,
    `<img name="pawn" data-target="black" src="${pawnBlack}" />`,
  ],
  knight: [
    `<img name="knight" data-target="white" src="${knightWhite}" />`,
    `<img name="knight" data-target="black" src="${knightBlack}" />`,
  ],
  bishop: [
    `<img name="bishop" data-target="white" src="${bishopWhite}" />`,
    `<img name="bishop" data-target="black" src="${bishopBlack}" />`,
  ],
  queen: [
    `<img name="queen" data-target="white" src="${queenWhite}" />`,
    `<img name="queen" data-target="black" src="${queenBlack}" />`,
  ],
  king: [
    `<img name="king" data-target="white" src="${kingWhite}" />`,
    `<img name="king" data-target="black" src="${kingBlack}" />`,
  ],
  rook: [
    `<img name="rook" data-target="white" src="${rookWhite}" />`,
    `<img name="rook" data-target="black" src="${rookBlack}" />`,
  ],
};
