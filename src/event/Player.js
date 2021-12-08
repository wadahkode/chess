import {
  allowCaptureMouse,
  endCaptureMouse,
  getCaptureMouse,
  startCaptureMouse,
} from "./Capture";

const slotBoard = () => document.querySelectorAll(".slot");

export const Player = ({ PiecesEvent }) => {
  const { checkPlayer } = PiecesEvent;
  const config = {};

  slotBoard().forEach((item) => {
    const pieces = item.querySelector("img");

    if (pieces instanceof HTMLElement) {
      if (checkPlayer.first.name == "white" && checkPlayer.first.play) {
        config["firstMove"] = checkPlayer.first.play;
        config["name"] = "pawn";
        config["slot"] = "white";

        pieces.addEventListener("dragstart", (event) =>
          startCaptureMouse(event, config)
        );

        pieces.addEventListener("dragend", (event) =>
          endCaptureMouse(event, config)
        );
      }
    }
  });
};
