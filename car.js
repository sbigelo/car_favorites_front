class Car {
    constructor(id, name, favorite) {
        this.name = name;
        this.favorite = favorite;
        this.id = id;
        AppContainer.cars.push(this);
    }


    static byFavorite(favoriteName) {
        return AppContainer.cars.filter(car => car.favorite.name === favoriteName)
    }


}