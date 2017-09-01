
function Timing(s, e, t) {
  var start = s || 0;
  var end = e || 0;
  var track = t || null;
  return {
    getParameters: function() {
      return [start, end, track];
    },
    getStart: function() {
      return start;
    },
    getEnd: function() {
      return end;
    },
    getTrack: function(){
      return track;
    }
  };
}
