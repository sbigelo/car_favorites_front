const link = "http://localhost:3000/cars"

document.addEventListener('DOMContentLoaded', () => {
    
    getCars()
    
    const newCars = document.getElementById('newCars')

    newCars.addEventListener('submit', this.createFormHandler.bind(this))

    const carContainer = document.getElementById('carContainer')

    carContainer.addEventListener('click', deleteCars)
    
   const sortCars = document.getElementById('sort')

   sortCars.addEventListener('click', sortAllCars)

   
 

});

function getCars() {
    fetch(link)
    .then(resp => resp.json())
    .then(cars => {
       
        cars.forEach(car => {
            const carContainer = document.getElementById('carContainer')
            let newCar = new Car(car.id, car.name, car.favorite)
            // const newCarHtml = newCar.renderCars()
           
            carContainer.insertAdjacentHTML("beforeend", newCar.renderCars())
            const createButton = document.createElement('button')
            createButton.innerHTML = 'Add 1'
            document.getElementById(`${newCar.id}.div`).insertAdjacentElement('beforeend', createButton)
            const createP = document.createElement('p')
            document.getElementById(`${newCar.id}.div`).insertAdjacentElement('beforeend', createP)
            createP.innerHTML = '0'
            createButton.addEventListener('click', likeIncrement)

            const createSubtractButton = document.createElement('button')
            createSubtractButton.innerHTML = 'Subtract 1'
            document.getElementById(`${newCar.id}.div`).insertAdjacentElement('beforeend', createSubtractButton)
            createSubtractButton.addEventListener('click', likeDecrease)

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
        const newCar = new Car(car.id, car.name, car.favorite)
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
    }
}


function likeIncrement(e) {

    e.target.nextElementSibling.innerHTML = parseInt(e.target.nextElementSibling.innerHTML) + 1

    
}

function likeDecrease(e) {
    console.log(e)
    
    e.target.previousElementSibling.innerHTML = parseInt(e.target.previousElementSibling.innerHTML) - 1
}


function sortAllCars() {
    
 const sortAll = Car.all.concat([]).sort((a, b) => a.name.localeCompare(b.name))
    document.getElementById('carContainer').innerHTML = ''

    sortAll.forEach((e) => {
        e.makeCarDivs()
        
    })
}



