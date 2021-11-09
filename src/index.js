const link = "http://localhost:3000/cars"

document.addEventListener('DOMContentLoaded', () => {
    
    getCars()
    
    const newCars = document.getElementById('newCars')

    newCars.addEventListener('submit', this.createFormHandler.bind(this))

    const carContainer = document.getElementById('carContainer')

    carContainer.addEventListener('click', deleteCars)

    // const sortButton = document.getElementById('sortAllCars')

    // sortButton.addEventListener('click', sortAllCars)
    
});

function getCars() {
    fetch(link)
    .then(resp => resp.json())
    .then(cars => {
        cars.forEach(car => {
            const carContainer = document.getElementById('carContainer')
            let newCar = new Car(car.id, car.name, car.favorite)
            carContainer.insertAdjacentHTML("beforeend", newCar.renderCars())
        })
    })
        .catch(err => console.log(err))
}

function createFormHandler(e) {
    e.preventDefault()
    const carTitle = document.getElementById('car').value
    const favoriteId = parseInt(document.getElementById('favoriteSelect').value)
    postFetch(carTitle, favoriteId)
}

function postFetch(name) {
  const favoriteID = document.getElementById('favoriteSelect').value
    fetch(link, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            favorite: favoriteID,
        })
    })
    .then(resp => resp.json())
    .then(car => {
        const carContainer = document.getElementById('carContainer')
        let newCar = new Car(car.id, car.name, car.favorite)
        carContainer.innerHTML += newCar.renderCars()
    })
}


function deleteCars(e) {
    e.preventDefault();
    const id = e.target.parentElement.dataset.id
    const url = link + "/" + id
    if (e.target.id === "delete") {  
    e.target.parentElement.remove()
    fetch(url, {
        method: "DELETE"
    })
    } else if (e.target.id === "starButton") {
        addStar(e)
    } else if (e.target.id === "likeButton") {
        likeIncrement(e)
    } else if (e.target.id === "dislikeButton"){
        likeDecrease(e)
    } else {
    }
}

function likeIncrement(e) {
    e.target.previousElementSibling.innerHTML = parseInt(e.target.previousElementSibling.innerHTML) + 1
}

function likeDecrease(e) {
    e.target.previousElementSibling.previousElementSibling.innerHTML = parseInt(e.target.previousElementSibling.previousElementSibling.innerHTML) - 1
}

function addStar(e) {
    // let starOrNot = e.target.previousElementSibling.innerHTML
    console.log(e.target)
    if (e.target.previousElementSibling.innerHTML === "") {
        e.target.previousElementSibling.innerHTML = "&#11088"
        e.target.innerHTML = "UnStar"
    } else {
        e.target.previousElementSibling.innerHTML = ""
        e.target.innerHTML = "Star"
    }
}


function sortAllCars() {


    // fetch(link)
    //     .then(resp => resp.json())
    //     .then(cars => {
    //         cars.sort((a, b) => a.name.localeCompare(b.name)).forEach(ca => {
    //             cars.push(new Car(ca))
    //             const carContainer = document.getElementById('carContainer')
    //             carContainer.innerHTML += renderCars(this.notes)
    //         })
    //     })
    //     .catch(err => console.log(err))
   
}


