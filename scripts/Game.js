class Game {
  constructor(config) {
    this.element = config.element;
    this.element.width = 480;
    this.element.height = 720;
    this.ctx = this.element.getContext("2d");

    this.background = null;
    this.animatedBg = null;
    this.enemy = null;
    this.tempEnemy = null;

    this.player = null;
    this.playerFireAnimation = [0, 1, 2, 3];
    this.playerFrame = 0;
    this.MaxFireHoldTime = 2;
    this.FireHoldTime = 10;
    this.playerAssetSize = 24;

    this.counter = 0;
  }
  startGame() {
    // handlelling lower frames
    this.ctx.clearRect(0, 0, this.element.height, this.element.width);
    this.ctx.drawImage(this.background, 0, 0);
    this.ctx.drawImage(this.animatedBg, 10, 10);

    // this.ctx.drawImage(
    //   this.tempEnemy,
    //   this.playerAssetSize * 5,
    //   0,
    //   this.playerAssetSize,
    //   this.playerAssetSize,
    //   100 + this.counter,
    //   100,
    //   this.playerAssetSize * 1.4,
    //   this.playerAssetSize * 1.4,
    // );

    // handlelling upper frames
    this.ctx.drawImage(
      this.player,
      this.playerAssetSize * this.playerFrame,
      0,
      this.playerAssetSize,
      this.playerAssetSize,
      this.element.width / 2 - 12,
      this.element.height - (12 + 40),
      this.playerAssetSize * 1.4,
      this.playerAssetSize * 1.4
    );
    if (this.FireHoldTime < 0) {
      this.FireHoldTime = this.MaxFireHoldTime;
      this.playerFrame = this.playerFrame % 3;
      this.playerFrame += 1;
    }
    this.FireHoldTime -= 1;

    // hanle bg
    // this.ctx.drawImage(this.animatedBg,0,0)
    this.counter++;
    requestAnimationFrame(() => {
      this.startGame();
    });
  }
  init() {
    let player = new Image();
    let tempEnemy = new Image();
    let background = new Image();
    let animatedBg = new Image();

    background.src = "/images/bg/space.jpg";
    player.src = "/images/hero/sprite-ship.png";
    tempEnemy.src = "/images/hero/sprite-ship.png";
    animatedBg.src = "/images/bg/grid.png";
    animatedBg.classList.add("tmp");

    this.player = player;
    this.tempEnemy = tempEnemy;
    this.background = background;
    this.animatedBg = animatedBg;


    console.log("Game started");
    // this.startGame();
  }
}

export default Game;
