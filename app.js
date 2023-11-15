"use strict";

$("form").on("submit", getGiphy);

async function getGiphy(evt) {
  evt.preventDefault();

  const searchKeyword = $('#input-field').val();

  const params = new URLSearchParams({ q: searchKeyword, api_key: MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym});
  const response = await fetch(
    `/https://api.giphy.com/v1/gifs/search?${params}`,
    { method: "GET" });
  const text = await response.text();
  console.log("resp=", response, "text=", text);
}
console.log("Let's get this party started!");