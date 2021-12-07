export const PiecesEvent = {
  first: {
    name: "pawn",
    range: 2,
    slot: {
      white: ["g-1", "g-2", "g-3", "g-4", "g-5", "g-6", "g-7", "g-8"],
      black: ["b-1", "b-2", "b-3", "b-4", "b-5", "b-6", "b-7", "b-8"],
    },
    play: {
      white: true,
      black: false,
    },
  },
  checkMate: {
    white: false,
    black: false,
  },

  checkWin: {
    white: false,
    black: false,
  },
  getPieces() {
    const slots = document.querySelectorAll(".slot")

    slots.forEach(item => {
      let img = item.querySelector("img")

      if (img instanceof HTMLElement) {
        img.ondragstart = event => {
          event.dataTransfer.setData("id", event.target.id)
        }
      }
    })

    return slots;
  }
};
