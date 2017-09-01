
function Square(x, y, w, h, c, t) {
  var position = {
    x: x,
    y: y,
  };
  var size = {
    width: w,
    height: h
  };
  var color = c;
  var track = t;

  return {
    update: function(gap) {
      position = _update(position, track, gap);
      _draw(position, size, color);
    },
    getPosition: function() {
      return position;
    },
    getSize: function() {
      return size;
    },
    draw: function() {
      _draw(position, size, color);
    },
    getTrack: function() {
      return track;
    },
    changeColor: function(c) {
      color = c;
      _draw(position, size, color);
    },
    getColor: function() {
      return color;
    },
    _updateMock: function(gap) {
      position = _update(position, track, gap);
    },
  };
}

function _draw(position, size, color) {
  ctx.fillStyle = color || ColorsSquare.fill;
  ctx.fillRect(position.x, position.y, size.width, size.height);
  ctx.lineWidth = 1;
  ctx.strokeStyle = ColorsSquare.stroke;
  ctx.strokeRect(position.x, position.y, size.width, size.height);
}

function _update(position, track, gap) {
  var gaap = gap || GAP;
  switch(track) {
    case TRACK.up:
      return {x: position.x, y: position.y + gaap};
    case TRACK.right:
      return {x: position.x - gaap, y: position.y};
    case TRACK.bottom:
      return {x: position.x, y: position.y - gaap};
    case TRACK.left:
      return {x: position.x + gaap, y: position.y};
    default:
      console.log("Invalid track");
  }
}
