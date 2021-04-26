const APIKEY = "d9fbbccfa6354979e22c580de942e3ef";
const baseURL = "https://api.themoviedb.org/3/";
let configData = null;
let baseImageURL = null;

let getCard = (movie) => {
    // console.log(movie);
    return `<div class="col">
    <a class="card" m-id="${movie["id"]}"  href="/filmPage/index.html#${movie["id"]}"  style="height: 100%;" data-toggle="tooltip" data-placement="top" style="border: 0px;" title="${movie["title"]}">
      <div id="poster" onclick="init(${movie["id"]})">
        <img src=${ movie["poster_path"] == null? "no-poster.jpg" : baseImageURL + "w500/" + movie["poster_path"]} alt="${movie["title"]}"/>
      </div>
      <div class="card-body d-flex" style="align-items: flex-end; justify-content: space-between;">
        <span class="text-muted">${movie["vote_count"]} <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 20">
        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
        </svg> </span>
        <span class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 20">
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
        </svg> ${movie["vote_average"]} </span>
      </div>
    </a>
  </div>`
}

let getConfig = function () {
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
    fetch(url)
    .then((result)=>{
        return result.json();
    })
    .then((data)=>{
        baseImageURL = data.images.secure_base_url;
        configData = data.images;
        console.log('config:', data);
    })
    .catch(function(err){
        alert(err);
    });
}

let init = (id) => {
    let url;
    if (id == 0) url = ''.concat(baseURL, 'movie/', location.hash.substr(1), '?api_key=', APIKEY);
    else url = ''.concat(baseURL, 'movie/', id, '?api_key=', APIKEY);
    
        
    console.log(url);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{

        console.log(data);
        $("#poster").attr("src", baseImageURL + "w300" + data.poster_path)
        $("#name").text(data.title);
        $(".overview").text(data.overview);
        $(".big").attr("src", baseImageURL+ "original" + data.backdrop_path);
        if (data.homepage) $("#more").attr("href", data.homepage);
        // else $("#more").css()
        

        url = ''.concat(baseURL, `movie/${data.id}/similar`, '?api_key=', APIKEY);

        document.getElementById('all-movies').innerHTML = "";

        fetch(url)
        .then(result=>result.json())
        .then((data)=>{
            if (data.total_results > 0) {
            console.log(data);
            for (let movie in data.results) {
                if (data.results[movie].poster_path != null && data.results[movie].vote_average != 0 
                && data.results[movie].vote_count != 0) {
                document.getElementById('all-movies').innerHTML += getCard(data.results[movie]); 
                }
            }
            }
        })
    })  
}

$("#searchN").click(() => {
    if ($("#Search").val().length > 0) {
        location = "/roulettePage/index.html?" + $("#Search").val();
    } else {
        window.location.reload();
    }
})

  document.addEventListener('DOMContentLoaded', getConfig());

  init(0);