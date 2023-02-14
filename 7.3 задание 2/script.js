// Задание 2 модуль 7.3


let user = {
   name: 'Alex',
   age: 18,
   city: "LA",
}
function checkAvailabilityKeyInObject(string, object) {
   if (object.hasOwnProperty(string)) {
      return "true";
   } else {
      return "false";
   }
}
console.log(checkAvailabilityKeyInObject('name', user));