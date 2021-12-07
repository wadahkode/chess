import { PiecesEvent } from "./event/PiecesEvent";
import { ChessBoard } from "./ui/ChessBoard";
import bgSound from "./ui/assets/bg-music.mp3";

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
    this.audio = null;

    this.root = arguments[0] instanceof Object ? arguments[0] : "";
    this.root.className = "container";
  }

  setBackgroundSound() {
    const audio = document.createElement("audio");
    audio.src = "dist/audio/" + bgSound;
    audio.autoplay = true;
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
  }
}

export default App;