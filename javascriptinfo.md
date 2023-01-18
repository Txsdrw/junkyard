 +   Фильтрация уникальных элементов массива с помощью SET


Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

```javascript
    function unique(arr) {
        let set = new Set(arr)
        return Array.from(set)
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
```