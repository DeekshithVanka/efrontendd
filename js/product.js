document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL query parameter  ?id=122
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    console.log("i am called")
  
    if(productId) {
      displayProductDetails(productId);
     
    } else {
      console.log(" error ")
     
     }})




     const displayProductDetails = async (productId) => {
        const h1element = document.getElementById('h1ele');
        const h3element= document.getElementById('h3ele');
        const imgcont=document.getElementById("imagecontainer")
       
      
        // Fetch product details from the backend
        const product = await fetchProductDetails(productId);
      
        if (product) {
          const img = document.createElement('img');
    img.src=`images/product${product.ide}.jpg`
    img.alt= product.name;
    imgcont.appendChild(img)

    h1element.textContent=`${product.name}`;
    h3element.textContent=`$${product.price}`;
         
        } else {
          // Display error message if product details couldn't be fetched
          console.log("error")
        }
      };


      const fetchProductDetails = async (productId) => {
        try {
          console.log(productId)
          const response = await fetch(`https://ebackend-fle4.onrender.com/api/products/${productId}`);
          const product = await response.json();
          
          return product;
        } catch (error) {
          console.error('Error fetching product details:', error);
          return null;
        }
      };