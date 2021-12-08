import { PiecesEvent } from "./event/PiecesEvent";
import { ChessBoard } from "./ui/ChessBoard";
import bgSound from "./ui/assets/bg-music.mp3";
//? this move to ./event/Capture.js
// import piecesSound from "./ui/assets/pieces-sound.wav";
import { Player } from "./event/Player";

/**
 * Chess Javascript
 *
 * Mencoba menantang diri sendiri dalam membuat game dengan javascript.
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 0.0.1
 */
class App {
  constructor() {
    this.chessEvent = {
      PiecesEvent,
    };
    //? this move to ./event/Capture.js
    // this.audio = null;
    // this.audioMove = null;

    this.root = arguments[0] instanceof Object ? arguments[0] : "";
    this.root.className = "container";
  }

  //? this move to ./event/Capture.js
  // allowCaptureMouse(event) {
  //   event.preventDefault();
  // }

  //? this rename and move to ./event/Capture.js
  // componentDidMount() {
  //   const piecesList = this.chessEvent.PiecesEvent.getPieces();

  //   piecesList.forEach((pieces) => {
  //     pieces.ondrop = (event) => this.getCaptureMouse(event, this);
  //     pieces.ondragover = this.allowCaptureMouse;

  //     this.slotAllowed.push(pieces.id);
  //   });
  // }

  //? this move to ./event/Capture.js
  // getCaptureMouse(event, app) {
  //   const piecesEvent = app.chessEvent.PiecesEvent;
  //   const pieces = document.getElementById(event.dataTransfer.getData("id"));

  //   let status = event.target.appendChild(pieces);
  //   if (status instanceof HTMLElement) {
  //     app.audioMove = document.createElement("audio");
  //     app.audioMove.src = "dist/audio/" + piecesSound;
  //     app.audioMove.autoplay = true;
  //     app.audioMove.controls = false;
  //   }
  // }

  setBackgroundSound() {
    const audio = document.createElement("audio");
    audio.src = "dist/audio/" + bgSound;
    //! If you set audio.autoplay = true, background music will play and loop forever. ^(-!-)
    audio.autoplay = false;
    audio.controls = false;
    audio.loop = true;

    return audio;
  }

  stopBackgroundSound(e) {
    if (!e.target.classList.contains("muted")) {
      e.target.classList.add("muted");
      this.audio.src = "";

      e.target.innerHTML = "unmuted";
    } else {
      e.target.classList.remove("muted");
      e.target.innerHTML = "muted";
      this.audio.src = "dist/audio/" + bgSound;
    }
  }

  render() {
    if (this.audio == null) {
      const btnStopAudio = document.createElement("button");
      btnStopAudio.className = "btn-stop-audio";
      btnStopAudio.innerHTML = "muted";

      this.audio = this.setBackgroundSound();

      this.root.appendChild(this.audio);
      this.root.appendChild(btnStopAudio);

      btnStopAudio.onclick = (e) => {
        this.stopBackgroundSound(e);
      };
    }

    this.root.appendChild(ChessBoard());

    return Player(this.chessEvent);
  }
}

export default App;
