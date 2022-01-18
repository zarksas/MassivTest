const arrayNum = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];
let arrRes = []
for (let i = 0; i < arrayNum.length; i++) {
   if (Array.isArray(arrayNum[i])) {
       arrRes.push(arrayNum[i])
   }
}
console.log(arrRes)