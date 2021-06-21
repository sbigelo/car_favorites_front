class Car {
    constructor(id, name, favorite) {
        this.name = name;
        this.favorite = favorite;
        this.id = id;
        Car.all.push(this);
    }

    renderCars() {
        
        return `
         <div data-id=${this.id}>
            <p>${this.name}</p>
            <p>${this.favorite.name}</p>
            <button data-action='delete' type="submit" name="submit" class="submit">Delete</button>
        </div>
        <br><br>
        `

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




    static byFavorite(favoriteName) {
        return AppContainer.cars.filter(car => car.favorite.name === favoriteName)
    }


}

Car.all = []