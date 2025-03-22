num = 90;
const sh = () => {
    a = document.querySelector('#a')
    a.innerHTML = num++
}
setInterval(sh, 100);