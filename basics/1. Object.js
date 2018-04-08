/*-------------------------------------------------------------
# Objects
-------------------------------------------------------------*/

// empty object
var emptyObj = {};

// example Object
var car = {
    type:"Fiat",
    model:"500",
    color:"white"
};

// access object property
car.type
// or -> good for property with special chars
car["type"]

// add property to en object
car.year = "2017"

// remove property
delete car.year

// Reference object (its not a copy of an object its the same object asigned to another var)
car2 = car;

/*-------------------------------------------------------------
    Object
-------------------------------------------------------------*/

var developer = {
    name: "Ivan Milincic",
    age: 35,
    location: "Belgrade",
    type: "Full Stack",
    views: 0,
    updateViews: function() {
        return ++developer.views;
    }
};

console.log(developer);

console.log(developer.views);
developer.updateViews();
console.log(developer.views);


/*-------------------------------------------------------------
    Object Constructors
-------------------------------------------------------------*/
// first letter capital
function Developer(name,age,location,type,views) {

    this.name = name;
    this.age = age;
    this.location = location;
    this.type = type;
    this.views = views;

    this.updateViews = function() {
        return ++this.views;
    }

}

// create object
var developer01 = new Developer("Mr. Robot", 25, "USA", "Hacker", 0);
var developer02 = new Developer("Eliot Alderson", 28, "WorldWide", "DevOps", 123124);
console.log(developer01);
console.log(developer02);

// create array of objects
var developers = [
    new Developer("Mr. Robot", 25, "USA", "Hacker", 0),
    new Developer("Eliot Alderson", 28, "WorldWide", "DevOps", 12345)
];

console.log(developers);
console.log(developers[0].name);
console.log(developers[1].updateViews());
