const run = () => {

    let a = document.querySelector('#b1').value;
    let b = document.querySelector('#b2').value;

    let c = document.querySelector('#b3').value;

    let d = document.querySelector('#b4').value;
    let e = document.querySelector('#b5').value;
    let f = document.querySelector('#b6').value;
    let g = document.querySelector('#b7').value;
    let H = document.querySelector('#b7').value;


    let t = `<div> ${a}</div>`
    let t1 = `<div>${b}</div>`
    let t2 = `<div>${c}</div>`
    let t3 = `<div>${d}</div>`
    let t4 = `<div>${e}</div>`
    let t5 = `<div>${f}</div>`
    let t6 = `<div>${g}</div>`
     let t7 = `<div>${H}</div>`
    let df = document.querySelector('#f1')
    df.innerHTML = t;
    let df1 = document.querySelector('#f2')
    df1.innerHTML = t1;
    let df2 = document.querySelector('#f3')
    df2.innerHTML = t2;
    let df3 = document.querySelector('#f4')
    df3.innerHTML = t3;
    let df4 = document.querySelector('#f5')
    df4.innerHTML = t4;
    let df5 = document.querySelector('#f6')
    df5.innerHTML = t5;
    let df6 = document.querySelector('#f7')
    df6.innerHTML = t6;
    let df7 = document.querySelector('#f8')
    df7.innerHTML = t7;
    console.log(a, b, c, d, e, f,g)
    return false;
}