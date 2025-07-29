let box = document.querySelector('.box')
let btn = document.querySelector('button')
let select = document.querySelector('select')
let inp = document.querySelector('input')

let allData = [] 

let renderData = (data) => {
    box.innerHTML = ""
    data.map((item) => {
        box.innerHTML += `
            <div class="di">
                <img src="${item.image}" alt="">
                <h3>${item.title}</h3>
                <p>${item.category}</p>
                <div>
                    <h4>${item.price}$</h4>
                    <button>Sotib Olish</button>
                </div>
            </div>
        `
    })
}

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        allData = data
        renderData(allData)
    })

select.addEventListener('change', () => {
    let newData = [...allData]
    if (select.value === 'name') {
        newData.sort((a, b) => a.title.localeCompare(b.title))
    } else if (select.value === 'name2') {
        newData.sort((a, b) => b.title.localeCompare(a.title))
    } else if (select.value === 'price') {
        newData.sort((a, b) => a.price - b.price)
    } else if (select.value === 'price2') {
        newData.sort((a, b) => b.price - a.price)
    }
    renderData(newData)
})

inp.addEventListener('input', () => {
    let filtered = allData.filter((item) => {
        return item.title.toLowerCase().includes(inp.value.toLowerCase())
    })
    renderData(filtered)
})


