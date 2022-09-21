const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const pattern = document.getElementById("pattern");

const CH = (canvas.height = 400);
const CW = (canvas.width = 400);

canvas.style.borderLeft = "5px solid black";
canvas.style.borderRight = "5px solid black";
canvas.style.borderTop = "5px solid white";
canvas.style.borderBottom = "5px solid white";

let showBallPath = false;

function showPath() {
  showBallPath = !showBallPath;
}

pattern.addEventListener("onclick", showPath);

const bounceBall = {
  speed: 5,
  velocity_x: 2,
  velocity_y: 2,
  radius: 10,
  color: "white",
  angle: 30, //! BY DEFAULT COMPUTER CONSIDER ANGLE IN RADIUS . THATAWAY -30.
  position: {
    x: CW / 2,
    y: CH / 2,
  },

  draw() {
    showBallPath ? "" : ctx.clearRect(0, 0, CH, CW); // ?FOR CLEAR PERVIOUS CANVAS
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  },
  update() {
  debugger;
    if (
      this.position.x + this.radius > CW ||
      this.position.x - this.radius < 0
    ) {
       this.angle = 180 - this.angle;
      this.color = "black";
   
    }
    if (
      this.position.y + this.radius > CH ||
      this.position.y - this.radius < 0
    ) {
      this.angle = 360 - this.angle;


      this.color = "white";
    }

    this.velocity_x = Math.cos(this.angle * (Math.PI / 180)) * this.speed;
    this.velocity_y = Math.sin(this.angle * (Math.PI / 180)) * this.speed;
   console.log(this.velocity_y,this.velocity_x);
    this.position.x += this.velocity_x;
    this.position.y += this.velocity_y;
  },
};

function render() {
  bounceBall.draw();
  bounceBall.update();
}

function gameLoop() {
  render();

  window.requestAnimationFrame(gameLoop);
}
 window.requestAnimationFrame(gameLoop);

//? YOUR CAN USE SETINTERVAL FUNCTION AS WELL BUT REQUESTANIMATIONFRAME HAS OWN ADVANTAGES
// setInterval(() => {
//   gameLoop();ho
// }, 1000 / 60);
