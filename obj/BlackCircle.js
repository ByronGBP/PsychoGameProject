
function BlackCircle() {
  var position = _getScreenMiddle();
  var radius = _getRadius();

  var rightEye = _createElipse(1, position, radius);
  var leftEye = _createElipse(0, position, radius);

  return {
    draw: function() {
      position = _getScreenMiddle();
      radius = _getRadius();
      _drawCircle(position, radius);

      var eyes = _updateEyes(leftEye, rightEye);
      leftEye = eyes[0];
      rightEye = eyes[1];
    },
    getPosition: function() {
      return position;
    },
    getRadius: function() {
      return radius;
    }
  };
}

function _updateEyes(l, r) {
  var newPosition = _getNewPosition(l.getRadius());
  var otherPosition;
  if (matchedEyeRandom){
    otherPosition = _getNewPosition(r.getRadius());
  }
  l.updateEye(newPosition);
  r.updateEye(otherPosition || newPosition);

  return [l,r];
}

function _drawCircle(pos, radius) {
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, radius, 0, 2 * PI);
  //color = _randomColor();
  ctx.fillStyle = ColorsCircle.fill;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = ColorsCircle.stroke;
  ctx.stroke();
}

function _randomColor() {
  var random = Math.random();
  if (random > 0.5){
    return "rgba(51,153,255,1)";
  }
  return "rgba(255,0,0,1)";
}

function _getScreenMiddle() {
  return {
    x: currentDimensions.width / 2,
    y: currentDimensions.height / 2,
  };
}

function _getRadius() {
  var minSize = Math.min(currentDimensions.width, currentDimensions.height);
  return minSize * MAX_RADIUS;
}

function _createElipse(right, center, rad){
  var newCenter = _calculateCenterForElipse(right, center, rad);
  var radius = {x: rad * 0.5, y: rad* 0.5 * 0.7};
  if (right){
    return new Ellipse(newCenter, radius);
  }
  return new Ellipse(newCenter, radius);
}

function _calculateCenterForElipse(right, c, r){
  if(right){
    return {x: c.x  + r * 0.36, y: c.y};
  }
  return {x: c.x - r * 0.36, y: c.y};
}
