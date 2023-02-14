// Задание 1 модуль 7.3
// Не знал можно ли использовать метод Object.entries, 
// который, как я понял, и так выводит собственные элементы, 
// поэтому сделал два варианта.
let prototip = {
   age: 18,
   city: "LA"
}

let user = Object.create(prototip);
user.name = 'Saha';
console.log(user);

function getOwnKeysAndValues(object) {
   for (let [key, value] of Object.entries(object)) {
      console.log(`${key}: ${value}`);
   }
}
getOwnKeysAndValues(user);

// Вариант 2
let prototip = {
   age: 18,
   city: "LA"
}
let user = Object.create(prototip);
user.name = 'Saha';
console.log(user);

function getOwnKeysAndValues(object) {
   for (let key in object) {
      if (object.hasOwnProperty(key)) {
         console.log(`${key}: ${object[key]}`);
      }
   }
}
getOwnKeysAndValues(user);