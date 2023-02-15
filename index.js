let elList = document.querySelector(".list")
let elSelect = document.querySelector(".select")
let elFavBtn = document.querySelector(".favorite")
let elOptionArr = []

function createPokemons(arr, element) {
    element.innerHTML = ""
    arr.forEach(item => {
        let elItem = document.createElement("li")
        let elImg = document.createElement("img")
        let elTitle = document.createElement("h2")
        let elBody = document.createElement("p")
        let elFav = document.createElement("button")
        let elMore = document.createElement("button")


        elImg.src = item.img
        elTitle.textContent = item.name
        elBody.textContent = item.candy
        elFav.textContent = "Favorite"
        elFav.classList.add("Fav-btn")
        elMore.textContent = "More"

        elItem.appendChild(elImg, elTitle, elBody, elFav, elMore)
        element.appendChild(elItem)

        item.weaknesses.forEach(innerItem => {
            if(!elOptionArr.includes(innerItem)){
                elOptionArr.push(innerItem)
            }
        })
    });
    elOptionArr.forEach(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item
        elOption.value = item
        elSelect.appendChild(elOption)
        
    })
}

createPokemons(pokemons, elList)

elSelect.addEventListener("change", function(evt) {
  const filteredArr = evt.target.value === "All" ? pokemons : pokemons.filter(item => item.weaknesses.includes(evt.target.value))
  createPokemons(filteredArr, elList)
  })

  elList.addEventListener("click", function(evt) {
    if(evt.target.matches(".fav-btn")){
        console.log("salom");
    }
  })


// let elList = document.querySelector(".list")
// let elSelect = document.querySelector(".select")
// let elFavBtn = document.querySelector(".favorite")
// let elOptionArr = []

// function createPokemons(arr, element) {
//     element.innerHTML = ""
//     arr.forEach(item => {
//         let elItem = document.createElement("li")
//         let elImg = document.createElement("img")
//         let elTitle = document.createElement("h2")
//         let elBody = document.createElement("p")
//         let elFav = document.createElement("button")
//         let elMore = document.createElement("button")


//         elImg.src = item.elImg
//         elTitle.textContent = item.name
//         elBody.textContent = item.candy
//         elFav.textContent = "Favorite"
//         elMore.textContent = "More"

//         elItem.appendChild(elImg, elTitle, elBody, elFav, elMore)
//         element.appendChild(elItem)

//         item.weaknesses.forEach(innerItem => {
//             if(!elOptionArr.includes(innerItem)){
//                 elOptionArr.push(innerItem)
//             }
//         })
//     });
//         elOptionArr.forEach(item => {
//             let elOption = document.createElement("option")
//             elOption.textContent = item
//             elOption.value = item
//             elSelect.appendChild(elOption)
//         })
// }

// createPokemons(pokemons, elList)