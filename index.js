const endPoint = "http://localhost:3000/api/v1/vinyls"

document.addEventListener('DOMContentLoaded', () => {
    getVinyls()

    const addVinylForm = document.querySelector("#add-vinyl-form")

    addVinylForm.addEventListener("submit", (e) => createFormHandler(e));

})

function getVinyls() {
    fetch(endPoint)
    .then(response => response.json())
    .then(vinyls => {
        vinyls.data.forEach(vinyl => {
            const vinylMarkup = `
            <div data-id=${vinyl.id}>
                <img src=${vinyl.attributes.image_url}
                height="200" width="200">
                <h2>${vinyl.attributes.title}</h2>
                <h3>${vinyl.attributes.artist}</h3>
                <h4>${vinyl.attributes.genre.name}</h4>
                <button data-id=${vinyl.id}>Edit</button>
            </div>
            <br><br>`;

            document.querySelector(`#vinyl-container`).innerHTML += vinylMarkup
            
        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value 
    const artistInput = document.querySelector('#input-artist').value
    const imageInput = document.querySelector('#input-url').value 
    const genreId = parseInt(document.querySelector('#genre').value
    postFetch(titleInput, artistInput, imageInput, genreId)
}

function postFetch(title, artist, image_url, genre_id) {
    console.log(title, artist, image_url, genre_id);

}