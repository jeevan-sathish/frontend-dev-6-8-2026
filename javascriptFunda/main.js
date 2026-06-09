// for-of iterrates over the values such as object,arrays,strings,sets etc

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

for (const f of fruits) {
  console.log(f);
}

// for-in iterates over the keys,like indexs of arrays,properties of objects
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

for (const f in fruits) {
  console.log(fruits[f]);
}

// foreach works for array iterating the values inside array and execute the fuction for each element
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

fruits.forEach((ele, index) => {
  console.log(ele, index);
});

//for loop
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//while loop
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
