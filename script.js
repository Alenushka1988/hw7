//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function findMinimum(a, b){
//     return Math.min(a, b);
// }
// let number1 = 10;
// let number2 = 5;
// let minimum = findMinimum(number1, number2)
// console.log("minimum number is:",minimum)

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function printEvenFromLarge(a, b){
//     let start = Math.max(a, b);
//     let end = Math.min(a, b);

// for(let i= start; i>= end; i--){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// }

// let number1 = 15;
// let number2 = 5;
// printEvenFromLarge(number1, number2);

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power(base, exponent =2){
//     return base**exponent;
// }
// let base = 3;
// let exponent = 4;
// let result=power(base, exponent);
// console.log(`Result: ${base} to the power of ${exponent}=${result}`);

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function sumNumbers(n){
//   let sum = 0;
//   for(let i=1; i<=n; i++){
//     sum +=i;
//   }
//   return sum;
// }

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
// function calculateSums(n, m){
//     let evenSum = 0;
//     let oddSum = 0;
//     for( let num = n;num<=m; num++){
//         if(num%2 ===0){evenSum += num;
//         }else{
//             oddSum +=num;
//         }
//     }
//     console.log(`evenSum from ${n}to${m}:${evenSum}`);
//     console.log(`oddSum from ${n} to ${m}:${oddSum}`);
// }
// let n =1;
// let m =10;
// calculateSums(n, m);

//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'
function findLongestString(arr){
    if(arr.length ===0){
        return null;
    }
    let longest = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i].length>longest.length){
            longest =arr[i];
        }
    }
    return longest;
}
let array=[`one`,` two`, `three`];
let longestString=findLongestString(array);
console.log(longestString);
