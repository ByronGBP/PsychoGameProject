var reader;
var recordsRedeables;
var forCheck;
function readText(filePath) {
  reader = new FileReader();
  var output = "";
  if(filePath.files && filePath.files[0]) {
      reader.onload = function (e) {
          output = e.target.result;
          forCheck = e.target.result;
          recordsRedeables = _convertToRedeable(output);
          recordsRedeables = _createObjects(recordsRedeables);
          $(".select").hide();
          playMusic();

      };
      reader.readAsText(filePath.files[0]);
  }
}

function _convertToRedeable(content) {
  var firstSplit = content.split("---------------------------------------\n");
  var secondSplit = [];

  firstSplit.forEach(function(elem) {
    var splited = elem.split("\n");
    secondSplit.push(splited);
  });

  secondSplit.shift();
  return secondSplit;
}

function  _createObjects(content) {
  var newArray = [];
  for(var i = 0; i < content.length; i++){
    var aux = content[i];
    var forPush = [];
    for(var j = 0; j < aux.length; j++){
      var newTime = aux[j].split(" - ");
      var newObject = new Timing(parseFloat(newTime[0]), parseFloat(newTime[1]), i);
      forPush.push(newObject);
    }
    forPush.pop();
    newArray.push(forPush);
  }
  return newArray;
}
