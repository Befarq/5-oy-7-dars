let overlay = document.querySelector(".overlay");

const articlesContainer = document.querySelector(".article-container");
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState == 4 && request.status == 200) {
    const data = JSON.parse(request.responseText);
    console.log("salom");
    updateUi(data);
    overlay.classList.add("hidden");
  } else if (request.readyState == 4) {
    console.log("error");
    overlay.classList.add(".hidden");
  } else {
    overlay.classList.remove(".hidden");
    console.log("loading");
  }
});
request.open("get", "http://localhost:3000/articles");
request.send();

function updateUi(data) {
  const ul = document.createElement("ul");
  docFragment = document.createDocumentFragment();
  data.forEach((article) => {
    const li = document.createElement("li");
    li.classList.add("card");
    li.innerHTML = `<h3>Title:${article.title}</h3>
    <br>
    <p>Author:${article.author}</p>
    <br><br>
    <a href=${`../article.html/${article.id}`}>Read More</a>`;
    docFragment.appendChild(li);
  });
  ul.appendChild(docFragment);
  articlesContainer.appendChild(ul);
}
