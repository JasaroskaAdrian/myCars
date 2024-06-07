function car (brand, model, yearOfManufacture, seats) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = null;
        this.seats = 5;
        this.desc = function getDescription(params) {
                document.write("Brand: " + this.brand + "<br>Model: " + this.model + "<br>The Year of Manufacture: " + this.yearOfManufacture + "<br>Amount of Seats: " + this.seats)
        }
    }
var myCar = new car("Volvo", "ASX")
document.write("<p>This is one of our latest released Motor Cars: <br> <br>")
myCar.desc()

function ElectricCar (brand, model, yearOfManufacture, seats, batteryRange) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacture = null;
    this.seats = 5;
    this.batteryRange = 270;
    this.desc = function getDescription(params) {
            document.write("Brand: " + this.brand + "<br>Model: " + this.model + "<br>The Year of Manufacture: " + this.yearOfManufacture + "<br>Amount of Seats: " + this.seats + "<br>The Battery ranges upto:" + this.batteryRange + " km")
    }
}
var myElectricCar = new ElectricCar("Tesla", "S")
document.write("<p>This is one of our latest released Electric Cars: <br> <br>")
myElectricCar.desc()


