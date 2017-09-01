
var colorShadow = [
  "rgba(0,0,0,1)",
  "rgba(0, 0, 51,1)",
  "rgba(0, 25, 51, 1)",
  "rgba(0, 51, 102, 1)",
  "rgba(0, 76, 153, 1)",
  "rgba(0, 102, 204, 1)",
  "rgba(0,128,255,1)",
  "rgba(51,153,255,1)",
  "rgba(102,178,255,1)",
  "rgba(153,204,255,1)",
  "rgba(204,229,255,1)",
  "rgba(255,255,255,1)",
];

var maxColor = colorShadow.length;

function ShadowIncreise() {
  var index = 0;

  return {
    increase: function() {
      index = _increiseShadow(index);
    },
    setIndexToZero: function() {
      index = 0;
      ctx.shadowBlur = 0;
      ctx.shadowColor = null;
    }
  };
}

function _increiseShadow(i, n) {
  if (i < maxColor){
    ctx.shadowBlur = 20;
    ctx.shadowColor=colorShadow[i];
    i++;
  }

  return i;
}
