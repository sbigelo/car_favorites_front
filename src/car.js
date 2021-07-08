class Car {
    constructor(id, name, favorite) {
        this.id = id;
        this.name = name;
        this.favorite = favorite;
        Car.all.push(this);
    }

    renderCars() {
        
        return `
         <div data-id=${this.id} id=${this.id}.div>
            <p>${this.name}</p>
            <p>${this.favorite.name}</p>
            <button data-action='delete' id="delete">Delete</button>
        </div>
        <br><br>
        `

    }


makeCarDivs() {
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
}


    // renderCars() {
    //     const hypercarSelect = document.getElementById('hypercars')
    //     const supercarSelect = document.getElementById('supercars')
    //     const regularcarSelect = document.getElementById('regularcars')
    //     hypercarSelect.innerText = ""
    //     regularcarSelect.innerText = ""
    //     supercarSelect.innerText = ""

    //     AppContainer.cars.forEach(car => {

    //         const option = document.createElement('option')
    //         option.innerText = car.name


    //         switch (car.favorite.name) {
    //             case "hypercars":
    //                 hypercarSelect.appendChild(option)
    //                 break;
    //             case "supercars":
    //                 supercarSelect.appendChild(option)
    //                 break;
    //             case "regularcars":
    //                 regularcarSelect.appendChild(option)
    //                 break;
    //             default:

    //         }

    //     })

    // }




    // static byFavorite(favoriteName) {
    //     return AppContainer.cars.filter(car => car.favorite.name === favoriteName)
    // }


}



Car.all = []