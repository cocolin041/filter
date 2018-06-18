function see_more_fn(ev) {
  var content_active = document.getElementsByClassName("active");
  var content_active_length = content_active.length;
  for (i = 0; i < content_active_length; i++) {
    content_active[0].style.display = "none";
    content_active[0].className = "content re-active";
  } 
  var see_more = ev.target;
  var location_opentime = see_more.parentElement;
  var shortcut = location_opentime.parentElement;
  var col_8 = shortcut.parentElement;
  var col_4 = col_8.previousElementSibling;
  var content = col_8.parentElement.parentElement;
  content.style.display = "block";
  content.className = "content active";
  content.style.maxHeight = "none";
  col_4.className = "col-12";
  col_8.className = "col-12";
  see_more.innerHTML = "返回";
  see_more.removeEventListener("click", see_more_fn);
  see_more.addEventListener("click", function() {
    back_fn(event);
  })
}

function back_fn(ev) {
  var back = ev.target;
  var location_opentime = back.parentElement;
  var shortcut = location_opentime.parentElement;
  var col_8 = shortcut.parentElement;
  var col_4 = col_8.previousElementSibling;
  var content = col_8.parentElement.parentElement;
  var content_reactive = document.getElementsByClassName("re-active");
  content_reactive_length = content_reactive.length;

  for (i = 0; i < content_reactive_length; i++) {
    content_reactive[0].style.display = "block";
    content_reactive[0].className = "content active";
  }
  content.style.maxHeight = "208.75px";
  col_4.className = "col-4";
  col_8.className = "col-8";
  back.innerHTML = "查看更多...";
}
