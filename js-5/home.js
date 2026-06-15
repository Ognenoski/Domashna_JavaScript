const showsContainer = document.getElementById("shows-container")

async function getShows() {
    const response = await fetch("https://api.tvmaze.com/shows")
    const shows = await response.json()

    return shows
}

let allShows = []
let favorites = JSON.parse(localStorage.getItem("favorites")) || []
let onFavorites = false

function showAll() {
    onFavorites = false
    populateShows(allShows)
}

function showFavorites() {
    onFavorites = true
    const favoriteShows = allShows.filter(show => favorites.includes(show.id))
    populateShows(favoriteShows)

}
function toggleFavorite(showId) {
    if (favorites.includes(showId)) {
        favorites = favorites.filter(id => id !== showId)
    } else {
        favorites.push(showId)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
    if (onFavorites) {
        showFavorites()
    } else {
        populateShows(allShows)
    }
}

function searchShows() {
    const searchInputValue = document.getElementById("search-input").value.toLowerCase().trim()

    let filteredShows = allShows

    if (onFavorites) {
        filteredShows = filteredShows.filter(show => favorites.includes(show.id))
    }

    filteredShows = filteredShows.filter(show =>
        show.name.toLowerCase().includes(searchInputValue)
    )

    populateShows(filteredShows)
}

function populateShows(shows) {
    showsContainer.innerHTML = ""
    shows.forEach(show => {

        let rating = ""
        for (let i = 0; i < show.rating.average; i++) {
            rating += `<i class="fa fa-star"></i>`
        }
        showsContainer.innerHTML +=
            `<div class="show">
                <img src="${show.image.medium}" />
                <button onclick="toggleFavorite(${show.id})">
    ${favorites.includes(show.id) ? "⭐ Remove Favorite" : "☆ Add to Favorite"}
</button>
</button>

            <div class="show-inner">
                 <div class="show-content">
                          <div class="rating">
                              ${rating}
                           </div>
                             <h2 >${show.name}</h2>
                             </div>
                      <div class="show-footer">
                        ${show.officialSite ? `<a href="${show.officialSite}">Official Site</a>` : ''}
                        <a href="show.html?id=${show.id}">Learn More</a>
                       </div>
             </div>
         </div>`
    })
}
const logoutButton = document.getElementById("logout-btn")
logoutButton.addEventListener("click",
    () => {
        localStorage.removeItem("loggedInUser")
        window.location.href = "index.html"
    })

getShows().then(shows => {
    allShows = shows
    populateShows(allShows)
})