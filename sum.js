const sum = (a,b)=>{
     return a+b;
}
function sumList(...args){
    return args.reduce((acc,value)=> acc+value,0)
}

console.log('Result ::',sum(10,5));
console.log('Result ::',sum(20,12));
console.log("Result ::",sum(35,5));
console.log("Sum Array is ::",sumList(12,8,10,15,20,50,75,100));

const a =[1,100,30,2,11,3,25,324,9,10,5];
const b = [...a]; // shallow copy --- another reference
a.sort((a,b)=>a-b);
console.log(`List 1 :: ${a} ---> List  :::${b} `);
