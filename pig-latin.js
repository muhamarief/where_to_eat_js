function getPigLatin() {

  //get the word input by the user
  var str = document.getElementById("word").value;


  //your code goes here

  // letters = str.split(' ');
  if (['a','e','i','o','u'].indexOf(str[0]) < 0) {
    var match = /[aeiou]/i.exec(str);
    var vowelIndex = match.index;
    var consonants = str.substr(0,vowelIndex);
    var strLength = str.length;

    pigLatin = str.substr(vowelIndex, (strLength - vowelIndex)) + consonants + "ay";
    str = pigLatin
  }
  else {
    str = str + "way"
  };

  //change the HTML content of a <p> element with id="pig-latin-word":
  document.getElementById("pig-latin-word").innerHTML = str;

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});
