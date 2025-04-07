const s = () => {
   
let card = [
    {

        "price": "$5456",
        "name": "laotop",
        "brand": "asur",
        "image": "./ckk.png"
    },
    {

        "price": "$2356",
        "name": "laotop",
        "brand": "Dell",
        "image": "./ckk.png"
    },
    {

        "price": "$3245",
        "name": "laotop",
        "brand": "Hp",
        "image": "./ckk.png"
    },
    {

        "price": "$1457",
        "name": "laotop",
        "brand": "lenvo",
        "image": "./ckk.png"
    },
    {

        "price": "$3456",
        "name": "laotop",
        "brand": "asur",
        "image": "./ckk.png"
    },
    {

        "price": "$3236",
        "name": "laotop",
        "brand": "Hp",
        "image": "./ckk.png"
    },
    {

        "price": "$2346",
        "name": "laotop",
        "brand": "lenvo",
        "image": "./ckk.png"
    },
    {

        "price": "$5456",
        "name": "laotop",
        "brand": "Dell",
        "image": "./ckk.png"
    },
    {

        "price": "$5674",
        "name": "laotop",
        "brand": "Apple",
        "image": "./ckk.png"
    },
    {

        "price": "$4556",
        "name": "laotop",
        "brand": "asur",
        "image": "./ckk.png"
    },
    {

        "price": "$3896",
        "name": "laotop",
        "brand": "Hp",
        "image": "./ckk.png"
    },
    {

        "price": "$4829",
        "name": "laotop",
        "brand": "asur",
        "image": "./ckk.png"
    }
]
let op = document.querySelector('#op').value;
let search = document.querySelector('#search').value;

    let store;

    if (op =='pn') {
        store = card.filter(e => e.price == search)
    }
    else if(op=='pp'){
        store=card.filter(e => e.name == search)
    }
    else if(op=='pd'){
        store=card.filter(e=>e.brand==search)
    }
    return false;
}

// let b = card
let f = document.querySelector('#output')
f.innerHTML = store.map(card => `
    <div id="g1">
    <div><img width="100px" src="${card.image}"></div>
     <div id="h1">${card.price}</div>
    <div id="h2">${card.name}</div>
    <div id="h3">${card.brand}</div>
    </div>
    `).join(" ")
    return false;
