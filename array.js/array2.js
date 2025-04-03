// let arr = [{ "name": "vishnu", "age": 23, "mobile": 1332364 }, { "name": "aniket", "age": 25, "mobile": 6556248 }, { "name": "ganesh", "age": 29, "mobile": 78999276 },
// { "name": "shivam", "age": 27, "mobile": 89864214 }, { "name": "akash", "age": 20, "mobile": 9889897 }, { "name": "chatan", "age": 30, "mobile": 8992473 },
// { "name": "ishan", "age": 28, "mobile": 7891014 }, { "name": "vinit", "age": 90, "mobile": 6584893 }, { "name": "aneesh", "age": 45, "mobile": 78291773 },
// { "name": "tejash", "age": 19, "mobile": 39280307 }
// ]

let arr = [{
    "name": "vishnu", "age": 23, Image: "https://static.wixstatic.com/media/7e70b5_036782041e284c228301189d7f96b5c2~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e70b5_036782041e284c228301189d7f96b5c2~mv2.jpg"
}]


// Image="width:40px https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg 

// arr.map(a =>`
//     <tr>
//         <td>${a.name}</td>
//         <td>${a.age}</td>
//         <td>${a.mobile}</td>
//     </tr>`
// ).join(" ")
let output = document.querySelector('#output')

output.innerHTML =arr.map(b => `
    <tr> 
    <td>${b.name}</td>
       <td>${b.age}</td>
        <td><img src="${b.Image}"width:"400px" height:"400px"></td>
    </tr>`
).join(" ")