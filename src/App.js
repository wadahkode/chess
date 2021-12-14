import { ChessBoard } from "./ui/ChessBoard";
// import { Player } from "./event/Player";
// import { PiecesConfig } from "./config/pieces.config";
// import bgSound from "./ui/assets/audio/bg-music.mp3";
// import Game from "./event/Game";
import backgroundGame from "./ui/assets/images/illustration-human-hobbies-activities/28434.jpg";
import Game from "./event/Game";

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
    this.root = arguments[0] instanceof HTMLElement ? arguments[0] : "";
  }

  render() {
    for (const name in style) {
      document.body.style[name] = style[name];
    }

    this.root.innerHTML = `
      <div></div>
      <div>
        <div class="chess-body">
          <div>
            <h1>Score</h1>
            <div>
              <b class="username"></b>&nbsp;
              <button class="btn-exit-game">Kembali</button>
            </div>
          </div>
          <hr/>
          <ul>
            <li>White: <b>0</b></li>
            <li>Black: <b>0</b></li>
          </ul>
        </div>
        <div id="chess-main"></div>
      </div>
      <div class="chess-info">
        <div class="header">
          <h1>Chess</h1>
          <p>Hilangkan jenuhmu buatlah tambah pusing dengan bermain catur.</p>
        </div>

        <div class="footer">
          <div>
            <input type="text" id="yourname" placeholder="input your name"/>
          </div>
          <div class="button-list">
            <button class="btn-play-game" data-target="with-ai">Play with computer</button>
            <button class="btn-play-game" data-target="with-friend">Play with friend</button>
          </div>
          <div id="audio-container"></div>
        </div>
      </div>
    `;
    // this.root.appendChild(ChessBoard());

    const btnPlayGame = document.querySelectorAll(".btn-play-game");
    const btnExitGame = document.querySelector(".btn-exit-game");
    const chess = document.querySelector(".chess-body");
    const chessInfo = document.querySelector(".chess-info");
    const chessMain = document.getElementById("chess-main");
    const yourname = document.getElementById("yourname");
    const username = document.querySelector(".username");
    const audio = document.getElementById("audio-container");

    chessMain.appendChild(ChessBoard());

    const game = new Game(yourname.value);
    audio.appendChild(game.getBackgroundSound());

    btnPlayGame.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const playType = event.target.dataset.target;

        switch (playType) {
          case "with-ai":
            chess.style.animation = "bottomToUp";
            chess.style.animationDuration = ".30s";
            chess.style.position = "relative";
            chess.style.bottom = 0;

            chessInfo.style.animation = "toRight";
            chessInfo.style.animationDuration = ".30s";
            chessInfo.style.display = "none";
            chessMain.style.display = "block";

            username.innerHTML =
              yourname.value == "" ? "John Smack" : yourname.value;

            return game.startWithAI();

          case "with-friend":
            alert("with-friend");
            break;
        }
      });
    });

    btnExitGame.addEventListener("click", () => {
      let status = confirm("Apakah anda yakin?");

      if (status) {
        chess.style.position = "absolute";
        chess.style.bottom = "-100vh";
        chessInfo.style.display = "flex";
        chessMain.style.display = "none";
      }
    });
  }
}

const style = {
  backgroundImage: "url(" + backgroundGame + ")",
  backgroundPosition: "center",
  backgroundSize: "75%",
  backgroundRepeat: "no-repeat",
};

export default App;
