var buttons = document.getElementById("qrBtn");
    buttons.innerHTML = '<img src="wholeweekapp/images/qrWWA.png" />';

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
//btn.onclick = function() {
  //modal.style.display = "block";
//}

function startQR() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var qrcode = new QRCode("qrcode");

function makeRecipeCode () {
  var elText = document.getElementById("text");

  var qrCodeView = document.getElementById("qrcode");

  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    qrCodeView.style.display = "none";
    return;
  }

  qrCodeView.style.display = "block";

  qrcode.makeCode(elText.value);
}

var qrcode2 = new QRCode("qrcode2");

function makeIngredientsCode () {

  var wholeCode = ""

  var ingredient1 = document.getElementById("ingredient1");
  var ingredient1Value = document.getElementById("ingredient1Value");
  var ingredient2 = document.getElementById("ingredient2");
  var ingredient2Value = document.getElementById("ingredient2Value");
  var ingredient3 = document.getElementById("ingredient3");
  var ingredient3Value = document.getElementById("ingredient3Value");
  var ingredient4 = document.getElementById("ingredient4");
  var ingredient4Value = document.getElementById("ingredient4Value");
  var ingredient5 = document.getElementById("ingredient5");
  var ingredient5Value = document.getElementById("ingredient5Value");

    if (ingredient1.value) {
      wholeCode += ingredient1.value;
      wholeCode += "#%*%#";
      if (ingredient1Value.value > 0) {
        wholeCode += ingredient1Value.value;
      } else {
        wholeCode += "1"
      }
    } else {
      wholeCode += "Empty#%*%#1"
    }

    wholeCode += ingredientsInputs(ingredient2, ingredient2Value.value);
    wholeCode += ingredientsInputs(ingredient3, ingredient3Value.value);
    wholeCode += ingredientsInputs(ingredient4, ingredient4Value.value);
    wholeCode += ingredientsInputs(ingredient5, ingredient5Value.value);

  var qrCodeView2 = document.getElementById("qrcode2");

  if (wholeCode == "") {
    alert("Input a text");
    ingredient1.focus();
    qrCodeView2.style.display = "none";
    return;
  }

  var qrCode = "_^&&^_"
  qrCode += wholeCode

  qrCodeView2.style.display = "block";
  qrcode2.makeCode(qrCode);
}

function ingredientsInputs (ingredient, value) {

  var code = "";
  if (ingredient.value) {
    code += "!?+?!-!"
    code += ingredient.value;
    code += "#%*%#";
    if (value > 0) {
      code += value;
    } else {
      code += "1"
    }

  }

  return code;
}

(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  };
}(jQuery));

  $("#ingredient1Value").inputFilter(function(value) {
  return /^-?\d*[.]?\d{0,2}$/.test(value); });

  $("#ingredient2Value").inputFilter(function(value) {
    return /^-?\d*[.]?\d{0,2}$/.test(value); });

  $("#ingredient3Value").inputFilter(function(value) {
      return /^-?\d*[.]?\d{0,2}$/.test(value); });

  $("#ingredient4Value").inputFilter(function(value) {
        return /^-?\d*[.]?\d{0,2}$/.test(value); });

  $("#ingredient5Value").inputFilter(function(value) {
          return /^-?\d*[.]?\d{0,2}$/.test(value); });

    document.getElementById('text').onkeyup = function () {
document.getElementById('info').innerHTML = "Characters left: " + (300 - this.value.length);
};
