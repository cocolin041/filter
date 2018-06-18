var img_src = [];
var description_text = [];
var title_text = [];
var keyword_text = [];
var tag_text = [];
var location_text = [];
var calendar_text = [];
var articles_per_page = 3;

//set api request
var xhttp = new XMLHttpRequest();
//when statechange => do sth.
xhttp.onreadystatechange = function() {

  if (this.readyState == 4 && this.status == 200) {
    //get data
    var data = JSON.parse(this.responseText);
    //var how_many_articles = 10;
    var how_many_articles = data.result.records.length;
    
    for (i = 0; i < how_many_articles; i++){
      img_src[i] = data.result.records[i].Picture1;
      description_text[i] = data.result.records[i].Description;
      title_text[i] = data.result.records[i].Name;
      keyword_text[i] = data.result.records[i].Name;
      tag_text[i] = data.result.records[i].Ticketinfo;
      location_text[i] = data.result.records[i].Zone;
      calendar_text[i] = data.result.records[i].Opentime;
    }
    //generate article several times
    for (i = 0; i < how_many_articles; i++){
      generate_article(i);
    }
    //show only first page articles
    var content = document.getElementsByClassName("content");
    for (i = 0; i < articles_per_page; i++) {
      content[i].style.display = "block";
      content[i].className = "content active";
    }
    //generate buttons according to the length of content
    calculate_buttons("content", content.length);
  }
}
//set api method
xhttp.open("GET", "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97", true);
//send request
xhttp.send();