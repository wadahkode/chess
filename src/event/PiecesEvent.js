export const PiecesEvent = {
  first: {
    name: "pown",
    range: 2,
    slot: {
      white: ["g-1", "g-2", "g-3", "g-4", "g-5", "g-6", "g-7", "g-8"],
      black: ["b-1", "b-2", "b-3", "b-4", "b-5", "b-6", "b-7", "b-8"],
    },
    white: true,
    black: false,
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
};
