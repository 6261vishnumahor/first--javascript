// let str='kjjksdjioj'
// let str2="<h1 style='color:green'>this is a string</h1>"
// let num=34;


// let str3=`gkje;oisdk;l/jd;ua
// jhskjdjlasd;jklejklfsd${num}
// jkehds;oijkljkl,dsklj,mjdks`

// a=document.querySelector('#d1')
// b=document.querySelector('#d2')
// a.innerHTML=str2
// b.innerHTML=str3
const run =()=>{

  let a=document.querySelector('#b1').value;
  let b=document.querySelector('#b2').value;

  let c=document.querySelector('#b3').value;

  let d=document.querySelector('#b4').value;
  let e=document.querySelector('#b5').value;
  let f=document.querySelector('#b6').value;


  let tl=`<div> name=${a}</div>
  <div> email=${b}</div>
  <div> number=${c}</div>
  <div> password=${d}</div>
  <div> confirm password=${e}</div>
  <div> <img src=${f}></div>`

  let df=document.querySelector('#df')
  df.innerHTML=tl
  console.log( a,b,c,d,e,f)
  return false;
}

// let d1=document.querySelector('#td')
// d1.addEventListener('click',run);
