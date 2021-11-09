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
            <p class="bold">${this.name}</p>
            <p class="bold">${this.favorite.name}</p>
            <button data-action='delete' class="button" id="delete">Delete</button>
             <br><br><br>
             <p id="starP"></p>
             <button id="starButton" class="button" type="button">Star</button>
             <br><br>
             <p id="likeCount">0</p>
             <button id="likeButton" class="button" type="button">Like</button>
             <button id="dislikeButton" class="button" type="button">Dislike</button>
             <ul></ul>
        </div>
        `
    }
}



Car.all = []