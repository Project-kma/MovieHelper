
const APIKEY = "d9fbbccfa6354979e22c580de942e3ef";
const baseURL = "https://api.themoviedb.org/3/";
let configData = null;
let baseImageURL = null;
let genreList = null;
let actors = null;


// `<div class="col">
//     <div class="card shadow-sm">
//     <img src="${baseImageURL}w500/${movie["poster_path"]}" alt="${movie["title"]}"/>

//       <div class="card-body">
//         <p class="card-text">${movie["overview"]}</p>
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//             <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//             <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//           </div>
//           <small class="text-muted">${movie["vote_count"]}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
//           <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
//         </svg></small>
//         </div>
//       </div>
//     </div>
//   </div>`

{/* <p> ${movie["overview"]} </p> */}


{/* <div height="301" id="img-wrapper">  </div> */}


let getCard = (movie) => {
    // console.log(movie);
    return `<div class="col">
    <div class="card shadow-sm">
      <div id="poster">
        <img src=${ movie["poster_path"] == null? "no-poster.jpg" : baseImageURL + "w500/" + movie["poster_path"]} alt="${movie["title"]}"/>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          
          <small class="text-muted">${movie["vote_count"]} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 20">
          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
          </svg> </small>
          <small class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 20">
          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
          </svg> ${movie["vote_average"]} </small>
        </div>
      </div>
    </div>
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
  
    url = "".concat(baseURL, "genre/movie/list?api_key=", APIKEY);
    fetch(url)
    .then((result)=>{
        return result.json();
    })
    .then((data)=>{
        genreList = data.genres;
        console.log('genres:', genreList);
        initGenres(genreList);
    })
    .catch(function(err){
        alert(err);
    });

    actors = [];
    for (let i = 1; i < 4; i++) {
      url = "".concat(baseURL, "person/popular?api_key=", APIKEY, "&page=", i);
      fetch(url)
      .then((result)=>{
          return result.json();
      })
      .then((data)=>{
          actors = actors.concat(data.results.map((item) => item.name));
          console.log(actors)
          if (i == 3) autocomplete(document.getElementById("actor-name"), actors)
      })
      .catch(function(err){
          alert(err);
      });
    }


}


let initGenres = (arr) => {
  for (let elem in arr) {
    document.getElementById('inputGroupSelect01').innerHTML += `<option value="${arr[elem].id}">${arr[elem].name}</option>`;
  }
}


function autocomplete(inp, arr) {
  /* функция автозаполнения принимает два аргумента,
  элемент текстового поля и массив возможных значений автозаполнения: */
  var currentFocus;
  /* выполнение функции, когда кто-то пишет в текстовом поле: */
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /* закрыть все уже открытые списки значений автозаполнения */
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /* создайте элемент DIV, который будет содержать элементы (значения): */
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /* добавьте элемент DIV в качестве дочернего элемента контейнера автозаполнения: */
      this.parentNode.appendChild(a);
      /* для каждого элемента в массиве... */
      for (i = 0; i < arr.length; i++) {
        /* проверьте, начинается ли элемент с тех же букв, что и значение текстового поля: */
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /* создайте элемент DIV для каждого соответствующего элемента: */
          b = document.createElement("DIV");
          /* сделайте соответствующие буквы жирным шрифтом: */
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /* вставьте поле ввода, которое будет содержать значение текущего элемента массива: */
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /* выполнение функции, когда кто-то нажимает на значение элемента (элемент DIV): */
              b.addEventListener("click", function(e) {
              /* вставьте значение для текстового поля автозаполнения: */
              inp.value = this.getElementsByTagName("input")[0].value;
              /* закройте список значений автозаполнения,
              (или любые другие открытые списки значений автозаполнения : */
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /* выполнение функции нажимает клавишу на клавиатуре: */
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /* Если нажата клавиша со стрелкой вниз,
        увеличение текущей переменной фокуса: */
        currentFocus++;
        /* и сделать текущий элемент более видимым: */
        addActive(x);
      } else if (e.keyCode == 38) { //вверх
        /* Если нажата клавиша со стрелкой вверх,
        уменьшите текущую переменную фокуса: */
        currentFocus--;
        /* и сделать текущий элемент более видимым: */
        addActive(x);
      } else if (e.keyCode == 13) {
        /* Если нажата клавиша ENTER, предотвратите отправку формы, */
        e.preventDefault();
        if (currentFocus > -1) {
          /* и имитировать щелчок по элементу "active": */
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /* функция для классификации элемента как "active": */
    if (!x) return false;
    /* начните с удаления "активного" класса для всех элементов: */
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*добавить класса "autocomplete-active": */
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /* функция для удаления "активного" класса из всех элементов автозаполнения: */
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /* закройте все списки автозаполнения в документе,
    кроме того, который был передан в качестве аргумента: */
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/* выполнение функции, когда кто-то щелкает в документе: */
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Канада","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","Франция","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Германия","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Мужчина","Israel","Италия","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Швеция","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];



// &language=uk-UA
// &language=ru-RU
// &language=uk-US std


// let runSearch = function (keyword) {
//     let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&language=uk-UA&query=', keyword);
//     fetch(url)
//     .then(result=>result.json())
//     .then((data)=>{
//         //process the returned data
//         document.getElementById('all-movies').innerHTML = "";
//         for (let movie in data.results) {
//             document.getElementById('all-movies').innerHTML += getCard(data.results[movie]);

//         }
//         //work with results array...
        
//     })
// }

let runSearch = function (keyword) {
    let url = ''.concat(baseURL, 'movie/top_rated?api_key=', APIKEY);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        //process the returned data
        document.getElementById('all-movies').innerHTML = "";
        for (let movie in data.results) {
            document.getElementById('all-movies').innerHTML += getCard(data.results[movie]);

        }
        //work with results array...
        
    })
}

document.addEventListener('DOMContentLoaded', getConfig());

runSearch("harry potter")



/*******************************
SAMPLE SEARCH RESULTS DATA
{ "vote_count": 2762, 
    "id": 578, 
    "video": false, 
    "vote_average": 7.5, 
    "title": "Jaws", 
    "popularity": 16.273358, 
    "poster_path": "/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg", 
    "original_language": "en", 
    "original_title": "Jaws", 
    "genre_ids": [ 27, 53, 12 ], 
    "backdrop_path": "/slkPgAt1IQgxZXNrazEcOzhAK8f.jpg", 
    "adult": false, 
    "overview": "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.", 
    "release_date": "1975-06-18" 
}
*******************************/