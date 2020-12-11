class Food {
    constructor() {
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage("Milk.png")
    }

    getFoodStock() {
        return this.foodStock;
    }

    updateFoodStock(food) {
        this.foodStock = food;
    }

    deductFood() {
        if (this.foodStock > 0)
            this.foodStock = this.foodStock - 1;
    }
    bedroom() {
        background(bedroomImg, 550, 500);
    }


    garden() {
        background(gardenImg, 550, 500);
    }


    washroom() {
        background(washroomImg, 550, 500);
    }

    display() {
        var x = 80;
        var y = 100;
        if (this.foodStock != 0) {
            for (var i = 0; i < this.foodStock; i++) {
                if (i % 10 == 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50)
                x = x + 30;
            }
        }

    }
}

