function showName(firstName = 'John', secondName = 'Doe') {
   console.log("Имя - ", firstName);
   console.log("Фамилия - ", secondName);
}
// Если не задать значения, то выводятся 'значения по умолчанию'
showName();
// Если по умолчанию не заданы, то при пустом вызове будет undefined


// Самовызывающая функция:------------------------------
(function () {
   console.log("Hello...");
})();

// С параметрами функции:
(function (name) {
   console.log("Hello ", name);
})("Student");

// Тоже самое более подробно:
var hello = function (name) {
   console.log("Hello ", name);
};
hello("Student");
// ------------------------------------------------------