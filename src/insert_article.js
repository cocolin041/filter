function generate_article(number) {
  //div content-container
  var content_container = document.getElementById("content-container");

  //create element start

    //div content
    var content = document.createElement("DIV");
    content.className = "content";

      //div row
      var row = document.createElement("DIV");
      row.className = "row";

        //div col-4
        var col_4 = document.createElement("DIV");
        col_4.className = "col-4";
          //div picture
          var picture = document.createElement("DIV");
          picture.className = "picture";
            var img = document.createElement("IMG");
            //wait data for setAttribute("src", img_link)/////////////////////////
            img.setAttribute("src", img_src[number]);

          //finish picture: append picture with img
          picture.appendChild(img);

        //finish col_4: append col_4 with picture
        col_4.appendChild(picture);

        //div col-8
        var col_8 = document.createElement("DIV");
        col_8.className = "col-8";
          //div shortcut
          var shortcut = document.createElement("DIV");
          shortcut.className = "shortcut";

            //div title
            var title = document.createElement("DIV");
            title.className = "title";
            //wait data for innerHTML////////////////////////////////////////////
            title.innerHTML = title_text[number];
            
            //div description
            var description = document.createElement("P");
            description.className = "description";
            //wait data for innerHTML////////////////////////////////////////////
            description.innerHTML = description_text[number];

            //div keyword_tag
            var keyword_tag = document.createElement("DIV");
            keyword_tag.className = "keyword-tag";
              //span keyword
              var keyword = document.createElement("SPAN");
              keyword.className = "keyword";
              //wait data for innerHTML/////////////////////////////////////////
              keyword.innerHTML = keyword_text[number];

              //span tag
              var tag = document.createElement("SPAN");
              tag.className = "tag";
              //wait data for innerHTML/////////////////////////////////////////
              tag.innerHTML = tag_text[number];

            //finish keyrowd_tag: append keyword_tag with keyword and tag
            keyword_tag.appendChild(keyword);
            keyword_tag.appendChild(tag);

            //div location_opentime
            var location_opentime = document.createElement("DIV");
            location_opentime.className = "location-opentime";
              //div location
              var location = document.createElement("SPAN");
              location.className = "location";
                //icon map
                var icon_map = document.createElement("I");
                icon_map.className = "fas fa-map-marker-alt";
                //span location data
                var location_data = document.createElement("SPAN");
                //wait data for innerHTML/////////////////////////////////////////
                location_data.innerHTML = location_text[number];

              //finish location: append location with icon_map and location_data
              location.appendChild(icon_map);
              location.appendChild(location_data);

              //div opentime
              var opentime = document.createElement("SPAN");
              opentime.className = "opentime";
                //icon calendar
                var icon_calendar = document.createElement("I");
                icon_calendar.className = "far fa-calendar-alt";
                //span calendar data
                var calendar_data = document.createElement("SPAN");
                //wait data for innerHTML/////////////////////////////////////////
                calendar_data.innerHTML = calendar_text[number];

              //finish opentime: append opentime with icon_calendar and calendar_data
              opentime.appendChild(icon_calendar);
              opentime.appendChild(calendar_data);

              //span see-more
              var see_more = document.createElement("SPAN");
              see_more.className = "see-more";
              see_more.innerHTML = "查看更多...";
              see_more.addEventListener("click", function() {
                see_more_fn(event);
              })

            //finish location_opentime: append location_opentime with location and opentime
            location_opentime.appendChild(location);
            location_opentime.appendChild(opentime);
            location_opentime.appendChild(see_more);

          //finish shortcut: append shortcut with title, description, keyword_tag and location_time
          shortcut.appendChild(title);
          shortcut.appendChild(description);
          shortcut.appendChild(keyword_tag);
          shortcut.appendChild(location_opentime);

        //finish col_8: append col_8 with shortcut
        col_8.appendChild(shortcut);

      //finish row: append row with col-4 and col-8
      row.appendChild(col_4);
      row.appendChild(col_8);

    //finish content: append content with row
    content.appendChild(row);

  //finish content_container: append content-container with content
  content_container.appendChild(content);
}
