/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  const array = str.split(" ")// дал нам массив слов
for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1)
}

return array.join(" ")
}

console.log(capitalizeWords("a"));

