
//function for URL
function linkreturn(a) {
  a = a.replace(/\s/g, "_");
  return a;
}
//value for search & removing spaces for search url
function searchReturn() {
  var b = document.getElementById("search").value;
  b = b.replace(/\s/g, "%20");
  return b;
}
// for result
 /*function searchResult(json) {
  console.log(json);
  var i = 0;
  
  var link = "";
  $(".res").each(function(i) {
    $(this).html(json.query.search[i].title + "<br> " + json.query.search[i].snippet);
      
    link = "https://en.wikipedia.org/wiki/" + linkreturn(json.query.search[i].title);
    $(this).wrap('<a target="_blank" href=' + link + '></a>');
    i++;
  });
} */

function wikiview() {
  var s = searchReturn();
  $.ajax({

    url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&format=json&prop=revisions&list=search&rvprop=content&srsearch=' + s + '&srlimit=12',
    dataType: 'jsonp',
    success: function(json) {
    $("#2nd").show();
      //console.log(x);
      //console.log(x.query.search[0].title);
      //console.log(x.query.search[0].snippet);
      
     // searchResult(x);
      console.log(json);
  var i = 0;
  
  var link = "";
  $(".res").each(function(i) {
    $(this).html("<span>" + json.query.search[i].title + "</span><br> " + json.query.search[i].snippet);
      
    link = "https://en.wikipedia.org/wiki/" + linkreturn(json.query.search[i].title);
    $(this).wrap('<a target="_blank" href=' + link + '></a>');
    i++;
  });


    },
    error: function() {
      console.log("error");
    }
  });
}

$(document).ready(function() {
 
  $("#2nd").hide();
  $("#search").keydown(function(event) {
if (event.keyCode === 13){
  console.log(event.keyCode);
    $("#box").removeClass("cent");
    $("#2nd").show();
    wikiview();
}

  });
  
  $("#but").click(function() {

    $("#box").removeClass("cent");
    $("#2nd").show();
    wikiview();

  });
});