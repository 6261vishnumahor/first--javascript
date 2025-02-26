// function vip() {
//     let num1 = parseInt(window.prompt("enter number 1 ="));
//     let num2 = parseInt(window.prompt("enter number 2 ="));

//     console.log(num1 + num2)
//     window.alert(num1 + num2);
// }

// function get() {
//     let num = parseInt(window.prompt("enter number 1 ="));
//     let num3 = parseInt(window.prompt("enter number 2 ="));

//     // console.log(num * num3)
//     window.alert(num * num3);
// }
// function gdc(){
//     let num1= parseInt(window.prompt("enter the number ="))

//     if(num1%2==0){
//         window.alert("number is even");
//     }
//     else{
//         window.alert("number is odd")
//     }
// }
function cal(){
     let num = parseInt(window.prompt("enter number 1 ="));
    let num3 = parseInt(window.prompt("enter number 2 ="));
    let operation  = parseInt(window.prompt("enter number - 1 ="));

    if(operation==3){
        window.alert(`the multiply of two number is ${num*num3}`);
    }
    else if(operation==2){
        window.alert(`the sum of two number is ${num+num3}`);
    }
    else if(operation==1){
        window.alert(`the subtract of two number is ${num-num3}`);
    }
    else if(operation==4){
        window.alert(`the divided of two number is ${num/num3}`);
    }

}