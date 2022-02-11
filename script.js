//just to use it in event listener at the bottom
const btn = document.getElementById("btn");

function showCatsData(data) {
  const entryPoint = document.getElementById("entryPoint");
  // Creating the html part of the elements that hold the information
  const catDiv = document.createElement("div");
  const title = document.createElement("h2");
  const catBreed = document.createElement("p");
  const description = document.createElement("p");
  const altNames = document.createElement("p");
  const lifeSpan = document.createElement("p");
  const wikiLink = document.createElement("a");
  // The inner text of the elements
  title.innerText = data[0].name.toUpperCase();
  title.innerText = data[0].name.toUpperCase();
  catBreed.innerText = `Cats breed is ${data[0].name}`;
  description.innerText = data[0].description;
  altNames.innerText = `Alternative names of this breeds are ${data[0].altNames}`;
  lifeSpan.innerText = `Life span is ${data[0].lifeSpan}`;
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
  console.log(data[0]);
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
