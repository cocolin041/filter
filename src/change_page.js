/* 
- Function: 
  click to show those articles corresponding to the page button
- Conditions:
  1. When there's no filter, show all articles according to each pages
  2. If there's filter, the article_number will be the filtered article number
- Parameters:
  1. ev: this click event, should put event in it
  2. article_class: either "content" or "filter", determine which type of articles to be shown
  2. article_number: how many articles should be shown
*/
function change_page(ev, article_class, article_number) {
  //which page is this
  var page = ev.target.innerHTML - 1;
  
  //hide all articles on this web
  var content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    article_type[i].className = "content";
  }

  //show the click page button's article
  var article_type = document.getElementsByClassName(article_class);
  for (i = (articles_per_page * page); i < (articles_per_page * (page + 1)); i++) {
    article_type[i].style.display = "block";
    article_type[i].className = "content active";
  }
}