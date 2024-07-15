// Logical operator 

// Task 11: Write a program that user && operator to Combine two conditions and log thte result to the console.
let V1 = 25 
let V2 = '25'
    
    console.log("bothe var details data type of V1", typeof(V1) ,V1 ) ;
    console.log("bothe var details data type of V2", typeof(V2) ,V2 ) ;

// compairing the type 
  if(V1 === V2){
    console.log("\nBothe are same value");
  }else{
    console.log("Bothe are no have same value");
  }
// there was a catch  " == "  compaire value only but  " === " also compaire type .

// Comapiring only value
if(V1 == V2 && V1 >= V2  ){
    console.log("With out type Both variable are equal",V1 , V2);
  }
//  by using "&& and operator " we can take two condition in one single if and both have been true to process

// Task 11: Write a program that user || operator to Combine two conditions and log thte result to the console.
let a = 10
let b = '10';

//  by using "|| or operator " we can take two condition in one single if and one of them have been true to process

if (a === b || a >= b){
    console.log("bothe var details data type of a", typeof(a) ,a ) ;
    console.log("bothe var details data type of b", typeof(b) ,b ) ;
    console.log("Bothe have same value","a :",a , "b:",b);
}else{
    console.log("bothe var details data type of a", typeof(a) ,a ) ;
    console.log("bothe var details data type of b", typeof(b) ,b ) ;
}

// Task 13: Write a program that user ! operator to negate conditions and log thte result to the console.

let one = 1000
let two = 1000

// Using the "! not " to neglate the condition.
 if (! one == two ){
    console.log("One and two are not have equal value One:",one ,"Two:", two);
 }else{
    console.log("One and two are have same value One:",one ,"Two:", two);
 }
