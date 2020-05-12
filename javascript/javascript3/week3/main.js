/*
const shoppingCart = new ShoppingCart(); 
const Mobile = new Product('Samsung10',7000);
const Laptop = new Product('Dell',10000);
const flatscreen = new Product('flat-screen', 5000);
const iPad=new Product('IphonPad',3000)
const books=new Product('JavascriptBook',1000)

shoppingCart.addProduct([flatscreen,Laptop,Mobile,iPad,books]);// pass array of products in addproducts function


//call the delete function
    
const deleteproduct=shoppingCart.removeProduct(Laptop)
//console.log(deleteproduct)


//...............callcurrencytoConvert....................

console.log(flatscreen.currencyToConvert('pound'))



//search products
let xSearch=shoppingCart.searchProduct(iPad);

    //console.log(xSearch)

    // call getUser function
     shoppingCart.getUser();


const mainDiv=document.getElementById('main');
//...............Rendrin products...................
let renderProducts=shoppingCart.renderProducts();

// select Html elements
const p_name=document.getElementById('p_name')
const p_price=document.getElementById('p_price');

// call  tototal price function
const totalPrice=document.getElementById('totalPrice')
totalPrice.innerHTML=shoppingCart.getTotal()
//.............................................
  // Renders products
for(let i=0;i<renderProducts.length;i++)
{  const renderName=document.createTextNode(`${renderProducts[i].name}`)
    tagLiName=document.createElement('li')
    tagLiName.appendChild(renderName)
    p_name.appendChild(tagLiName);
    tagLiName.style.listStyle='none'
    //Renders price
    let renderPrice=document.createTextNode(`${renderProducts[i].price}`)
    const tagLiPrice=document.createElement('li')
    tagLiPrice.appendChild(renderPrice)
    p_price.appendChild(tagLiPrice);
    tagLiPrice.style.listStyle='none'
}
*/