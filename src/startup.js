var timeout;
function changeText() {
  var elem = document.getElementById("Attention");

  clearTimeout(timeout);
  timeout = setTimeout(function() {
    elem.innerHTML = "";
  }, 3000);
}