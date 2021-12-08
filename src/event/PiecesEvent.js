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
export const PiecesEvent = {
  checkMovePieces: {
    pawn: {
      slot: {
        white: {
          "g-1": ["e-1", "f-1"],
          "g-2": ["e-2", "f-2"],
          "g-3": ["e-3", "f-3"],
          "g-4": ["e-4", "f-4"],
          "g-5": ["e-5", "f-5"],
          "g-6": ["e-6", "f-6"],
          "g-7": ["e-7", "f-7"],
          "g-8": ["e-8", "f-8"],
          "h-1": ["h-1"],
          "h-2": ["h-2"],
          "h-3": ["h-3"],
          "h-4": ["h-4"],
          "h-5": ["h-5"],
          "h-6": ["h-6"],
          "h-7": ["h-7"],
          "h-8": ["h-8"],
        },
        black: {
          "b-1": ["c-1", "d-1"],
          "b-2": ["c-2", "d-2"],
          "b-3": ["c-3", "d-3"],
          "b-4": ["c-4", "d-4"],
          "b-5": ["c-5", "d-5"],
          "b-6": ["c-6", "d-6"],
          "b-7": ["c-7", "d-7"],
          "b-8": ["c-8", "d-8"],
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
  //! this not used again.
  // getPieces() {
  //   const slots = document.querySelectorAll(".slot");

  //   slots.forEach((item) => {
  //     let img = item.querySelector("img");

  //     if (img instanceof HTMLElement) {
  //       img.ondragstart = (event) => {
  //         event.dataTransfer.setData("id", event.target.id);
  //       };
  //     }
  //   });

  //   return slots;
  // },
};
