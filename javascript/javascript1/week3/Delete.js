//Item array removal
const names = [
          "Peter",
          "Ahmad",
          "Yana",
          "Kristina",
          "Rasmus",
          "Samuel",
          "Katrine",
          "Tala",
];
const nameToRemove = "Ahmad";

const index = names.indexOf(nameToRemove);
names.splice(index, 1);
console.log(names);
