function mouse(name) {
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = function() {
    this.dead = true;
}
module.export = mouse;