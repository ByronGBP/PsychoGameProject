
function Eye(pos, rad) {
  var position = pos;
  var radius = rad;
  var newPosition;
  var endMovement = true;
  return {
    draw: function() {
      _drawEye(position, radius);
    },
    updatePosition: function(pos) {
      if (endMovement){
        newPosition = pos;
        endMovement = false;
      }
      position = _changePosition(position, newPosition);
      if(_samePostion(position, newPosition)){
        endMovement = true;
      }
    },
    getPosition: function() {
      return position;
    },
    getRadius: function() {
      return radius;
    }
  };
}

function _samePostion(from, to){
    return from.x === to.x && from.y === to.y;
}

function _changePosition(from, to) {
  return _calculateNewPosition(from, to);
}

function _calculateNewPosition(from, to) {
  var fromX = from.x;
  var fromY = from.y;
  var toX = to.x;
  var toY = to.y;

  if (fromX === toX){
    if(fromY > toY){
      return {x: fromX, y: fromY - 1};
    }
    else if (fromY < toY){
      return {x: fromX, y: fromY + 1};
    }
    return from;
  }
  if(fromX > toX){
    if(fromY > toY){
      return {x: fromX - 1, y: fromY - 1};
    }
    else {
      return {x: fromX - 1, y: fromY + 1};
    }
  }
  if(fromX < toX){
    if(fromY > toY){
      return {x: fromX + 1, y: fromY - 1};
    }else{
      return {x: fromX + 1, y: fromY + 1};
    }
  }
}

function _drawEye(pos, radius) {
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, radius, 0, 2 * PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'white';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, radius * 0.5, 0, 2 * PI);
  ctx.fillStyle = "white";
  ctx.fill();
}
