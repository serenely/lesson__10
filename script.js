// let a = 7,
//     v = a;

// v = v + 7;


// console.log(v);
// console.log(a);

// const obj = {
//     a: 7,
//     v: 8
// };

// // const copy = obj; // Cсылка / передача по ссылке

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 4,
//     b: 2,
//     c: {
//         x: 6,
//         y: 3

//     }

// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);

// console.log(numbers);

// const add = {
//     d: 87,
//     e: 11
// };

// // console.log(Object.assign(numbers, add));// добавляеь один обьект в другой

// const clone = Object.assign({}, add);

// clone.d = 22;

// console.log(add);

// console.log(clone);



const oldArray = ['z', 'x', 'c'];

const newArray = oldArray.slice(); // метод который позволяет скопировать старый массив

newArray[2] = 'n';

console.log(newArray);
console.log(oldArray);

const audio = ['appleMusic', 'youtubeMusic', 'soundCloud'],
    sm = ['instagram', 'tiktok', 'telegram'],
    internet = [...audio, ...sm, 'fb', 'vk']

console.log(internet);

function log(a, d, b ){
    console.log(a);
    console.log(d);
    console.log(b);

};

const num = [2, 4, 7];

log(...num);

const array = [1, 2, 3]

const newArr = [...array];