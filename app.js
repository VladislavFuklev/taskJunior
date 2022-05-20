let listBtn = document.querySelector(".fa-solid")
let list = document.querySelector(".list")
let listTwo = document.querySelector(".list-two")
let btnTwo = document.querySelector(".btn-two")

listBtn.addEventListener("click", function () {
    list.classList.toggle("hidden")
})

btnTwo.addEventListener("click", function () {
    listTwo.classList.toggle("hidden")
})



