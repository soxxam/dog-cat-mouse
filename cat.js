import mouse from "./mouse.js";

function cat() {
    this.stomach = [];
}

cat.prototype.eat = function(animal) {
    if (animal instanceof mouse) {
        this.stomach.push(animal);
    } else {
        throw new Error('Cat can only eat mouse!');
    }

};

export default cat;