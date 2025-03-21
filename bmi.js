const bmi = () => {
    let gender = document.querySelector('#gender').value
    let age = document.querySelector('#age').value
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value
    let hinm = height / 100;
    let result = weight / (hinm * hinm)

    if (age > 20) {
        if (18.5 < result && 25 > result) {
            document.querySelector('#output') 
            output.innerHTML = "<br><br>fit"
            output.style backgroundColor="green";
        }
        else if (18.5 > result) {
            document.querySelector('#output')
            output.innerHTML = "<br><br>underweight"
        }
        else if (25 < result && result > 30) {
            document.querySelector('#output')
            output.innerHTML = "<br><br>overweight"
        }
        else if (result > 30) {
            document.querySelector('#output')
            output.innerHTML = "<br><br>obbesed"
        }
    }
    return false;
}