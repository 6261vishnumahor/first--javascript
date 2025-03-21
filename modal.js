const sh = ()=> {
    const r1 = ()=> {

        aa = document.querySelector('#div1');
        aa.style.display = "block";
    }
    setTimeout(r1,2000)
}

a1 = document.querySelector('#b1');
a1.addEventListener('click',sh)