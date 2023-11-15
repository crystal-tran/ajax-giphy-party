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

  //let $gifImage = $("<img>").attr("src", "results.data[randomGifIndex].url")
  console.log(results.data[randomGifIndex].images.original.url);
  //let $imageURL = results.data[randomGifIndex].images.original.url;
  let $gifContainer = $(".results").append($("<img>")
  .attr("src", results.data[randomGifIndex].images.original.url));



}

console.log("Let's get this party started!");

// api_key: MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym