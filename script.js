let x = document.querySelectorAll(".window")
let sit1 = document.querySelectorAll(".sit1")
let sit2 = document.querySelectorAll(".sit2")

x.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector(".sit1").setAttribute("id", "vxx")
        document.querySelector(".sit2").setAttribute("id", "vxx")
    })
})