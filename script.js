function createGrid(size=16) {
    // Ensures user can't make an empty canvas or overload the system with 1000 elements
    if (!isValidSize(size)) return alert("Invalid size! Must be between 1-100")

    const container = document.querySelector(".container")

    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div")
        div.classList.add("grid_item")
        div.style.cssText = `width: calc(100% / ${size});`
        container.appendChild(div)
    }

    displaySize(size)
}

function isValidSize(size) {
    return size > 0 && size <= 100
}

function displaySize(size) {
    const body = document.querySelector("body")

    const sizeText = document.createElement("h2")
    sizeText.innerText = `${size}x${size}`
    body.appendChild(sizeText)
}

function linkGridButton() {
    const button = document.querySelector("#grid_button")
    button.addEventListener("click", pressGridButton)
}

function pressGridButton() {
    console.log("press")
}

linkGridButton()

createGrid(16)