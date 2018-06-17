function see_more(ev) {
  var see_more = ev.target;
  var shortcut = see_more.parentElement;
  var col_8 = shortcut.parentElement;
  var col_4 = col_8.previousSibling;
  var content = col_8.parentElement.parentElement;
  //var content = document.getElementsByClassName("content")[0];
  content.style.maxHeight = "none";
  //var row = content.children[0];
  //var col_4 = row.children[0];
  //var col_8 = row.children[1];
  col_4.className = "";
  col_8.className = "";
}
//setTimeout(see_more, 1000);