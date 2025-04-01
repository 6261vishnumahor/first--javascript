// console.log(Math.pow(2,3))

// console.log(Math.sqrt(2))

// console.log(Math.floor(3.44))
// console.log(Math.ceil(3.44))
// console.log(Math.round(3.54))

//  let a=document.querySelector('#d1');
// a.innerHTML=Math.pow(2,3);
// let b=document.querySelector('#d2');
// b.innerHTML=Math.sqrt(2);
// let c=document.querySelector('#d3');
// c.innerHTML=Math.round(3.54);
// let d=document.querySelector('#d4');
// d.innerHTML=Math.floor(3.44);
// let e=document.querySelector('#d5');
// e.innerHTML=Math.ceil(3.44);

let str="1234567890";
let store=''
const run=()=>{
    for(let i=0;i<4; i++){
ra =Math.random()*str.length;
fl=Math.floor(ra);
store=store+fl
    }
    d1=document.querySelector('#d1');
    d1.innerHTML=store;
}
a=document.querySelector('#b1')
a.addEventListener('click',run)