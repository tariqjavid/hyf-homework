
//console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
//console.log(productsUl);

let e=document.querySelector(".country>select")

e.addEventListener("change", x=>{
        let targetCountry= x.target.value;
        let myCoutry=products.filter(x=>
            {
            
          if(x.shipsTo==targetCountry)
          {
           
            return x;
            
          }
          return x;
        }
            )
    
        renderProducts(myCoutry);
       
     });  

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}



