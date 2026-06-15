
if (!localStorage.getItem("users")) {
    const users =[{
        username: "Daniel",
        password: "1234"
    },
    {
        username: "Mila",
        password: "123",
    }]

    localStorage.setItem("users", JSON.stringify(users))
}

 function login() 
{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find(user =>
         user.username === username && 
         user.password === password)

if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user))
    window.location.href = "home.html"
    return

}
else {
    alert("Pogresen korisnik ili lozinka")
}
}
