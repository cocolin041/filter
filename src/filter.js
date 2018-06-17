/*write filter function here to determine which articles to be shown
1. give filtered content a class called filter
2. use calculate_buttons("filter", filter.length) to generate button 
   and use change_page() to consider which articles to be block

var ticket_filter = "免費參觀";
function filter() {
  var content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    var tag = document.getElementsByClassName("tag");
    if (tag[i].innerHTML === ticket_filter) {
      content[i].className += " filter";
    } else {
      continue;
    }
  }
}
filter();
*/
/*remove repeat item in an array input*/
function remove_repeat(item) {
  var final_array = [];
  for (i=0; i<item.length; i++) {
    if   (final_array.includes(item[i])) {
  continue;
} else {
      final_array.push(item[i])
    }
  }
return final_array;
}

/*return location information*/
function save_location() {
  let location_final = [];
  let location = document.getElementsByClassName("location");
  for (i=0; i<location.length; i++) {
    location_final.push(location[i].children[1].innerHTML)
  }
  return location_final;
}
/*create location_filter selection*/
var location_filter = document.getElementsByClassName("location_filter")[0];
var selection = document.createElement("SELECT");

function crrate_zone() {
  var zone = remove_repeat(save_location());
  for (i = 0; i < zone.length; i++) {
    let option = document.createElement("OPTION");
    option.setAttribute("value", zone[i]);
    option.innerText = zone[i];
    selection.appendChild(option);
  }
  location_filter.appendChild(selection);
  
}
setTimeout(crrate_zone, 10000);

/*ticket information
function save_ticket() {
  let ticket_final = [];
  let ticket = document.getElementsByClassName("tag");
  for (i=0; i<ticket.length; i++) {
    ticket_final.push(ticket[i].innerHTML)
  }
  return ticket_final;
}
var ticket_filter = document.getElementsByClassName("ticket_filter")[0];

function crrate_ticket() {
  var ticket = remove_repeat(save_ticket())
  for (i = 0; i < ticket.length; i++) {
    let input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "ticket");
    input.setAttribute("value", ticket[i]);
    let text = document.createTextNode('"' + ticket[i] + '"');
    input.appendChild(text);
    let br = document.createElement("BR");
    ticket_filter.appendChild(input);
    ticket_filter.appendChild(br);
  } 
}
setTimeout(crrate_ticket, 5000);
*/