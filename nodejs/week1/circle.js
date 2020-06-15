class Circle {
          constructor(radius) {
                    this.radius = radius;
          }

          getDiameter() {
                    return 2 * this.radius;
          }
          getArea() {
                    return Math.PI * Math.pow(this.radius, 2);
          }
          getCircumference() {
                    return 2 * Math.PI * this.radius;
          }
}

const circle1 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle1.getArea());
console.log(circle1.getCircumference());
