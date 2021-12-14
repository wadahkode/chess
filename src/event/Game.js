import bgSound from "../ui/assets/audio/bg-music.mp3";
import ChessWithAI from "./ChessWithAI";

class Game {
  constructor(name = "") {
    this.audio = null;
    this.board = document.querySelectorAll(".slot");
    this.name = name;
  }

  getBackgroundSound() {
    const btnStopAudio = document.createElement("button");

    if (this.audio == null) {
      btnStopAudio.className = "btn-stop-audio";
      btnStopAudio.innerHTML = "muted";

      this.audio = this.setBackgroundSound();
      btnStopAudio.appendChild(this.audio);

      btnStopAudio.onclick = (e) => {
        this.stopBackgroundSound(e);
      };
    }

    return btnStopAudio;
  }

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

  startWithAI() {
    this.getBackgroundSound();

    return new ChessWithAI({ board: this.board });
  }
}

export default Game;
