let inputEl = document.getElementById("input")
let cardEl = document.getElementsByClassName("card")[0]

//Create Unique ID Generator 
const IdGenerator = function* () {
    let uniqueId = 1

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}

const idFactory = IdGenerator()

//Add event listener to create card button
document.getElementById("create").addEventListener("click", function (event) {
    console.log("event", event)
    console.log(inputEl.value) 
    //Add input text with inputEL.value into the card section
    cardEl.innerHTML += `<div class="card-box" id="${idFactory.next().value}">
                         <p>${inputEl.value}</p>
                         <button id="delete_${idFactory.next().value}">Delete</button>
                         </div>
                         `
    inputEl.value = ""

})
//Add event listener to the delete button
cardEl.addEventListener("click", function (event) {
    console.log("event", event)
   if(event.target.id.startsWith('delete')) {
    event.target.parentNode.remove()
   }
    
})








