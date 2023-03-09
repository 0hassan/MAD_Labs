//------ACTIVITY 1-------//

var biography = {
    name : "hassan",
    gender : "male",
    CNIC : '123123123123',
    address:{
        street: 2,
        city: "mianwali"
    }
}

console.log(biography.address.city); // mianwali 

//------- Sum of All multiple of x and y bellow z ------//

function multiSum(x,y,z){
    var sum = 0;
    for(let i=2; i<z; i++){
        if(x%i==0 || y%i==0){
            sum += i;
        }
    }
    return sum;
}

console.log(multiSum(6,8,5)); // 9

//------ Min And Max ------//

function min(...args){
    console.log(args); // [ 3, 5, 6, 7, 1, 2, 8 ]
    var min =args[0];
    for(let i=0; i<args.length; i++){
        if(min >args[i]){
            min = args[i];
        }
    }
    return min;
}

console.log(min(3,5,6,7,1,2,8)); // 1, minimum value is being returned.
