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
          "g-2": [],
          "g-3": [],
          "g-4": [],
          "g-5": [],
          "g-6": [],
          "g-7": [],
          "g-8": [],
        },
        black: {
          "b-1": [],
          "b-2": [],
          "b-3": [],
          "b-4": [],
          "b-5": [],
          "b-6": [],
          "b-7": [],
          "b-8": [],
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
