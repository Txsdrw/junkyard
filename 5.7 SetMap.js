    //   Фильтрация уникальных элементов массива с помощью SET

    function unique(arr) {
        let set = new Set(arr)
        return Array.from(set)
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];


    //Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

    // отсортированные строки используются как ключи в коллекции Map,
    // для того чтобы сопоставить каждому ключу только одно значение

    function aclean(arr) {
        let map = new Map()

        for (let item of arr) {
            let sorted = item.toLowerCase().split('').sort().join('')
            map.set(sorted, item)
        }
        return Array.from(map.values())
    }

    let annArr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

