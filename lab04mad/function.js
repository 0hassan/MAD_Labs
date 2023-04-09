// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//    inner()
// }
// outer()()//error
// outer()



// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner;
// }
// outer()//returns nothings
// console.log(outer())//returns nothing
// outer()()//returns 1
// console.log(outer)//returs [Function: outer] this output
// console.log(outer()())//returns 1 and undefined





// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter);    }
//     return inner
// }
// var a = outer()();
// console.log(a)//returns value of inner

// function outer(){
//     var counter = 0
//     function inner(){
//         counter++
//         console.log(counter);    }
//     return inner
// }
// var a = outer()();
// console.log(a)//returns value of inner

// const fn = outer()//returns 1 and 2
// fn()
// outer()//returns 1 and 2
// fn()



function sum(a,b,c){
    return a+b+c
}
// console.log(sum(2,3,5)

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}
const currriedsum = curry(sum)
// console.log(currriedsum(1)(2)(3))

const add2= currriedsum(2)
const add3= add2(3)
const add5= add3(5)
console.log(add5)


