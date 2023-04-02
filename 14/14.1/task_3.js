/* 3. 
Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.
Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод
observe(handler),
который позволяет запускать handler при любом изменении свойств.

При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.

P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции
могут быть реализованы похожим образом.
*/
'use strict'

let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];
    target.observe = function (handler) {
        this[handlers].push(handler);
    };
    return new Proxy(target, {
        set(target, prop, value, receiver) {
            let success = Reflect.set(...arguments);
            if (success) {
                target[handlers].forEach(handler => handler(prop, value));
            }
            return success;
        }
    });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
});

user.name = "John";