/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    const uniqueElements = array.filter((element, index) => {
        return array.indexOf(element) === index
    })
     return uniqueElements
}

console.log(findUniqueElements([1, 2, 3, 2, 1, 4]));


    

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     function includesElement(array, element) {
    //         for (let index = 0; index < array.length; index++) {
    //             if(array[index] === element){
    //                 return true
    //             }
    //         }
    //         return false
    //     }
    //         if includesElement(array, element) {
    //                 uniqueElements.push[]
    //         }
    // }


