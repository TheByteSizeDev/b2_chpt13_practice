const makeSentence = (thing, location) => {
    return `I can purchase ${thing} at ${location}`
}

const container = document.querySelector("#sentence")
const form = document.querySelector("form")

const clearForm = () => form.reset()

document.querySelector("#saveEntry").addEventListener("click", event =>{
    const favorite = document.querySelector("#favorite").value
    const buyIt = document.querySelector("#buyItAt").value
    finalSentence = makeSentence(favorite, buyIt)
    container.innerHTML += finalSentence
    clearForm()
})

