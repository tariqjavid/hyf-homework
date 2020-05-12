
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    currencyToConvert(currency)
    {
    
         const curr=currency.toLowerCase();
         if(curr=='doller')
         {  
             return this.price/6.89690;
            }
            else if(curr=='pound')
            {
                return this.price/ 8.50927
            }
            else{
                return this.price;
            }
        }
    }

class ShoppingCart {
        constructor() {
         this.products = [];
    }
    addProduct(product) {  // add product functions
    for(let i=0;i<product.length;i++)
    {
        this.products.push(product[i])
    }
   }
    removeProduct(product) {
        /*const availableProducts=this.products.filter(pro=>{
    
             return pro!=product;
        })
  this.products.push(availableProducts)
*/
      for(let i=0;i<this.products.length;i++)
        {
            if(product==this.products[i])
            {
                const x=this.products.indexOf(product)
                this.products.splice(x,1)
                 return "product deleted"
            }
           }
    }

    searchProduct(productName)
     {
        const searchproduct=this.products.filter(pro=> pro===productName)
           return searchproduct
    }

    getTotal() 
    {
        if(sessionStorage.getItem('userName'))
        {
         const totalPrice=this.products.flatMap(pro=>pro.price).reduce((acc,val)=>acc+val)
        
         return totalPrice;        
        }

        else{

            return 'Session expires visit login page'
        }
    }

    renderProducts() 
    {
        if(sessionStorage.getItem('userName'))
           {
          return this.products; 
           } 
           else
           {
               alert("Session expires visit login page")
           }     
    }
    getUser() {
        fetch('https://jsonplaceholder.typicode.com/users/1')     // this link is not working  ,some thing wrong can put in browser??
        .then((json)=>{return json.json();})
        .then((res)=>{res
           //sessionStorage.setItem('userName',`${res.name}`)
        })
        sessionStorage.setItem('userName',`tariq`)
    }
}
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

    // call getUser function
shoppingCart.getUser();

const mainDiv=document.getElementById('main');
const p_name=document.getElementById('p_name')
const p_price=document.getElementById('p_price');

// call renderproduct
const renderProducts=shoppingCart.renderProducts();
// call  tototal price function
const totalPrice=document.getElementById('totalPrice')
totalPrice.innerHTML=shoppingCart.getTotal()
renderProducts.forEach(rP=>
    {
    const renderName=document.createTextNode(`${rP.name}`)
    tagLiName=document.createElement('li')
    tagLiName.appendChild(renderName)
    p_name.appendChild(tagLiName);
    tagLiName.style.listStyle='none'
    //Renders price 

    const renderPrice=document.createTextNode(`${rP .price}`)
    const tagLiPrice=document.createElement('li')
    tagLiPrice.appendChild(renderPrice)
    p_price.appendChild(tagLiPrice);
    tagLiPrice.style.listStyle='none'
})
