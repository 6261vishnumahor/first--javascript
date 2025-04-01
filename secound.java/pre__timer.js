const sh = () => {
    let a = document.querySelector('#d1');
    let b = document.querySelector('#d2');
    let c = document.querySelector('#d3');
    let d = document.querySelector('#d4');
    let e = document.querySelector('#d5');
    let f = document.querySelector('#d6');
    d1 = 0;
    d2 = 0;
    d3 = 0;
    d4 = 0;
    d5 = 0;
    d6 = 0;
    const run = () => {
        if (d1 < 80) {
            d1++;
            a.innerHTML = d1;

        }
        else if (d1 == 80) {
            d1++;
            a.innerHTML = d1;
        }
        if (d2 < 60) {
            d2++;
            b.innerHTML = d2;

        }

        else if (d2 == 60) {
            d2++;
            b.innerHTML = d2;
        }
        if (d3 < 18) {
            d3++;
            c.innerHTML = d3;

        }

        else if (d3 == 18) {
            d3++;
            c.innerHTML = d3;
        }
        if (d4 < 98) {
            d4++;
            d.innerHTML = d4;

        }

        else if (d4 == 98) {
            d4++;
            d.innerHTML = d4;
        }
        if (d5 < 7) {
            d5++;
            e.innerHTML = d5;

        }

        else if (d5 == 7) {
            d5++;
            e.innerHTML = d5;
        }
        if (d6 < 60) {
            d6++;
            f.innerHTML = d6;

        }

        else if (d6 == 60) {
            d6++;
            f.innerHTML = d6;
        }
    }
    setInterval(run, 100);
}
