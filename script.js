const img = document.querySelector("img");
const findGif = document.querySelector(".find-gif");

findGif.addEventListener("click", (e) => {
  e.preventDefault(e);
  let query = document.querySelector(".input-box").value;
  console.log("query");
  fetchGIF(query);
});

async function fetchGIF(query) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=K1dSXa8JwdSxinTMhDhQHiKPeM8nIIaK&s=${query}`,
    { mode: "cors" }
  );

  try {
    const catData = await response.json();
    img.src = catData.data.images.original.url;
    img.style.width = `${catData.data.images.original.width}`;
    img.style.height = `${catData.data.images.original.height}`;
  } catch {
    img.src = "error.gif";
  }
}
