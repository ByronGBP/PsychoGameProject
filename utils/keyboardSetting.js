
function setupKeyboard() {
  $(document).on("keydown", function(e) {
    if (e.which === KEYBOARD_CODE.arrowLeft) {
      e.preventDefault();

      _highligthSquare(KEYBOARD_CODE.arrowLeft);
      _checkHits(KEYBOARD_CODE.arrowLeft);
    }

    else if (e.which === KEYBOARD_CODE.arrowUp) {
      e.preventDefault();

      _highligthSquare(KEYBOARD_CODE.arrowUp);
      _checkHits(KEYBOARD_CODE.arrowUp);
    }

    else if (e.which === KEYBOARD_CODE.arrowRight) {
      e.preventDefault();

      _highligthSquare(KEYBOARD_CODE.arrowRight);
      _checkHits(KEYBOARD_CODE.arrowRight);
    }
    else if (e.which === KEYBOARD_CODE.arrowBottom) {
      e.preventDefault();

      _highligthSquare(KEYBOARD_CODE.arrowBottom);
      _checkHits(KEYBOARD_CODE.arrowBottom);
    }
  });
  //TODO: refactor!
  setupKeyboard2();
}

function setupKeyboard2() {
  $(document).on("keyup", function(e) {
      if (e.which === KEYBOARD_CODE.arrowLeft) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowLeft);
      }

      else if (e.which === KEYBOARD_CODE.arrowUp) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowUp);
      }

      else if (e.which === KEYBOARD_CODE.arrowRight) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowRight);
      }
      else if (e.which === KEYBOARD_CODE.arrowBottom) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowBottom);
      }
  });
}

function _highligthSquare(key) {
    var track = _getTrack(key);
    squaresForHit.getSquares()[track].changeColor(ColorsSquareForHit.fillHighLight);
}

function _stopHighlightSquare(key) {
    var track = _getTrack(key);
    squaresForHit.getSquares()[track].changeColor(ColorsSquareForHit.fillNoHighlight);
}
