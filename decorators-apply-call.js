// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
    console.log(a + b);
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args)
        return func.apply(this, args)
    }

    wrapper.calls = []
    return wrapper
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}


// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

function f(x) {
    console.log(x);
}

function delay(func, time) {
    return function (...str) {
        setTimeout(() => {
            func.apply(this, [str])
        }, time)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test", "hello"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс


//Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function show(x) {
    console.log(x)
}

function debounce(func, ms) {
    let timer = false
    return function (...args) {
        if (timer) return
        func.apply(this, args)
        timer = true
        setTimeout(() => timer = false, ms)
    }

}

let f = debounce(show, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)