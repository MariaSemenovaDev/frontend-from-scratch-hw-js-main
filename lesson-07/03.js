/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/


function truncate(str, maxLength) {
  const arrStr = str.split('')//создали массив с отдельным символом
  if(arrStr.length <= maxLength){
    return str
  } else {
    const newArr = arrStr.slice(0, maxLength)//создали копию массива укороченную
    const newStr = newArr.join("")
    return `${newStr}...`
  }
}
// console.log(truncate("Вот, что мне действительно нравится в этом", 20, 10));