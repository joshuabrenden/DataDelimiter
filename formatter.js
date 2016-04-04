function format(){
  var rawData = document.getElementById("rawData").value;
  if(rawData !== ""){
    var words = rawData.split(' ');
    var delimitedWords = words.map(function(a) { return "'" + a + "'"; }).join(", ");
    document.getElementById("formattedData").value = delimitedWords;
  }
}

function clearText(){
  document.getElementById("rawData").value = '';
  document.getElementById("formattedData").value = '';
}
