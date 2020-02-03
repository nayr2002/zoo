var allAnimals = [];
var population = 0;

$(document).ready(function(){
    var bob = new pig("Bob");
    var otis = new cow("Otis");
    var al = new chicken("Al");
    var billy = new goat("Billy");
    var donald = new duck("Donald");
    var shaun = new sheep("Shaun");
    listAnimals();
});

function createAnimal() {
    var name = $("#name").val();
    var type = Number($("#types").val());
    var animal;
    switch(type){
        case 1:
            animal = new pig(name);
            break;
        case 2:
            animal = new cow(name);
            break;
        case 3:
            animal = new chicken(name);
            break;
        case 4:
            animal = new goat(name);
            break;
        case 5:
            animal = new duck(name);
            break;
        case 6:
            animal = new sheep(name);
            break;
        case 7:
            animal = new tiger(name);
            break;
        case 8:
            animal = new elephant(name);
            break;
    }
    listAnimals();
    $("#results").css("display", "inline-block");

    $(".bg-image").css("filter", "blur(4px)");
    $("#feed").append(name + " has been brought into the world" + "<br><br>");
}

class animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        population++;
        allAnimals.push(this);
    }

    sleep(){
        $("#feed").append(this.name + " sleeps for 8 hours" + "<br><br>");
    }

    eat(food){
        $("#feed").append(this.name + " eats " + food + "<br>");
        if(food === "cheetos"){
            $("#feed").append(this.name + " thinks cheetos are pretty epic" + "<br>");
            this.sleep();
            return;
        }
        if(food === this.favoriteFood) {
            $("#feed").append(this.name + " likes it!" + "<br><br>");
        } else {
            $("#feed").append(this.name + " doesn't like " + food + "<br><br>");
        }
    }
}

class pig extends animal {
    constructor(name){
        super(name, "vegetable scraps");
    }
}

class cow extends animal {
    constructor(name){
        super(name, "grass");
    }
}

class chicken extends animal {
    constructor(name){
        super(name, "poultry feed");
    }
}

class goat extends animal {
    constructor(name){
        super(name, "grass");
    }
}

class duck extends animal {
    constructor(name){
        super(name, "poultry feed");
    }
}

class sheep extends animal {
    constructor(name){
        super(name, "grass");
    }
}

class tiger extends animal {
    constructor(name){
        super(name, "steak");
    }

    eat(food){
        if(food === "steak"){
            $("#feed").append(this.name + " eats " + food + "<br>" + this.name + " loves steak!" + "<br><br>");
        } else {
            var eaten = allAnimals[Math.floor(Math.random() * allAnimals.length)];
            $("#feed").append(this.name + " Wants a nice steak" + "<br>");
            if(eaten.name === this.name){
                $("#feed").append(this.name + " ate themself in confusion" + "<br><br>");
            } else {
                $("#feed").append(this.name + " thinks " + eaten.name + " will do" + "<br>" + eaten.name + " was eaten by " + this.name + "<br><br>")
            }
            deleteAnimal(eaten.name);
        }
    }
}

class elephant extends animal{
    constructor(name){
        super(name, "peanuts");
    }

    eat(food){
        if(food === "peanuts"){
            $("#feed").append(this.name + " eats " + food + "<br>" + this.name + " loves peanuts!" + "<br><br>");
        } else {
            var stomped = allAnimals[Math.floor(Math.random() * allAnimals.length)];
            $("#feed").append(this.name + " doesn't like " + food + " and is angry" + "<br>" + this.name + " stomps on " + stomped.name + "<br>" + stomped.name + " has left the game" + "<br><br>");
            deleteAnimal(stomped.name);
        }
    }
}

function idDeleted(){
    var deleted = $("#idDeleted").val();
    if(deleted === ""){
        alert("Please choose an animal");
    } else {
        deleteAnimal(deleted);
        $("#results").css("display", "inline-block");
        $(".bg-image").css("filter", "invert(100%)")
        $("#feed").append(deleted + " has left the game" + "<br><br>");
    }
}
function deleteAnimal(name){
    for (var i = 0; i < allAnimals.length; i++){
        if(name === allAnimals[i].name){
            allAnimals.splice(i, 1);
            console.log(allAnimals);
        }
    }
    listAnimals();
}

function listAnimals(){
    var list = "";
    for(var i = 0; i < allAnimals.length; i++){
        list += (allAnimals[i].name + ", a " + allAnimals[i].constructor.name + " who likes " + allAnimals[i].favoriteFood + "<br>");
    }
    $("#list").html(list);
}

function feedAnimals(){
    $("#results").css("display", "inline-block");
    $(".bg-image").css("filter", "blur(4px)");
    $("#feed").empty();
    var food = Number($("#food").val());
    switch(food){
        case 1:
            food = "vegetable scraps";
            break;
        case 2:
            food = "poultry feed";
            break;
        case 3:
            food = "grass";
            break;
        case 4:
            food = "cheetos";
            break;
        case 5:
            food = "steak";
            break;
        case 6:
            food = "peanuts";
            break;
    }
    for(var i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
    }
}
