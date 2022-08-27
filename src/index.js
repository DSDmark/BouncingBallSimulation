import "./styles.css";

document.getElementById("app").innerHTML = `
<div id="controlar">
<button id="start">Start</button>
<button id="stop">Stop</button>
<input type="number" value="250" id="speed" />
</div>
<div id='bouncElement'></div>
`;

function RandomObjectMover(obj, container) {
  this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = 250;
  this.current_position = { x: 0, y: 0 };
  this.is_running = false;
}

var x = new RandomObjectMover(document.getElementById("bouncElement"), window);

// Controlar stuff :)
// document.getElementById('start').addEventListener('click', function(){
// 	x.start();
// });
// document.getElementById('stop').addEventListener('click', function(){
// 	x.stop();
// });
// document.getElementById('speed').addEventListener('keyup', function(){
//   if (parseInt(this.value) > 3000 ) {
//  		alert('Don\'t be stupid, stupid');
//     this.value = 250;
//   }
// 	x.setSpeed(parseInt(this.value));
// });
