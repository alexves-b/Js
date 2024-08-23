// вспомогательная функция для проверки на число
function checkNumber(value) {
    return typeof value == 'number';
  }
  
  // декоратор, проверяющий типы для f
  // второй аргумент checks - массив с функциями для проверки
  function typeCheck(f, checks) {
    return function() {
      for (var i = 0; i < arguments.length; i++) {
        console.log("checks[i](arguments[i])=" + checks[i](arguments[i]) + " i=" + i);
        if (!checks[i](arguments[i])) {
          console.log( "Некорректный тип аргумента номер " + i );
          return;
        }
      }
      return f.apply(this, arguments);
    }
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  // обернём декоратор для проверки
  sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа
  
  // пользуемся функцией как обычно
  console.log( sum(1, 2) ); // 3, все хорошо
  
  // а вот так - будет ошибка
  sum(true, null); // некорректный аргумент номер 0
  sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1