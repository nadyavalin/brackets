"use strict"
module.exports = function check(str, bracketsPairs) {
  // разбиваем str на массив символов
  // используем метод reduce для каждого элемента нового массива и аккумулируем результаты в acc
  return str.split('').reduce((acc, currentBracket) => {
    // создаем переменную, которая находит пару скобок, содержащую текущую скобку 
    const brackets = bracketsPairs.find(pair => pair.includes(currentBracket));

    if (brackets[0] === brackets[1]) { // если открывающая и закрывающая скобки равны
      // если последний элемент равен текущей скобке, значит есть пара
      if (acc.length > 0 && acc[acc.length - 1] === currentBracket) {
        acc.pop(); // удаляем последнюю скобку из acc
      } else {
        acc.push(currentBracket); // иначе добавляем текущую скобку в acc
      }
    } else { // если же открывающая и закрывающая скобки различны
      if (brackets[0] === currentBracket) { // если текущая скобка открывающая
        acc.push(currentBracket); // добавляем скобку в acc
      } else { // иначе текущая скобка является закрывающей
        // проверяем, что acc не пуст и последняя скобка соответствует открывающей скобке
        if (acc.length === 0 || acc.pop() !== brackets[0]) {
          acc.push(currentBracket); // добавляем текущую закрывающую скобку в acc
        }
      }
    }
    return acc;
  }, []).length === 0; // проверяем, что acc пуст после обработки всех символов строки - true, иначе - false
}