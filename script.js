const img = document.querySelector("img");
const findGif = document.querySelector(".find-gif");

findGif.addEventListener("click", (e) => {
  e.preventDefault(e);
  let query = document.querySelector(".input-box").value;
  console.log("query");
  fetchGIF(query);
});

function fetchGIF(query) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=K1dSXa8JwdSxinTMhDhQHiKPeM8nIIaK&s=${query}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data.images.original.width);
      console.log(response.data.images.original.height);
      img.src = response.data.images.original.url;
      img.style.width = `${response.data.images.original.width}`;
      img.style.height = `${response.data.images.original.height}`;
    })
    .catch(function () {
      img.src = "error.gif";
    });
}
