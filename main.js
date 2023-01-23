const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");
const picsDiv = document.querySelector(".pics");

const myApiKey = "iTmtFmXRO1S_40aNDNRZighTUfK-B3TFSNtRAp7JQIA";

const getRandom = async () => {
  try {
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=iTmtFmXRO1S_40aNDNRZighTUfK-B3TFSNtRAp7JQIA&count=10`);
    const data = await res.json();

    let removePic = document.querySelectorAll(".pics > img");
    for (let i = 0; i < removePic.length; i++) {
      removePic[i].remove();
    }

    for (let i = 0; i < data.length; i++) {
      let img = document.createElement("img");
      img.src = data[i].urls.regular;
      picsDiv.appendChild(img);
    }
  } catch (error) {
    console.log(error);
  }
};
picsDiv.addEventListener("load", getRandom());

const getPictures = async () => {
  const imgSearch = searchBar.value;

  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${imgSearch}&client_id=${myApiKey}`);
    const data = await res.json();

    let removePic = document.querySelectorAll(".pics > img");
    for (let i = 0; i < removePic.length; i++) {
      removePic[i].remove();
    }

    for (let i = 0; i < data.results.length; i++) {
      let img = document.createElement("img");
      img.src = data.results[i].urls.regular;
      picsDiv.appendChild(img);
    }
  } catch (error) {
    console.log(error);
  }
};

searchBtn.addEventListener("click", getPictures);