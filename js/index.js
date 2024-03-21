let lista = [];

function getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
            .then(response=>response.json())
            .then(response=>{
                categorias.innerHTML += `<option hidden>-- Filtrar Por --</option>
                <option>todos</option>`
                for (let i = 0; i < response.length; i++) {
                    categorias.innerHTML += `<option>${response[i]}</option>`;
                }
            })
} getCategories();

// function searchProductByCategory(){
//     fetch(`https://fakestoreapi.com/products/category/${categorias.value}`)
//         .then(response=>response.json())
//         .then(response=>{
//             console.log(response);
//             for (let i = 0; i < produtos.children.length; i++){
//                 if (response[i].category.value != categorias.value){
//                     console.log(response[i].category)
//                     let elemento = document.querySelector('main ul li')
//                     elemento.classList.add('none')
//                 }            
//             }
//         })
// }

function orderingBy(){
    renderList(lista.toSorted((a, b) => ordenacao.value ? a.price - b.price : a.rating.rate - b.rating.rate))
}

function filteredBy(){
    if (categorias.value == "todos"){
        renderList(lista)
    } else {
        renderList(lista.filter((item) => item.category == categorias.value))
    }
}

async function getProducts() {
    try {
        const request = await fetch('https://fakestoreapi.com/products');
        const response = await request.json();
        lista = response
        if (response.length > 0){
        renderList(response)
        }
        return;

    } catch (error){
        alert("produtos não encontrados")
        }
} getProducts();

function renderList(arr){
    produtos.innerHTML = "";
    arr.map(produto => {
        produtos.innerHTML += `<li value=${produto.id}>
        <img src="${produto.image}" alt="${produto.title}">
        <div class="tituloItem">
            <h3>${produto.title}</h3>
        </div>
        <div class="categoriaItem">
            <h4>${produto.category}</h4>
        </div>
        <div class="precoAvaliacao">
            <span class="preco">R$ ${produto.price.toFixed(2)}</span>
            <div class="avaliacao">
            <span>&#x2B50 &#x2B50 &#x2B50 &#x2B50 &#x2B50</span>
            <span> ${produto.rating.rate}/5.0</span>
            </div>
        </div>
    </li>`
    })
}

function searchProductByName(){
    fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(response=>{
                categorias.innerHTML += `<option hidden>-- Filtrar Por --</option>`
                if (busca.value.length >= 3){
                    for (let i = 0; i < response.length; i++) {
                        if(response[i].title.toString().toLowerCase().includes(busca.value.toLowerCase())){
                            document.querySelector('main ul li').classList.remove('none')
                        } else {
                            document.querySelector('main ul li').classList.add('none')
                        };
                    };
                };
            });
    } //QUEBRADO