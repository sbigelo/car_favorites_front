const link = "http://localhost:3000/cars"

document.addEventListener('DOMContentLoaded', () => {
    getCars()

    const newCars = document.getElementById('newCars')

    newCars.addEventListener('submit', this.createFormHandler.bind(this))

    const carContainer = document.getElementById('carContainer')

    carContainer.addEventListener('click', deleteCars)
});

function getCars() {
    // debugger
    fetch(link)
    .then(resp => resp.json())
    .then(cars => {
       
        cars.forEach(car => {
            let newCar = new Car(car.id, car.name, car.favorite)
            document.getElementById('carContainer').innerHTML += newCar.renderCars()
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

function postFetch(name, favorite_id) {
 
  
  
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
    .then(cart => {
        let carContainer = document.getElementById('carContainer')
        let newCar = new Car(cart.id, cart.name, cart.favorite)
        console.log(cart)
        
        carContainer.innerHTML += newCar.renderCars()
        
    })
}


function deleteCars(e) {
    e.preventDefault();
    const id = e.target.parentElement.dataset.id
    const url = link + "/" + id
    fetch(url, {
        method: "DELETE"
    })
    e.target.parentElement.remove()
}

