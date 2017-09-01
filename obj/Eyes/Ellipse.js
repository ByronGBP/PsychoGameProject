
function Ellipse(c, r, rot, s, e) {
  var center = c ;
  var radius = r ;
  var rotation = rot || 90 * Math.PI/180;
  var startAngle = 0;
  var endAngle = 2 * Math.PI;

  var eye = _createEye(center, radius.y);

  return{
    draw: function() {
      _drawEllipse(center, radius, rotation, startAngle, endAngle);
      eye.draw();
    },
    getCenter: function() {
      return center;
    },
    getRadius: function() {
      return radius;
    },
    updateEye: function(to) {
      var newPosition = _getPosition(center, radius, to);
      eye.updatePosition(newPosition);
      eye.draw();
      _drawEllipse(center, radius, rotation, startAngle, endAngle);
    },
    setCenter: function(newCenter) {
      center = newCenter;
    }
  };
}

function _getPosition(c, r, to) {
    var centerChanged = _changeCenter(c,r);
    var newX = to.x + centerChanged.x;
    var newY = to.y + centerChanged.y;

    return {x: newX, y: newY};
}


function _getNewPosition(r){
  var rangeXmax = r.y;
  var rangeYmax = r.x;

  var randomX = Math.floor((Math.random() * rangeXmax));
  var randomY = Math.floor((Math.random() * rangeYmax));

  return {x: randomX, y: randomY};
}

function _changeCenter(c, r) {
  return {x: Math.floor(c.x - r.y * 0.54), y: Math.floor(c.y - r.x * 0.54)};
}

function _createEye(c, r) {
  var newC = _floorCenter(c);
  return new Eye(newC, r * 0.35);
}

function _floorCenter(c){
  return {x: Math.floor(c.x), y: Math.floor(c.y)};
}

function _drawEllipse(c, r, rot, s, e) {
  ctx.beginPath();
  ctx.ellipse(c.x, c.y, r.x, r.y,rot , s, e);
  ctx.lineWidth = 2;
  ctx.strokeStyle = ColorsEye.strokeOut;
  ctx.stroke();
}
