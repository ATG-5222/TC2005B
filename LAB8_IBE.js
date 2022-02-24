//Promedio de un arreglo de números
const array1 = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];
let sum = 0;
for(let item of array1){
   sum += item;
}
prom = sum/array1.length;
console.log(prom);