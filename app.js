"use strict";

$("form").on("submit", getGiphy);

async function getGiphy(evt) {
  evt.preventDefault();

  const searchKeyword = $('#input-field').val();

  const params = new URLSearchParams({q: searchKeyword,
    api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" });

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?${params}`,
    { method: "GET" });
  const data = await response.json();
  console.log("resp=", response, "data=", data);

  displayGif(data);


}
/** Accepts json data */
function displayGif(results){
  console.log(results)
  //get length of results data
  let numOfResults = results.data.length;
  console.log(numOfResults)
  //get random gif index
  let randomGifIndex = Math.floor(Math.random() * numOfResults)
  console.log(randomGifIndex)

  let $gifContainer = $(".results").append("<div>")
  let $gifImage = $()



}

console.log("Let's get this party started!");

// api_key: MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym