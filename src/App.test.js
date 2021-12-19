import backgroundGame from "./ui/assets/images/illustration-human-hobbies-activities/28434.jpg";
import { ChessBoard } from "./ui/ChessBoard";
import Game from "./event/Game";

class App {
  constructor(props) {
    this.chessboard = ChessBoard();
    this.game = new Game();
  }

  render() {
    for (const name in styled) {
      document.body.style[name] = styled[name];
    }

    return /*html*/ `
      <div class="container">
        <div class="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 p-4 h-full">
          <div class="history-play">
            <div class="settings">
              <button class="btn-exit-game">Kembali</button>
              <div id="audio-container"></div>
            </div>

            <div class="pieces-removed"></div>
          </div>
          <div class="chess">
            <div class="player-1">
              <div>
                <time>00:00</time>
              </div>
              <div class="score">
                <div>computer</div>
                <b>score: 0</b>
              </div>
            </div>
            <div>
              <div id="chess-main"></div>
            </div>
            <div class="player-2">
              <div>
                <time>00:00</time>
              </div>
              <div class="score">
                <div class="username"></div>
                <b>score: 0</b>
              </div>
            </div>
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
                <button onClick="startWithAI" class="btn btn-play-game">Play with computer</button>
                <button onClick="startWithPlayer" class="btn btn-play-game">Play with friend</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  startWithAI() {
    const btnExitGame = document.querySelector(".btn-exit-game");
    const chess = document.querySelector(".chess");
    const chessMain = document.getElementById("chess-main");
    const chessInfo = document.querySelector(".chess-info");
    const yourname = document.getElementById("yourname");
    const username = document.querySelector(".username");
    const audio = document.getElementById("audio-container");
    const settings = document.querySelector(".settings");

    chess.style.animation = "bottomToUp";
    chess.style.animationDuration = ".30s";
    chess.style.position = "relative";
    chess.style.bottom = 0;

    chessInfo.style.animation = "toRight";
    chessInfo.style.animationDuration = ".30s";
    chessInfo.style.display = "none";
    chessMain.style.display = "block";
    settings.style.display = "flex";

    username.innerHTML = yourname.value == "" ? "John Smack" : yourname.value;

    chessMain.appendChild(this.chessboard);
    audio.appendChild(this.game.getBackgroundSound());

    btnExitGame.addEventListener("click", () => {
      chess.removeAttribute("style");
      chessInfo.removeAttribute("style");
      chessMain.removeAttribute("style");
      settings.removeAttribute("style");

      chessMain.innerHTML = "";
    });

    return this.game.startWithAI();
  }

  startWithPlayer(event) {
    console.log(event);
  }
}

const styled = {
  backgroundImage: "url(" + backgroundGame + ")",
  backgroundPosition: "center",
  backgroundSize: "75%",
  backgroundRepeat: "no-repeat",
};

export default App;
