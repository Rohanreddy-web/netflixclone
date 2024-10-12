//This is for sing in page
//connect to database
let inp1 = document.querySelector(".input1")
let inp2 = document.querySelector(".input2")
let button = document.getElementsByTagName("button")[0]
function sign_in() {
    button.addEventListener("click", () => {
        if (inp1.value.includes("@") && inp1.value.endsWith("gmail.com")) {
            let pas = inp1.value.length > 20 ?alert("wellcome"): alert("Your Gmail-id is to short")
        }
        else {
            alert("Enter The Correct Gmail-id")
        }
        let password = inp2.value.length >= 8 ?  window.location.href = "./index3.html": alert("Password is to short")



    })

}
sign_in()
