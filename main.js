//Steps to build this project
//database for get button
//get TMDB API for data
//Build hrader
//get all movies
//build the different sections
//get youtube search api
//show movie trailer on click
//TODO:Get started button
let button = document.querySelector("#bid")
button.addEventListener("click", () => {
    let input = document.getElementById("email-id")
    if (input.value.includes("@") && input.value.endsWith("gmail.com")) {
        if (input.value.length > 20) {
            window.location.href = "./index3.html"
        }

    } else {
        alert("Enter the email id")
        window.location.href = "./index.html"
    }
})


//FIXME: main program
async function get_data() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json()
    return data
}
 async function movie() {
let fetch=await get_data()
console.table(fetch);


}
movie()

