$(document).ready(function(){
    //Run when the button is clicked
    $("#cat-button").click(function(){
      //Execute the API call.
      var cat = $.get("https://api.thecatapi.com/v1/images/search");
      
      //Function that runs when the API runs successfully
      cat.done(function(response){
        //Because the API returns an array, get the first element.
        var catData = response[0];
        //Show the cat block
        $("#cat").show();
        //Set the SRC of the image to the 
        $("#cat-img").attr("src", catData.url);
      });
    });
  });