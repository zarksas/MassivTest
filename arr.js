const arrayNum = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];
let arrRes = []
for (let i = 0; i < arrayNum.length; i++) {
   if (Array.isArray(arrayNum[i])) {
       arrRes.push(arrayNum[i])
   }
}
console.log(arrRes);


let people = [{name: 'Bradly', age: 74}, {name: 'Juliya', age: 20}, 
{name: 'Walter', age: 35}, {name: 'Kristen', age: 12}, {name: 'Sam', age: 2}];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name)
};

for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        console.log(people[i].name)
    }
};

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 65) {
        console.log(people[i].name)
    }
};

function addPeople(names, age) {
    people.push({names, age});
   
};

addPeople('frank', 12);
console.log(people);

function getPositiveArr(arr) {
    let arrNev = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrNev.push(arr[i])
        }
    }
    return arrNev
}

let arr = [10, -12, 231, 1, -32, -0.001, 75]; 

console.log(getPositiveArr(arr))

