import cat from "./cat.js";
import mouse from "./mouse.js";
import Dog from "./dog.js";

var cat1 = new cat();
var mouse1 = new mouse("Mickey");
var dog1 = new Dog()

try {
    cat1.eat(dog1);
} catch (error) {
    console.log("Error while cat eating a dog");
}

console.log(cat1);