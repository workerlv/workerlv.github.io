function showMore() {
  var dots = document.getElementById(showMore.caller.arguments[0].target.id + "dots");
  var moreText = document.getElementById(showMore.caller.arguments[0].target.id + "end");
  var btnText = document.getElementById(showMore.caller.arguments[0].target.id);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}
