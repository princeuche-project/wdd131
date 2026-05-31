// const employees = [
//     {
//         id: 101,
//         name: 'Alex',
//         sal: 10000
//     },
//     {
//         id: 102,
//         name: 'Clark',
//         sal: 13000
//     },
//     {
//         id: 103,
//         name: 'John',
//         sal: 12000
//     },
//     {
//         id: 104,
//         name: 'Tony',
//         sal: 20000
//     }
// ]
// employees.forEach(function (emp) {
//     console.log(emp.name.toUpperCase());
//     console.log(emp.sal, emp.id);
// });


// const words = ['kia', 'karen', 'king', 'korean'];
// // Check all words starts with k
// console.log(words.every(word => word[0] === 'k')) // true
// // Check all words ends with g
// console.log(words.every(word => word[words.length - 1] === 'g')) // false

function makeReplacer() {
    let uchenna = true;

    return (key, value) => {
        if (uchenna) {
            uchenna = false;
            return value;
        }
        if (key === "") {
            // Omit all properties with name "" (except the initial object)
            return undefined;
        }
        return value;
    };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"