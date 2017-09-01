
function Squares(bunch) {
  var squares = bunch || [[],[],[],[]];

  return {
    updateSquares: function() {
      squares = _updateSquares(squares);
    },
    pushRandom: function() {
      squares = _pushRandomSquare(squares);
    },
    getSquares: function() {
      return squares;
    },
    pushAtTrack: function(track){
      squares = _pushAtTrack(track,squares);
    }
  };
}

function _pushRandomSquare(squares) {
  var track = _getRandomNumber();
  var square = _createSquareAtTrack(track);

  squares[track].push(square);
  return squares;
}

function _pushAtTrack(track, squares){
  square = _createSquareAtTrack(track);
  squares[track].push(square);

  return squares;
}

function _updateSquares(squares) {
  squares.map(function (track) {
    track.map(function(square) {
        return square.update();
    });
  });
  return _checkSquares(squares);
}

function _checkSquares(squares) {
   squares.map(function (track, i) {
     track.map(function(square, j) {
       if (_isOutOfRange(square)) {
         shadow.setIndexToZero();
         miss++;
         track = _deleteAtIndex(track, j);}
     });
   });
   return squares;
}

function _deleteAtIndex(arr, i) {
  arr.splice(i, 1);
  return arr;
}

function _isOutOfRange(square) {
  var track = square.getTrack();
  var pos = square.getPosition();
  var size = square.getSize();

  return _checkItForTrack(track, pos);
}

function _checkItForTrack(track, position) {
  var currentRadius = blackCircle.getRadius();
  var currentCirclePos = blackCircle.getPosition();
  var squareWidth = currentDimensions.height * WIDTH;
  var positionForCheck;

  switch(track) {
    case TRACK.up:
      positionForCheck = currentCirclePos.y - currentRadius;
      return position.y + squareWidth  > positionForCheck;
    case TRACK.right:
      positionForCheck = currentCirclePos.x + currentRadius;
      return position.x < positionForCheck;
    case TRACK.bottom:
      positionForCheck = currentCirclePos.y + currentRadius;
      return position.y < positionForCheck;
    case TRACK.left:
      positionForCheck = currentCirclePos.x - currentRadius;
      return position.x + squareWidth > positionForCheck;
    default:
      console.log("Invalid track");
  }
}
