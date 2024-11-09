/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    const strArray = str.split('');

    const doubleStrArray = []

    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index] + strArray[index];
        doubleStrArray.push(element)
    }

    const doubleStr = doubleStrArray.join('')
    return doubleStr
}

console.log(doubleEachCharacter("hello"));
