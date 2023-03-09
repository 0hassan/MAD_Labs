// console.log("Hello World")
var test = 50;
// console.log(test); // 50

// test = 'fifty';
// console.log(test); // fifty

// var test = 'pakistan';

// console.log(var tets); // argument or expressions are suposed to be passed not sentences 

// console.log(test); // pakistan

test2 =350;
// console.log(test2) // 350

// typeof returns type of the variable
// console.log(typeof test); // output should be String.
// console.log(typeof test2); // output should be number.

// console.log(typeof test == typeof test2); // false

// console.log( test == test2); // false

var test3 = '350';

// console.log(test3 == test2); // true

test2 = 350;
test3 = '350';
test4 = '350';

// console.log(test3 == test2); // true
// console.log(test3 === test2); // false

// console.log(test3 == test4); // true
// console.log(test3 === test4); // true

// console.log(test4 == test2); // true
// console.log(test4 === test2); // false

// console.log(test2 == test3 == test4) // test2 == test3 => true next true and test4 got compared result will be false because bool and string are not equal

var arr = [1, 2, 3, 4];

// console.log(arr[0]) // 1
// console.log(arr) // [ 1, 2, 3, 4 ]

var obj = {
    class : 'MAD',
    season : 'spring',
    year : 2023
}

// console.log(obj); // { class: 'MAD', season: 'spring', year: 2023 }

// console.log(obj.year); // output will be 2023

    /*         /*******  FUNCTIONS ********/    

function testFunction(){
    console.log('Hello');
    return "second Hello";
}

// console.log(testFunction()); // terminal will show 'Hello' and in second line it will show 'second Hello'

// console.log(testFunction); // [Function: testFunction] 

// console.log(typeof testFunction); // function 

function testFunction2(){

}

// console.log(testFunction2()); // undefined. it is also a data type.


function testFunction(p1,p2){
    p1 = (typeof(p1) == 'undefined') ? 3: p1;
    p2 = (typeof(p2) == 'undefined') ? 2: p2;
    return p1*p2;

}

var x ;
var y;

// console.log(testFunction()); // 6 function will take default values stored in the function.
// console.log(testFunction(4,3)); // 12 function will use our vales passed by arguments.

function sumFunction(){
    var sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sumFunction(12,2,2,2,2)); // sum will be 20 function is adding all the arguments.

//          rest parameters 

