// Урок по книге, т.к. лекции не было

window.onload = init;
function init() {
   console.log('check it');

   // получить элемент по ID:
   let headElement = document.getElementById('main-heading');

   // Посмотреть содержимое заголовка:
   console.log(headElement.innerHTML);

   // let secHead = document.getElementById('second-head');
   // newText = prompt('Input new value');
   // Меняем содержимое:
   // secHead.innerHTML = newText;

   // Тоже самое с jquery
   // $('#second-head').text(newText);
   // $('#11') - селктор элемента - находим по id в примене
   // text - метод jQuery-объекта с новым заголовком в качестве аргумента

   // Метод apend - передать код, вставить элемент
   $('body').append('<p>Это новый параграф</p>'); // Вставит в конец бади

   // Добавляем в цикле несколько элементов
   // for (var i = 0; i < 3; i++) {
   //    var hobby = prompt('Назови одно из своих хобби!');
   //    $('body').append('<p>' + hobby + '</p>');
   // }

   for (i = 0; i < 3; i++) {
      $('h1').fadeOut(1000);
      $('h1').fadeIn(1000);
   }

   // fadeOut - Плавное угасание и убирает из ДОМ
   // Вызов нескольких методов подряд наз-ся "цепной вызов"
   $('#fadeout-text')
      .text('Этот текст скоро исчезнет')
      .fadeOut(2000)
      .fadeIn(2000)
      .slideUp(1000)
      .slideDown(1000);
   $('#fadeout-text2').text('Этот текст скрывается').hide(2000).show(3000);

   // #1
   let friends = ['Roma', 'Van9', 'Ihor', 'Sasha'];
   for (i = 0; i < friends.length; i++) {
      $('body').append(`<p>${friends[i]}</p>`);
   }
   $('p').append(' лучший!');

   // #3
   $('#second-head').fadeOut(1000).delay(1000).fadeIn(1000);

   // 4 - прозрачность за 2 секунды
   $('h3').fadeTo(2000, 0.5);
}

// 156
