function createGrid(size=16) {
    const container = document.querySelector(".container")

    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div")
        div.classList.add("grid_item")
        container.appendChild(div)
    }
}

createGrid()