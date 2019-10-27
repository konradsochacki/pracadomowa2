// function funkcja(x,y){
//     result= x+y;
//     return result;
// }

// console.log (funkcja (2,4))
// Zadanie 1

//Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

// let newArray= [1,6,23,8,4,8,3,7];

//     function suma (newArray){
//         let sum = 0;
//         for (let i=0; i<newArray.length; i++)
//         sum= sum += newArray[i];
//         return sum;
//     }
//     console.log(suma(newArray));

/////////////////////////////////////

//zadanie 2

// Create a function that returns sum of first and last elements of given array.

// let newArray = [1,6,23,8,4,8,3,7];
// let last = newArray.length-1;

// function sum (x,y){
//     return x+y;
// }

// console.log(sum(newArray[0],last))

//////////////////////////////////////

// Zadanie 3

// Create a function that takes a number and return factorial of that number.

// let basicArray = [1,6,23,8,4,8,3,7];

// function factorial (x){

// let number = x[Math.floor(Math.random()*x.length)]; 
// let sum=1;

// while (number > 0)
// {
//     sum *= number--;
// }
//     return sum;
// }

// console.log(factorial(basicArray));


///////////////////////////////////////

// Zadanie 4 

// Create a function that returns given array in reverse order. 

// let basicArray = [1,6,23,8,4,8,3,7];

// function reverse(x){
// let newArray = [];
// let long = x.length;
// for (let i=long; i>0; i--){
// newArray.push(x[i-1]);
// }
// return newArray
// }

// console.log(reverse(basicArray));

///////////////////////////////////////////////
 // Zadanie 5

//  Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    
//  [1,3,4,1,0,3] => [4,5,3] function(array)=>array


// let basicArray = [1,3,4,1,0,3];

// function sum (basicArray){
// let newArray=[]
// for (let i=0; i<basicArray.length; i+=2){
//     newArray.push(basicArray[i] + basicArray[i+1]);
// }
// return newArray;
// } 

// console.log(sum(basicArray))

/////////////////////////////////////////////////////////////
// Zadanie 6

//For time of this example remove last element from the given array. 
//Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// let basicArray = [1,3,4,1,0];


// function sum (x){
// let newArray=[]
// for (let i=0; i<x.length; i+=2){
//     if (x[i]>x[x.length-1])
//     newArray.push(x[i] + x[i+1])
//     else
//     newArray.push(x[x.length-1] + x[x.length-1])
// }
// return newArray;
// } 

// console.log(sum(basicArray))




/////////////////////////////////////////////////////////////
 // Zadanie 7

//Create a function the return one random element from given array. // use random function 

// let basicArray = [1,6,23,8,4,8,3,7];

// function losowa (x){
//   return x[Math.floor(Math.random()*x.length)]; 
// }

// console.log(losowa(basicArray));

////////////////////////////////////////////////////////////
// Zadanie 8
//Create a function that takes two parameters: array and number off attempts. 
//Based on number of attempts choose a random number from table that many times and return lowest one.

// let basicArray = [1,6,23,8,4,8,3,7];

// function lotto (basicArray,attempts){

// let attempt = attempts-1;
// let newArray = [];
// let ite= 0;
// while (ite <= attempt){
//     ite++;
//     let rand = basicArray[Math.floor(Math.random()*basicArray.length)]
//     newArray.push(rand);}
// console.log(newArray)

// let min = newArray[0];
// for (let i=1; i<newArray.length; i++){
//     howMany=newArray[i];
//     if (min > howMany)
//     {min = howMany}
// }
// console.log("najniższa wartość, to: ");
// return min;
// }
// console.log(lotto(basicArray,8))


/////////////////////////////////////////////////////////////
// Zadanie 9
//Create a function that takes given array. Then takes a random element, removes it from 
//the array and pushes it to result arrays. This takes place as long as there are elements in source array. 

// let basicArray=[1,6,23,8,4,8,3,7];
// let result=[];
// let long = basicArray.length-1;
// let ite = 0;

//     do {
//         ite++;
//         let item = basicArray[Math.floor(Math.random()*basicArray.length)];
//         let dupa = basicArray.indexOf(item);
//        result.push(item);
//        basicArray.splice(dupa,item);
//        console.log(result, basicArray)}
//     while (ite<long)

// console.log(moveSelected(basicArray, result))

//////////////////////////////////////////////////////////////

//     let arr=[1,6,23,8,4,8,3,7];
//     let arrLeng=arr.length;
    
//     function takesArr(arrIn) {
//         let resultArr = [];
//         let i = 0 
       
        
//        while( i < arrIn.length){
//         let randIn = arrIn.splice(Math.floor(Math.random()*arrIn.length), 1);
//              resultArr.push(randIn[i]);
//            console.log(resultArr);
//        };
              
//     };
//  takesArr(arr);

////////////////////////////////////////////////////////////////
// Zadanie 11
// Create a function that will return the current day name in Polish. 

// function PolishDay() {
//   let day = [
//     "Niedziela",
//     "Poniedziałek",
//     "Wtorek",
//     "Środa",
//     "Czwartek",
//     "Piątek",
//     "Sobota",
//   ];
//  return day[new Date().getDay()];
// }

// console.log(PolishDay());

/////////////////////////////////////////////////////////////////////

// Zadanie 12

//Create a function that tells us how many days till Friday



function Friday() {
    let dzien= new Date();
    let dzisiaj=dzien.getDay();
  return  dzisiaj;
}

console.log(Friday());

/////////////////////////////////////////////////////////////////////

//Zadanie 13
//Create a function that take two numbers and return the object with 4 fields.
// // Result on 4 basic arithmetic operations.

// let x=4;
// let y=6;

// function dzialania(x, y) {
//  let operations = {
//    sum : x + y,
//    odd : x - y,
//    mult : x * y,
//    div : x / y 
//  }; 
//   return operations
// };

// console.log(dzialania(x,y))