// function Sum(){
//     let a=10;
//     let b=20;
//     document.write(a+b)
// }
// Sum();

// function Table(){
//     let b=parseInt(prompt("enter the number"))
//     let c;
//    for(c=1;c<=10;c++){
//     document.write(b*c)
//    }

   
    

// }
// Table();




// wap to check num is even or odd using type 2 function       (NO ARG AND NO RETURN TYPE)

function Display(show){
   
       if(show%2==0){
         console.log("no is even");
       }
       else  if (show%2!==0){
        console.log("odd")
       }
}
let show=parseInt(prompt("enter a number"))
Display(show);









// 

function hello(num){
    return num*num
}
console.log(hello(10))
//   OR
let a=fun(10)
console.log(a)