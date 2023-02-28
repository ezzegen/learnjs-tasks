function makeUser(name, age) {
    return {
        name,
        age
        // ...другие свойства
    };
}

let user = makeUser("John", 30);
console.log(user);