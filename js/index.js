function getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
            .then(response=>response.json())
            .then(response=>{
                categorias.innerHTML += `<option hidden>-- Filtrar Por --</option>`
                for (let i = 0; i < response.length; i++) {
                    categorias.innerHTML += `<option>${response[i]}</option>`;
                }
            })
} getCategories();

function searchProductByCategory(){
                fetch(`https://fakestoreapi.com/products/category/${categorias.value}`)
                .then(response=>response.json())
                .then(response=>{
                    console.log(response);
                    response.map(e => {
                        if (e.category.value != categorias.value){
                            console.log(e.category)
                            let elemento = document.querySelector('main ul li')
                            elemento.classList.add('none')
                        }
                        return;
                    })
                    //     switch (categoria){
                    //         case 0:
                    //             document.querySelector('main ul li').classList.remove('none')
                    //             document.querySelector('main ul li .categoriaItem h3').innerText.includes('eletronics').classList.add('none')
                    //         case 1:
                    //             document.querySelector('main ul li').classList.remove('none')
                    //             document.querySelector('main ul li .categoriaItem h3').innerText.includes('jewelery').classList.add('none')
                    //         case 2:
                    //             document.querySelector('main ul li').classList.remove('none')
                    //             document.querySelector('main ul li .categoriaItem h3').innerText.includes("men's clothing").classList.add('none')
                    //         case 3:
                    //             document.querySelector('main ul li').classList.remove('none')
                    //             document.querySelector('main ul li .categoriaItem h3').innerText.includes("women's clothing").classList.add('none')
                    //     }

                })
}

async function getProducts() {
    try {
        const request = await fetch('https://fakestoreapi.com/products');
        const response = await request.json();
        produtos.innerHTML = "";
        if (response.length > 0){
            response.map(produto => {
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
        return;

    } catch (error){
        alert("produtos não encontrados")
        }
} getProducts();

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