//1(Burada sualın şərti əgər bizdən Bello World cümləsini Hello world cümləsinə çevirməyimizi istəyirsə onda belə yazırıq):
// const sentence = "Bello World";
// const newSentence = sentence.replace("Bello World", "Hello world");
// console.log(newSentence);

//1-ci məsələ 2-ci metod(Amma əgər ki sualın şərti bizdən Bello World cümləsində olan Bello sözünün ancaq B hərfini H hərfinə dəyişmək 
// istəyirsə qalan hissəni dəyişməmək şərti ilə baxmayaraq ki qalan hissə eynidir onda belə yazırıq):
// const sentence = "Bello world";
// newSentence = sentence.replace("B", "H");
// console.log(newSentence);


//2
// const sentence1 = "Hellu wurld!";
// const newSentence1 = sentence1.replace("Hellu wurld!", "Hello world");
// console.log(newSentence1);

//Burada "Hellu wurld!"-da nida var və burada "Hello world"-da nida yoxdur diyə replace ilə yazdım nida olmasa replace all ilə yazmaq olar.Nida olmasa belə yazmaq olar:
// const sentence1 = "Hellu wurld";
// const newSentence1 = sentence1.replace("u", "o");
// console.log(newSentence1);


//3
// const sentence = "I love javascript";
// const array = sentence.split(" ");
// console.log(array);


//4
// const sentence = " Hey there ";
// const newSentence = sentence.trim();
// console.log(newSentence);


//5
// const user1 = {
//     name: "Test name"
// }
// const user2 = {
//     surname: "Test surname"
// }
// const mergedUsers = { ...user1, ...user2 };
// console.log(mergedUsers);


//6
// const address = {
//     city: "Baku",
//     street: "Ahmad racabli",
//     zip: 1000
// }
// const { city, street, zip } = address;
// console.log(address)


//7
// const user = {};
// Object.defineProperties(user, {
//     name: {
//         value: 'Fuad',
//         enumerable: true,
//         writable: true,
//     },
//     age: {
//         value: 19,
//         enumerable: true,
//         writable: true,
//     }
// });
// console.log(user)


//8
// const car = {
//     brand: "BMW",
//     model: "i8",
//     year: 2023
// };
// const keys = Object.keys(car);
// console.log(keys);


//9
// const user3 = {
//     name: "test",
//     surname: "test"
// };
// Object.seal(user3);
// user3.name = "Fuad";
// user3.surname = "Sultanlı"
// console.log(user3);


//10
// class Car {
//     constructor(brand, year, batteryCapacity) {
//         this.brand = brand;
//         this.year = year;
//         this.batteryCapacity = batteryCapacity;
//     }
// }

// class BMW extends Car {

// }

// class Mercedes extends Car {

// }

// class Volvo extends Car {

// }

// class Alphina extends BMW {
//     constructor(brand, year, batteryCapacity)
// }

// class Brabus extends Mercedes {
//     constructor(brand, year, batteryCapacity)
// }

// class Polestar extends Volvo {
//     constructor(brand, year, batteryCapacity)
// }