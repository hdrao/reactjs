import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cart/CartContext';
import { Value } from 'sass';
import { auth } from './utills/auth';

function MediaCard() {
  // const [button,setbutton] = useState()
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext)
  

  const fetchApi = async () => {
    const responses = await fetch('https://fakestoreapi.com/products');
    const data = await responses.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="cards m-4 p-3 gap-4 justify-center items-center flex  flex-wrap">
      {products.map((product, index) => (
        <Link to={`/product/${product.id}`} key={index}>
        <div className="card border p-3 flex flex-col" style={{ width: "18rem", height: "300px" }}>
          
          <div className="image-container" style={{ height: "200px", overflow: "hidden" }}>
          
            <img src={product.image} className="object-contain w-full h-full" alt="..." />
          </div>
          <div className="card-body flex flex-col " style={{ height: "100px" }}>
            <div>
              <h1 className="card-title font-bold text-xl mb-2">${product.price}</h1>
              <p className="card-text text-sm overflow-hidden" style={{ 
                display: "-webkit-box", 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: "2em", // Approximately 3 lines of text
              }}>
                {product.title}
              </p>
            </div>
          </div>
         
          <div>
          <button
          onClick={(e)=>{
           if(auth.currentUser){
            e.preventDefault()
            addToCart(product)
           }else{
             window.location.href='/signup'
           }
            
          }}
          type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Add Cart</button>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}




export default MediaCard