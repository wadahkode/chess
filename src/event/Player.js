const slotBoard = () => document.querySelectorAll(".slot");

export const Player = ({ PiecesEvent }) => {
  const { checkPlayer } = PiecesEvent;

  slotBoard().forEach((item) => {
    const pieces = item.querySelector("img");

    if (pieces instanceof HTMLElement) {
      if (checkPlayer.first.name == "white" && checkPlayer.first.play) {
        pieces.addEventListener("dragstart", (event) => {
          PiecesEvent.checkMovePieces["pawn"].slot.white[event.target.id].map(
            (slot) => {
              let s = document.getElementById(slot);
              s.classList.add("active");
              pieces.classList.add("active");

              console.log(s);
            }
          );
        });

        pieces.addEventListener("dragend", (event) => {
          PiecesEvent.checkMovePieces["pawn"].slot.white[event.target.id].map(
            (slot) => {
              let s = document.getElementById(slot);
              s.classList.remove("active");
              pieces.classList.remove("active");
            }
          );
        });
      }
    }
  });
};
