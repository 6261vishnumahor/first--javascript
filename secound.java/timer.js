const timer = () => {
    let secounddiv = document.querySelector('#secound');
    let minutdiv = document.querySelector('#minuts');
    let hoursdiv = document.querySelector('#hours');
    secound = 0;
    minuts = 0;
    hours = 0;
    const run = () => {
        if (secound < 60) {
            secound++;
            secounddiv.innerHTML = secound;
        }
        else if (secound == 60) {
            minuts++;
            secound = 0;
            minutdiv.innerHTML = minuts;
        
        //  if (minuts == 60) {
        //     hours++;
        //     minuts = 0;
        //     hoursdiv.innerHTML = hours;
        // }
    }
    }

    setInterval(run, 10);
}