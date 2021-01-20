const btn = document.querySelector('.getJoke') 
const joke = document.querySelector('.joke')

getJoke()

btn.addEventListener('click',getJoke)

function getJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com',config)
    .then(response => response.json())
    .then(data => {
        joke.innerHTML = data.joke
    })
}

