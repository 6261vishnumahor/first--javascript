// function run(){
//     let img1 =document.querySelector('.img1');
//     img1.src = "https://th.bing.com/th/id/OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ?w=121&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//     img1.alt= "image found"
// }
// function run1(){
//     let img1 =document.querySelector('.img1');
//     img1.src = "https://th.bing.com/th/id/OIP.MCLzVoExgXPyNi_V5gb1AwHaE7?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//     img1.alt= "image found"
// }
let num =1

function run(){
    if(num==1){
    let video1=document.querySelector('video');
    video1.src="./y2b.mp4"
    num=0
    }
    else{
        let video1=document.querySelector('video');
    video1.src="./dov.mp4"
    num=1
    }
}
// function run1(){
//     let video1=document.querySelector('video');
//     video1.src="./dov.mp4"
// }