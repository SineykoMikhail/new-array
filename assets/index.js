// const array1 = ["1", "2", "3"];
// const array2 = ["4", "5", "6"];
// const array3 = array1.concat(array2);
// console.log(array3);

// const array1 = ["1", "2", "3"];
// console.log("array1:", array1);
// const reversed = array1.reverse();
// console.log("array1:", array1);

// const num = [1, 2, 3];
// const num2 = num.push(4, 5, 6);
// console.log(num)

// const num = [1, 2, 3];
// num.unshift(4, 5, 6);
// console.log(num);

// const array1 = ["js", "css", "jq"];
// console.log("Элементы до:" + array1);
// const shifted = array1.shift();
// console.log("Элементы после:" + array1);
// console.log("Удален этот элемент:" + shifted);

// const array1 = [1, 2, 3, 4, 5];
// console.log(array1.slice(0, 3));

// const array1 = [1, 2, 3, 4, 5];
// console.log(array1.slice(3, 6));

// const array1 = [1, 2, 3, 4, 5];
// array1.splice(1,2);
// console.log(array1);

// const array1 = [1, 2, 3, 4, 5];
// const removed = array1.splice(1, 3);
// console.log(removed);

// const array1 = [1, 2, 3, 4, 5];
// array1.splice(3,0, 'a','b', 'c' );
// console.log(array1);

// const array1 = [1, 2, 3, 4, 5];
// array1.splice(1, 0, "a", "b");
// array1.splice(6, 0, "с");
// array1.splice(8, 0, "e");
// console.log(array1);

// const array1 = [3, 4, 1, 2, 7];
// array1.sort();
// console.log(array1);

// const users = [
//   { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
// ];
// users.forEach((element) => console.log(element));

// const users = [
//   { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
// ];
// users.map((user) => (user.telephoneNumber = "123456"));
// console.log(users);

// const users = [
//   { firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//   { firstName: "Logina", lastName: "Consolevna", age: 42, gender: "female" },
//   { firstName: "Undefined", lastName: "Undefinovich", age: 99 },
//   { firstName: "Null", lastName: "Nullovich", gender: "male" },
// ];
// const result = users.filter((user) => user.gender === "female" && user.age > 18);
// console.log(result);

// const array1 = [1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]];
// const array2 = array1.flat(Infinity);
// console.log(array2);
