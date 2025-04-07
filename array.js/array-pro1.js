let arr1 = [
    {
        "name": "laptop",
        "brand": "HP",
        "price": 2390,
        "Image": "https://media.croma.com/image/upload/v1736342915/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310954_0_wx0jbi.png"
    },
    {
        "name": "laptop",
        "brand": "Dell",
        "price": 3390,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_PjR7mAKttaP94i5D9DHM5ONOYCONy_WLA&s"
    },
    {
        "name": "laptop",
        "brand": "asus",
        "price": 3390,
        "Image": "https://nandilathgmart.com/wp-content/uploads/2025/01/ASUS-Vivobook-15-600x600.png"
    },
    {
        "name": "laptop",
        "brand": "asus",
        "price": 3390,
        "Image": "https://nandilathgmart.com/wp-content/uploads/2025/01/ASUS-Vivobook-15-600x600.png"
    },
    {
        "name": "laptop",
        "brand": "asus",
        "price": 3390,
        "Image": "https://nandilathgmart.com/wp-content/uploads/2025/01/ASUS-Vivobook-15-600x600.png"
    },
    {
        "name": "laptop",
        "brand": "HP",
        "price": 2390,
        "Image": "https://media.croma.com/image/upload/v1736342915/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310954_0_wx0jbi.png"
    },
    {
        "name": "laptop",
        "brand": "Dell",
        "price": 3390,
        "Image": "https://oxygendigitalshop.com/media/cache/375x0/catalog/product/7/1/71ji0acbrjl._sl1500__1703754258.webp"
    },
    {
        "name": "laptop",
        "brand": "asus",
        "price": 3390,
        "Image": "https://nandilathgmart.com/wp-content/uploads/2025/01/ASUS-Vivobook-15-600x600.png"
    },
    {
        "name": "laptop",
        "brand": "asus",
        "price": 3390,
        "Image": "https://nandilathgmart.com/wp-content/uploads/2025/01/ASUS-Vivobook-15-600x600.png"
    },
    {
        "name": "laptop",
        "brand": "HP",
        "price": 2390,
        "Image": "https://media.croma.com/image/upload/v1736342915/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310954_0_wx0jbi.png"
    },
    {
        "name": "laptop",
        "brand": "Dell",
        "price": 3390,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_PjR7mAKttaP94i5D9DHM5ONOYCONy_WLA&s"
    },
]


let d1 = arr1.map(arr1 => `
    <div id="b">
     <div ><img  id="b1" src="${arr1.Image}"></div>
     <div id="b2">${arr1.name}</div>
     <div id="b3">${arr1.brand}</div>
      <div id=b4>${arr1.price}</div>
    <div>
    `).join(" ")
let f1 = document.querySelector(".hd1")
f1.innerHTML = d1