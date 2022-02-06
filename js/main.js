// Лекция по Ajax ____________________________________________________

// Протоколы
// http - протокол для передачи гипертекста, изначадльно для html
// передача произвольных данных, клиент-серверного взаимодействия
// без сохранения промежуточного состояния

// В роли клиента чаще всего наш браузер, любое устройство

// Http methods:
// GET - запрашивает предоставление ресурса, для извлечения данных,
// только для получения информации, ничего не меняя на сервере - безопасно
// не имеет тела

// POST - имеет тело(в которое добавляем п-ры, кот нужно изменять),
// может менять информацию на сервере, отправка чего - то

// PUT - заменяем данные своими, полностью объект

// PATCH - частичное изменение заданых полей данных

// Запрос/ответ по этому протоколу состоит из таких свойств:
// HTTP STATUS CODES:
// 1xx - Information
// 2xx - Successfull
// 3xx - Redirection
// 4xx - Client Error
// 5xx - Server Error

// Данные передаются открыто и небезопасно для перехвата, поэтому придумали:
// HTTPSecure - https
// Шифрование по средствам криптографических протоколов SSL и TLS
// Сначала идет запрос сертификации, потом уже как http

// Другие протоколы:
//  DHCP, SMTR, POP3, SSH, FTP

// JSON ____________________________________________________________________
// Это формат данных, собственного стандарта. В большинстве языках.
// В js - некая сущность, нельзя вызвать как ф-ю или создать как объект.

// Метод JSON.stringify - передача данных или собрирает обратно парсу:
// JSON.parse - разбирает строку

// AJAX _____________________________________________________________________
// Асинхронный js и xml, набор методов, позволяет работать приложению асинхронно
// Обработка запросов к серверу, в фоновом режиме
// Преимущества:
// - чтение данных с сервера, после загрузки страница
// - обновление страницы без перезагрузки страницы
// - отправка данных на сервер в фоновом режиме

// http запрос состоит из 4х частей:

// - http method (Get, Post...)
// - URL - запрашиваемый адрес
// - headers
// - body

// 3 метода работы с заголовками:
// setRequestHeader(name9, value); // задать по имени запроса со значением
// getResponseHeader(name9); // получить значение заголовка, кроме Set-Cookie
// getAllResponseHeaders(); // получить все хедеры из ответа, кроме Set-Cookie

// Значение хедера нельзя перезаписать, оно будет только добавляться:
// xhr.setRequestHeader('X-Auth', '123');
// xhr.setRequestHeader('X-Auth', '456');

// Пример _________________________________________________________________
// 1. Создаем новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: Get-запрос на Url
// xhr.open('GET', 'url', false); // Инициализация, если false - синхронно, по умолч. асинхронно тру
// 3. Отсылаем запрос
// xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
// Обработать ошибку:
//    console.log(xhr.status + ':' + xhr.statusText); // Пример вывода 404: Not Found
// } else {
//    console.log(xhr.responseText); // Текст ответа
// }

// Promise _______________________________________________________________________________

// Лекция по ES6+ ________________________________________________________________________
console.log(variable);
var variable = 10;
console.log(variable);

// console.log(var2); не всплывает при первом проходе компилятора
let var2 = 11;
console.log(var2);

for (var i = 0; i < 5; i++) {}
console.log(i);

for (let i2 = 0; i2 < 5; i2++) {}
// console.log(i2); let внутри блока не видна снаружи

const a1 = {};
a1.id = 'hello'; // если конст это объект, то ее можно редактировать без проблем
console.log(a1);

const var3 = 5;
// var3 = 10; - выдаст ошибку
console.log(var3);

// Arrow function
let fun = (n) => n + 1;
let bnb = fun(10);
console.log(bnb);

// Обратные ковычки, передавая в строке что угодно:
const multiline = `Here can be any function ${(function () {
   console.log('Hello world');
})()}`;
console.log(multiline);

// Destructuring - Деструктуризация - синтаксиз, чтобы вытаскивать значения из массивов/объектов
// и присваивать сразу переменным
const arr = [1, 2, 3, 4];
const [a, , b, c] = arr; //Объявление переменных а,б,с и присвоение им значений из массива выше
console.log(a, b, c);

let obj = { e: 1, f: 2, g: 3 };
let { e, f, h } = obj;
console.log(e, f, h); // тк h нет, то выведет undefine но не ошибку

// Spread operator - розделяет, Rest operator - отделяет всё что осталось
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head, tail);

let { f2, ...rest } = { a3: 4, f2: 6, u: 9 };
console.log(f2, rest);

// Default values
function sum(a = 1, b = 3) {
   return a + b;
}
console.log(sum(4));

// rest operator as вместо аргументов
function sum2(...vals) {
   console.log(typeof vals);
   return vals;
}

console.log(sum2(1, 2, 3, 4));

// Класс - более продвинутый конструктор объектов, вместо конструктора функций
// с возможностями ООП, создает шаблон объектов
// Сделано по подобию других языков в ООП (почему именно класс называется и синтаксис)
class User {
   constructor(name) {
      this.name = name; //заданный аргумент сохраняет в this.name
   }
   // методы класса сохраняются в User.prototype:
   sayHi() {
      console.log(this.name);
   }
}

// Использование:
let user = new User('Иван');
user.sayHi();
console.log(typeof User); // Класс это функция
// ...или, если точнее, это метод constructor
console.log(User === User.prototype.constructor); // true
// Методы находятся в User.prototype, например:
console.log(User.prototype.sayHi);
console.log(user.sayHi);

// в прототипе ровно 2 метода
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// get & set _________________________________
let user2 = {
   name: 'John',
   surname: 'Smith',

   get fullName() {
      return `${this.name} ${this.surname}`;
   },

   set fullName(value) {
      [this.name, this.surname] = value.split(' ');
   }
};
// При обращении к свойству выведет get
console.log(user2.fullName);

// set fullName запустится с данным значением - перезапишет значение свойства
user2.fullName = 'Alice Cooper';
console.log(user2.fullName);

console.log(user2.name); // Alice
console.log(user2.surname); // Cooper

// Пример работы классов _________________________________________________
class Animal {
   constructor(name, lags) {
      this.name = name;
      this.lags = lags;
   }
   describe() {
      return `${this.name} has ${this.lags} lags`;
   }
}

class Cat extends Animal {
   constructor(name) {
      // вызов родительского конструктора.
      super(name, 4);
   }
   // Ключевое слово super используется для вызова функций, принадлежащих родителю объекта.
   describe() {
      return `${super.describe()} and says meow`;
   }
}

let cat = new Cat('Tom');
console.log(cat.describe());

// Пример с гет/сет ____________________________________
const person = {
   age: 5,
   get myAge() {
      return this.age;
   },
   set myAge(age) {
      this.age = age;
   }
};

console.log(person.myAge);
person.myAge = 25;
console.log(person.myAge);

// ___________________________________________________________________
for (let char of 'Hello') {
   console.log(char); // Выведет каждую букву
}

// Generators - функции, которые не выполняются сразу, а возвращают объект
// Выполнение можно приостановить и потом возобновить
function* getFunc() {
   yield 'a';
   yield 'b';
}

console.log(getFunc());

let fibonacci = {
   *[Symbol.iterator]() {
      let pre = 0,
         cur = 1;
      for (;;) {
         [pre, cur] = [cur, pre + cur];
         yield cur;
      }
   }
};

for (let n of fibonacci) {
   if (n > 10) break;
   console.log(n);
}

// Map - объект с меньшими ограничениями по типу данных в именах ключей
