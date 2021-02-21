const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3cbce4352fa1ccd74220de20ca7877bc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const search_API = 'https://api.themoviedb.org/3/search/movie?api_key=3cbce4352fa1ccd74220de20ca7877bc&query="'
//some DOM elements
const form = document.querySelector('form')
const search = document.querySelector('.search')
const main = document.querySelector('main')

getMovies(API_URL)

async function getMovies(url){
    main.innerHTML = ''
    let res = await fetch(url)
    let data = await res.json()
    showMovies(data.results)
}
function showMovies(movies){
        movies.forEach(movie => {
        const {title , poster_path , vote_average , overview} = movie
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie')
        movieContainer.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="info">
                <h3 class="title">${title}</h3>
                <span class="rating" style="color:${ratingColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        `
        main.appendChild(movieContainer)
    })
}
function ratingColor(rate){
    if(rate >= 8){
        return "green"
    }else if(rate >= 5){
        return "orange"
    }else{
        return "red"
    }
}
//searching
form.addEventListener('submit',(e) => {
    e.preventDefault()
    let searchTerm = search.value
    if(searchTerm !== ''){
        getMovies(search_API + searchTerm)
    }

})
//return to home
const mainTitle = document.querySelector('h2')
mainTitle.addEventListener('click',() => getMovies(API_URL))