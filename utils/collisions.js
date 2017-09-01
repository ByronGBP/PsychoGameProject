function _checkHits(key){
  var track = _getTrack(key);
  var squars = squaresAnimated.getSquares()[track];
  var squareToCollision = squaresForHit.getSquares()[track];
  var hits = false;
  squars.every(function(square, index) {
    if (_collision(squareToCollision, square, track)) {
      console.log("Colision at " + track +"!");
      shadow.increase();
      squars = _deleteAtIndex(squars, index);
      hits = true;
      return false;
    }
    else {
      return true;
    }
  });

  if (!hits){
    miss++;
    shadow.setIndexToZero();
 }}

function _getTrack(key) {
  switch(key) {
    case KEYBOARD_CODE.arrowLeft:
      return 3;
    case KEYBOARD_CODE.arrowUp:
      return 0;
    case KEYBOARD_CODE.arrowRight:
      return 1;
    case KEYBOARD_CODE.arrowBottom:
      return 2;
    default:
      console.log("Invalid key");
  }
}

function _collision(obj1, obj2, track) {
  switch(track) {
    case TRACK.up:
      return _checkColistionUp(obj1, obj2);
    case TRACK.right:
      return _checkColistionRight(obj1, obj2);
    case TRACK.bottom:
      return _checkColistionBottom(obj1, obj2);
    case TRACK.left:
      return _checkColistionLeft(obj1, obj2);
    default:
      console.log("Invalid track");
  }
}

function _checkColistionUp(staticObj, commingObj) {
  var squareWidth = commingObj.getSize().width;
  var pointToCheckBottom = commingObj.getPosition().y + squareWidth;
  var pointToCheckUp = commingObj.getPosition().y;
  var pointStatic = staticObj.getPosition().y;

  if ((pointToCheckBottom >= pointStatic &&
      pointToCheckBottom  <= pointStatic + squareWidth) ||
      pointToCheckUp >= pointStatic &&
      pointToCheckUp <= pointStatic + squareWidth) {
    return true;
  }
  return false;
}

function _checkColistionRight(staticObj, commingObj) {
  var squareWidth = commingObj.getSize().width;
  var pointToCheckLeft = commingObj.getPosition().x;
  var pointToCheckRigth = commingObj.getPosition().x + squareWidth;
  var pointStatic = staticObj.getPosition().x;

  if ((pointToCheckLeft <= (pointStatic + squareWidth) &&
      pointToCheckLeft  >= pointStatic) ||
      pointToCheckRigth <= pointStatic + squareWidth &&
      pointToCheckRigth >= pointStatic) {
    return true;
  }
  return false;
}

function _checkColistionBottom(staticObj, commingObj) {
  var squareWidth = commingObj.getSize().width;
  var pointToCheckBottom = commingObj.getPosition().y + squareWidth;
  var pointToCheckUp = commingObj.getPosition().y;
  var pointStatic = staticObj.getPosition().y;

  if ((pointToCheckUp <= pointStatic + squareWidth &&
      pointToCheckUp >= pointStatic) ||
      pointToCheckBottom <= pointStatic + squareWidth &&
      pointToCheckBottom >= pointStatic) {
    return true;
  }
  return false;
}

function _checkColistionLeft(staticObj, commingObj) {
  var squareWidth = commingObj.getSize().width;
  var pointToCheckLeft = commingObj.getPosition().x;
  var pointToCheckRigth = commingObj.getPosition().x + squareWidth;
  var pointStatic = staticObj.getPosition().x;

  if ((pointToCheckRigth >= (pointStatic) &&
      pointToCheckRigth  <= pointStatic  + squareWidth) ||
      pointToCheckLeft >= pointStatic &&
      pointToCheckLeft <= pointStatic  + squareWidth) {
    return true;
  }
  return false;
}
