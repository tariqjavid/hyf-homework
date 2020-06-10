class circle {
          constructor(radius) {
                    this.radius = radius;
          }

          getDiameter() {
                    return 2 * this.radius;
          }
          getArea() {
                    return Math.PI * this.radius * this.radius;
          }
          getCircumference() {
                    return 2 * Math.PI * this.radius;
          }
}

const c1 = new circle(10);

console.log(c1.getDiameter());
console.log(c1.getArea());
console.log(c1.getCircumference());
