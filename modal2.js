const sh = () => {

    const s = ()=>{
    aa = document.querySelector('#dom');
    aa.style.display = "block";
    b = document.querySelector('#sec1');
    b.style.filter = "blur(5px)";
    }

    setTimeout(s, 5000);

}

const fg = () => {

    a1 = document.querySelector('#dom');
    a1.style.display = "none";
    b = document.querySelector('#sec1');
    b.style.filter = "blur(0px)";
}
a = document.querySelector('#cb');
a.addEventListener('click', fg)
