import { endCaptureMouse, startCaptureMouse } from "./Capture";
import { ChessAI } from "./ChessAI";

const slotBoard = () => document.querySelectorAll(".slot");
window.play = { game: false };

export const Player = () => {
  const btnPlay = document.querySelectorAll(".button-play");

  btnPlay.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("ai")) {
        btn.style.background = "green";
        btn.style.color = "white";

        window.play.game = true;
        window.play.move = "com1";
        window.play.firstMove = true;

        return ChessAI(slotBoard());
      }
    });
  });
};

// const playWithAi = () => {
//   if (!window.play.game) return false;

//   slotBoard().forEach((item) => {
//     const pieces = item.querySelector("img");

//     if (pieces instanceof HTMLElement) {
//       pieces.ondragstart = startCaptureMouse;
//       pieces.ondragend = endCaptureMouse;
//     }
//   });
// };
