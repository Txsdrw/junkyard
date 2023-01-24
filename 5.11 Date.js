// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
// // вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.


function getDateAgo(date, days) {
    let dateClone = new Date(date)
    dateClone.setDate(dateClone.getDate() - days)
    return dateClone.getDate()
}

let date = new Date(2015, 0, 2);


// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
    let date = new Date()
    let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
    return seconds
}

function getSecondsToTomorrow() {
    let date = new Date()
    let tomorrow = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), 0, 0, 0)
    return Math.round((tomorrow.getTime() - Date.now()) / 1000)
}

