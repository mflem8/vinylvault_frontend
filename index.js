const endPoint = "http://localhost:3000/api/v1/vinyls"

document.addEventListener('DOMContentLoaded', () => {
    fetchVinyls()
})

function fetchVinyls() {
    fetch(endPoint)
    .then(response => response.json())
    .then(vinyls => {
        console.log(vinyls);
    })
}