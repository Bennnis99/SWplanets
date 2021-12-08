import react from "react"

export function Category1Button() {
    let buttn = document.getElementById("category1")
    let buttn2 = document.getElementById("category2")
    let buttn3 = document.getElementById("category3")

    buttn.classList.add("categoryButtonPressed")
    buttn2.classList.remove("categoryButtonPressed")
    buttn3.classList.remove("categoryButtonPressed")
}
export function Category2Button() {
    let buttn = document.getElementById("category1")
    let buttn2 = document.getElementById("category2")
    let buttn3 = document.getElementById("category3")

    buttn2.classList.add("categoryButtonPressed")
    buttn.classList.remove("categoryButtonPressed")
    buttn3.classList.remove("categoryButtonPressed")
}
export function Category3Button() {
    let buttn = document.getElementById("category1")
    let buttn2 = document.getElementById("category2")
    let buttn3 = document.getElementById("category3")
    
    buttn3.classList.add("categoryButtonPressed")
    buttn2.classList.remove("categoryButtonPressed")
    buttn.classList.remove("categoryButtonPressed")
}