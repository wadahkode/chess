import { PiecesConfig } from "../config/pieces.config";
import piecesSound from "../ui/assets/pieces-sound.wav";

let audioMove = null;

export const allowCaptureMouse = (e) => e.preventDefault();

export const startCaptureMouse = (event, { name, slot }) => {
  const { checkMovePieces } = PiecesConfig;
  const pieces = event.target;

  checkMovePieces[name].slot[slot][pieces.id].map((slot) => {
    let s = document.getElementById(slot);
    s.classList.add("active");
    pieces.classList.add("active");

    event.dataTransfer.setData("id", pieces.id);
  });
};

export const endCaptureMouse = (event, { name, slot }) => {
  const { checkMovePieces } = PiecesConfig;
  const pieces = event.target;

  checkMovePieces[name].slot[slot][pieces.id].map((slot) => {
    let s = document.getElementById(slot);
    s.classList.remove("active");
    pieces.classList.remove("active");
  });
};

export const getCaptureMouse = (event) => {
  const { checkMovePieces } = PiecesConfig;
  const dataId = event.dataTransfer.getData("id");
  const data = document.getElementById(dataId);

  checkMovePieces[data.name].slot[data.dataset.target][dataId].map((slot) => {
    // Terjun bebas dulu
    let status = event.target.appendChild(data);

    if (status instanceof HTMLElement) {
      audioMove = document.createElement("audio");
      audioMove.src = "dist/audio/" + piecesSound;
      audioMove.autoplay = true;
      audioMove.controls = false;

      event.target.appendChild(audioMove);
    }
  });
};
