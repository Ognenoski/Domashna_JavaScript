const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"))

if (!loggedInUser) {
    window.location.href = "login.html"
}
async function getClub() {

    try {

        const response = await fetch(
            "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Milan"
        )

        const data = await response.json()

        const club = data.teams[0]

        document.getElementById("club-name").textContent = club.strTeam
        document.getElementById("stadium").textContent = club.strStadium
        document.getElementById("founded").textContent = club.intFormedYear
        document.getElementById("club-city").textContent = club.strLocation
        document.getElementById("league").textContent = club.strLeague
        document.getElementById("logo").src = club.strBadge

    } catch (error) {

        console.log(error)

    }

}

getClub()