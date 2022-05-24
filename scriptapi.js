document.getElementById("getArticles").addEventListener("click", getArticles);

function getArticles() {
  fetch("https://mental-health-info-api.p.rapidapi.com/news", {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "mental-health-info-api.p.rapidapi.com",
      "X-RapidAPI-Key": "7ebef56454mshdf872ece0ac07a2p1d02b8jsne12d22a8dbdd",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("source").innerHTML = `<p>source:</p>${
        response[Math.floor(Math.random() * response.length)].source
      }`;
      document.getElementById("title").innerHTML =
        response[Math.floor(Math.random() * response.length)].title;
      document.getElementById("url-link").innerHTML = `<a href="${
        response[Math.floor(Math.random() * response.length)].url
      }">Read More</a>`;
    })
    .catch((err) => console.error(err));
}

///Suicidal text analyzer

function textAnalyzer() {
  fetch(
    "https://suicidal-text-analyzer.p.rapidapi.com/v1/api?text=Free%20to%20use%20it",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "suicidal-text-analyzer.p.rapidapi.com",
        "X-RapidAPI-Key": "7ebef56454mshdf872ece0ac07a2p1d02b8jsne12d22a8dbdd",
      },
    }
  )
    .then((response) => response.json())
    // .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
