import { PiecesEvent } from "./PiecesEvent";

export const allowCaptureMouse = (e) => {
  e.preventDefault();
};

export const startCaptureMouse = (event, { name, slot }) => {
  const { checkMovePieces } = PiecesEvent;
  const pieces = event.target;

  checkMovePieces[name].slot[slot][pieces.id].map((slot) => {
    let s = document.getElementById(slot);
    s.classList.add("active");
    pieces.classList.add("active");

    event.dataTransfer.setData("id", pieces.id);
  });
};

export const endCaptureMouse = (event, { name, slot }) => {
  const { checkMovePieces } = PiecesEvent;
  const pieces = event.target;

  checkMovePieces[name].slot[slot][pieces.id].map((slot) => {
    let s = document.getElementById(slot);
    s.classList.remove("active");
    pieces.classList.remove("active");
  });
};

export const getCaptureMouse = (event) => {
  const { checkMovePieces } = PiecesEvent;
  const dataId = event.dataTransfer.getData("id");
  const data = document.getElementById(dataId);

  checkMovePieces[data.name].slot[data.dataset.target][dataId].map((slot) => {
    const s = document.getElementById(event.target.id);

    if (
      s.id == "b-1" ||
      s.id == "c-1" ||
      s.id == "d-1" ||
      (s.id == "h-1" && s.childNodes.length < 1)
    ) {
      return false;
    }

    event.target.appendChild(data);
  });
};
