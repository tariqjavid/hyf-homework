//Item array removal
const names = ['Peter', 'Ahmad', 'Yana', 'Kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala'];
const nameToRemove = 'Ahmad';

for (var i = 0; i < names.length; i++) {
    if (names[i]===nameToRemove) {
      names.splice(i, 1);  
    }
}      
document.write(names); 

