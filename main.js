

// Function to fetch products from the backend 
const fetchProducts = async () => {
  try {
    const response = await fetch('https://ebackend-fle4.onrender.com/api/products');
    const products = await response.json();
     return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};




const displayProducts = async () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const productlist=document.getElementById("cardcontainer")
  // Clear existing content
  productlist.innerHTML = '';

  // Fetch products from the backend
  const products = await fetchProducts();

  console.log(products)

  products.forEach(product => {
    console.log("x")
    const productcard = document.createElement('div');
    productcard.className = 'product-card';
    const ImgAndDetail = document.createElement('div');
    ImgAndDetail.className = 'productimde';

    ImgAndDetail.dataset.productId = product._id;
const imgElement = document.createElement('div');
    imgElement.className = 'product-image';
   
    const img = document.createElement('img');
    img.src=`./images/product${product.ide}.jpg`
    img.alt= product.name

    imgElement.appendChild(img)
    
    
   


    const detailsDiv = document.createElement('div');
    detailsDiv.className='product'
    
    
    detailsDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>&#8377 ${product.price}</p>
    `;

    // Add to cart button
    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'add-to-cart';
    addToCartButton.dataset.productId = product._id;
    addToCartButton.textContent = 'Add to Cart';
    console.log("x")
    ImgAndDetail.appendChild(imgElement)
    ImgAndDetail.appendChild(detailsDiv);
    productcard.appendChild(ImgAndDetail);

 productcard.appendChild(addToCartButton);



 productlist.appendChild(productcard);

                addToCartButton.addEventListener('click', (event) => {
                  
                 
                  const productId = event.target.dataset.productId;
                  const product = products.find(p => p._id === productId);
                  if (product){
                      cart.push(product);
                      localStorage.setItem('cart', JSON.stringify(cart));    
                  }
                 const icon=document.querySelector('#carticon')
                 
                 icon.classList.add("green")

                  
                  setTimeout(()=>{
                    icon.classList.remove("green")
                  },500)
              });


})


             
            
           


  // addinng event listners to every product 
 
  const productis = document.querySelectorAll('.productimde');
  
  productis.forEach(producti => {
    producti.addEventListener('click', () => {
      
      const productId = producti.dataset.productId;
      

      handleProductClick(productId);
    });
    });

  

}


// Function to handle product click event
const handleProductClick = (productId) => {
  window.location.href = `product.html?id=${productId}`;
};


document.addEventListener('DOMContentLoaded', () => {
  

    displayProducts();
  
   
      const loginBtn = document.getElementById("login-btn");
      const logoutBtn = document.getElementById("logout-btn");
  
   
      const token = localStorage.getItem('token');
      if (token) {
          // User is logged in, hide login button and display logout button
          loginBtn.style.display = "none";
          logoutBtn.style.display = "block";
      } else {
          // User is not logged in, display login button and hide logout button
          loginBtn.style.display = "block";
          logoutBtn.style.display = "none";
      }
  
      // Handle logout button click
      logoutBtn.addEventListener('click', () => {
          // Remove JWT token from local storage
          localStorage.removeItem('token');
         
          window.location.href = 'login.html'; // Redirect to login page
      });
  });


 
