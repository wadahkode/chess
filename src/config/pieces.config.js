/**
 * Pieces Event
 *
 * Kumpulan beberapa event dari bidak catur saat mengalami event drag, bisa dibilang ini hanya konfigurasi
 * dari beberapa event yang akan diterapkan, seperti :
 *
 * - Siapa player yang akan bermain pertama kali
 * - Slot mana yang dapat menerima pemindahan bidak sesuai bidak itu sendiri, misal :
 *
 *    + pion putih nomor 1 saat bermain pertama kali, pion hanya boleh dipindahkan ke slot [f-1] atau [e-1]
 *    + etc
 *
 * - Cek pemenang dari player
 * - Cek skatmat
 * - and anymore,
 * - f**k i'm lier
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 0.0.1
 */
export const PiecesConfig = {
  checkMovePieces: {
    pawn: {
      slot: {
        white: {
          "g-1": ["e1", "f1"],
          "g-2": ["e2", "f2"],
          "g-3": ["e3", "f3"],
          "g-4": ["e4", "f4"],
          "g-5": ["e5", "f5"],
          "g-6": ["e6", "f6"],
          "g-7": ["e7", "f7"],
          "g-8": ["e8", "f8"],
        },
        black: {
          "b-1": ["c1", "d1"],
          "b-2": ["c2", "d2"],
          "b-3": ["c3", "d3"],
          "b-4": ["c4", "d4"],
          "b-5": ["c5", "d5"],
          "b-6": ["c6", "d6"],
          "b-7": ["c7", "d7"],
          "b-8": ["c8", "d8"],
        },
      },
    },
    rook: {
      slot: {
        white: {
          "h-1": ["d1", "e1", "f1", "g1", "h1"],
          "h-2": ["d2", "e2", "f2", "g2", "h2"],
          "h-3": ["d3", "e3", "f3", "g3", "h3"],
          "h-4": ["d4", "e4", "f4", "g4", "h4"],
          "h-5": ["d5", "e5", "f5", "g5", "h5"],
          "h-6": ["d6", "e6", "f6", "g6", "h6"],
          "h-7": ["d7", "e7", "f7", "g7", "h7"],
          "h-8": ["d8", "e8", "f8", "g8", "h8"],
        },
        black: {
          "a-1": ["a1", "c1", "d1"],
          "a-2": ["a2", "c2", "d2"],
          "a-3": ["a3", "c3", "d3"],
          "a-4": ["a4", "c4", "d4"],
          "a-5": ["a5", "c5", "d5"],
          "a-6": ["a6", "c6", "d6"],
          "a-7": ["a7", "c7", "d7"],
          "a-8": ["a8", "c8", "d8"],
        },
      },
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
  checkPlayer: {
    first: {
      name: "white",
      play: true,
    },
    last: {
      name: "black",
      play: false,
    },
  },
  pieces: {
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
  },
};
