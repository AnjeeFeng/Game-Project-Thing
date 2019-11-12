
var CONTROLS = {
  sprite : {
    forward : false,
    back : false,
    rotateClockwise : false,
    rotateCounterClockwise : false
  },
  fire : {
    active : false,
    lastFireTime : 0
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.sprite.forward = true;
      break;
    case "ArrowLeft":
      CONTROLS.sprite.rotateCounterClockwise = false;
      break;
    case "ArrowRight":
      CONTROLS.sprite.rotateClockwise = false;
      break;
    case " ":
      CONTROLS.fire.active = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.sprite.forward = false;
      break;
    case "ArrowLeft":
      CONTROLS.sprite.rotateCounterClockwise = false;
      break;
    case "ArrowRight":
      CONTROLS.sprite.rotateClockwise = false;
      break;
    case " ":
      CONTROLS.fire.active = false;
      break;
    default:
      break;
  }
});
