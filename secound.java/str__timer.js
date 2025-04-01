const timer = () => {

    let str = "kjdghjdsyfi dsjlkjed skaghjs dyhiuerfn ytiehf hgdhsyiu ";
    let count = 0;
    let str1 = '';
    const top = () => {
        if (count < str.length - 1) {
            str1 = str1 + str[count];
            let output = document.querySelector('#output');
            output.innerHTML = str1
            count++;
        }
        else if(count>=str.length){
            count--;
            str1=str1-str[count]
            
        }
        else {
            str1 = ''
            count = 0
           
        }
    }
    setInterval(top, 100)
}