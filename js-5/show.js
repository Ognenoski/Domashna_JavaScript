const id = new URLSearchParams(window.location.search).get("id")
console.log(id);

async function getShowData(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await response.json()

    console.log(show);

    return show
}
async function getEpisodes(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    const episodes = await response.json()
    return episodes
}

getShowData(id).then(show => {
    const showContainer = document.getElementById("show")
    const showTitle = document.getElementById("show-title")

    showTitle.innerText = show.name

    showContainer.innerHTML = `<img src="${show.image.medium}"/>`
})

getEpisodes(id).then(episodes => {
    const episodesContainer = document.getElementById("episodes")
    episodesContainer.innerHTML = episodes.map(episode => `
        <div>
            <img src="${episode.image.medium}" alt="${episode.name}"/>
            <h3>${episode.name}</h3>
            <i ref="${episode.rating.average}">Rating: ${episode.rating.average}</i>
            <h5>Season ${episode.season} Episode ${episode.number}</h5>
            <p>${episode.summary}</p>
        </div>
    `).join("")
})

const nextShowButton = document.getElementById("next-btn")
nextShowButton.addEventListener("click", () => {
    const splitUrl = window.location.href.split("id=")
    const url = splitUrl[0]

    console.log(splitUrl);

    window.location.href = splitUrl[0] + `id=${+id + 1}`


})
