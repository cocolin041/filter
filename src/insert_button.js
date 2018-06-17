/*
- Function: 
  Generate buttons, according to how many times this function's being called
- Parameters:
  1. pages: which page this button is
  2. article_class: either "content" or "filter", determine which type of articles to be shown
  3. how_many_articles: use as input parameter in the "change_page" function
*/
function insert_button(pages, article_class, how_many_articles) {
  //parent container: div pages-button
  var pages_button = document.getElementById("pages-button");
  //create element start
  var button = document.createElement("BUTTON");
  button.innerHTML = pages + 1;
  button.addEventListener("click", function() {
    change_page(event, article_class, how_many_articles);
  });
  //finish pages-button
  pages_button.appendChild(button);
}

/*
- Function: 
  Generate the right-arrow button after all button are inserted
*/
function insert_arrow_button() {
  //parent container: div page-button
  var pages_button = document.getElementById("pages-button");
  //create element start
  var button = document.createElement("BUTTON");
  var icon_arrow = document.createElement("I");
  icon_arrow.className = "fas fa-angle-double-right";
  button.appendChild(icon_arrow);
  //finish pages-button
  pages_button.appendChild(button);
}

/*
- Function: 
  Calculate how many button's should be generated, and call the function that times
- Parameters:
  1. article_class: either "content" or "filter", determine which type of articles to be shown
  2. how_many_articles: input how many articles that should be shown
- Conditions:
  1. When there's no filter: set "content.length" to insert_button's "how_many_articles" parameter
  2. When there's filter: set "filter.length" to it
*/
function calculate_buttons(article_class, how_many_articles) {
  //according to how many articles it should be shown
  for (i = 0; i < Math.ceil(how_many_articles/articles_per_page); i++) {
    insert_button(i, article_class, how_many_articles);
  }
  //add right-arrow everytime buttons have been generated
  insert_arrow_button();
}