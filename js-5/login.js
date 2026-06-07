
if (!localStorage.getItem("username")) {
    const username =[{
        username: "Daniel",
        password: "1234"
    }]

    localStorage.setItem("username", JSON.stringify(username))
}

 function login() 
{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const users = JSON.parse(localStorage.getItem("username")) || []

    const user = users.find(user =>
         user.username === username && 
         user.password === password)

if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user))
    window.location.href = "index.html"
    return

}
else {
    alert("Pogresen korisnik ili lozinka")
}
}
