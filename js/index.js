function getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
            .then(response=>response.json())
            .then(response=>{
                for (let i = 0; i < response.length; i++) {
                    categorias.innerHTML += `<option>${response[i]}</option>`;
                }
                // response.map(r => {
                //     categorias.innerHTML += `<option>${r}</option>`
                // })
            })
} getCategories();


async function getProducts() {
    const request = await fetch('https://fakestoreapi.com/products');
    const response = await request.json();
    if (response.length > 0){
        response.map(produto => {
            produtos.innerHTML += `<li>
            <img src="/Image/image${produto.id}.png" alt="">
            <div class="tituloItem">
                <h3>${produto.title}</h3>
            </div>
            <div class="categoriaItem">
                <h4>${produto.category}</h4>
            </div>
            <div class="precoAvaliacao">
                <span class="preco">R$ ${produto.price}</span>
                <div class="avaliacao">
                <span>&#x2B50 &#x2B50 &#x2B50 &#x2B50 &#x2B50</span>
                <span> ${produto.rating.rate}/5.0</span>
                </div>
            </div>
        </li>`
        })
        return;
    }
    alert('produtos não encontrados :/');

} getProducts();