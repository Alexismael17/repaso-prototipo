class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    mas(vector) {
        let VectorPrototipo = new Vector()
        VectorPrototipo.x = this.x + vector.x;
        VectorPrototipo.y= this.y + vector.y;
        return VectorPrototipo
    }
    menos(vector) {
        let VectorPrototipo = new Vector()
        VectorPrototipo.x = this.x - vector.x;
        VectorPrototipo.y= this.y - vector.y;
        return VectorPrototipo
        }

    get longitud() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
    
console.log(new Vector(1, 2).mas(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).menos(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).longitud);
// → 5


