// Создайте функцию topSalary(salaries), которая возвращает имя самого
// высокооплачиваемого сотрудника использую деструктуризацию и Object.entries

let salaries = {
    "John": 100, "Pete": 300, "Mary": 250
};

function topSalary(salaries) {
    let max = 0
    let name = null
    for (let [item, value] of Object.entries(salaries)) {
        let result = 0
        result = value
        if (max < result) {
            max = result
            name = item
        }
    }
    return name
}

