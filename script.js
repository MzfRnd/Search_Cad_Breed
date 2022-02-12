//just to use it in event listener at the bottom
const btn = document.getElementById("btn");
const breed = document.getElementById("breed");
let catDiv;

function showCatsData(data) {
  const entryPoint = document.getElementById("entryPoint");
  if (catDiv) {
    entryPoint.removeChild(catDiv);
  }
  // Creating the html part of the elements that hold the information

  if (data.length == 0) {
    return;
  }
  catDiv = document.createElement("div");
  const title = document.createElement("h2");
  const catBreed = document.createElement("p");
  const description = document.createElement("p");
  const altNames = document.createElement("p");
  const lifeSpan = document.createElement("p");
  const wikiLink = document.createElement("a");
  // The inner text of the elements
  title.innerText = data[0].name.toUpperCase();
  catBreed.innerText = `Cats breed is ${data[0].name}`;
  if (data[0].description) {
    description.innerText = data[0].description;
  } else {
    description.innerText = "No description";
  }

  if (data[0].alt_names) {
    altNames.innerText = `Alternative names of this breeds are ${data[0].alt_names}`;
  } else {
    altNames.innerText = "There are no alternative names for this breed";
  }
  if (data[0].life_span) {
    lifeSpan.innerText = `Life span is ${data[0].life_span}`;
  } else {
    lifeSpan.innerText = "Life span is unknown";
  }
  wikiLink.innerText = "More information";
  wikiLink.href = data[0].wikipedia_url;
  // Adding all the elements under the catDiv
  catDiv.appendChild(title);
  catDiv.appendChild(catBreed);
  catDiv.appendChild(description);
  catDiv.appendChild(altNames);
  catDiv.appendChild(lifeSpan);
  entryPoint.appendChild(catDiv);
  catDiv.appendChild(wikiLink);
  // Just to see what information we get from the cat Api
  // this the wrapper of the cat information elements. I added all children margin in the css.
  catDiv.classList.add("catDiv");
}

function loadAndCreateCat() {
  fetchCb(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed.value}`,
    showCatsData
  );
}

btn.addEventListener("click", loadAndCreateCat);
