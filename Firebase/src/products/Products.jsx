import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../cart/CartContext';
import { Value } from 'sass';
import { auth } from '../utills/auth';

function SingleProduct () {
  const [button,setbutton] = useState()
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { cart,addToCart } = useContext(CartContext)
  
  useEffect(() => {
    const fetchApi = async  () => {
        const responses = await fetch('https://fakestoreapi.com/products');
        const data = await responses.json();
        const product = data.find(item => item.id === parseInt(id));
        setProduct(product)
      }
      fetchApi();
  }, [id]);

  if (!product) return <div className=' flex items-center justify-center h-screen font-serif from-neutral-400 font-bold text-4xl  '>Loading...</div>;

  return (
<section key={product.id} className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={product.image}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {product.title}
        </h1>
        <div>
        <p className="leading-relaxed">
            {product.description}
        </p>
        <hr className=' mt-5 mb-5 ' />
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            ${product.price}
          </span>
          <button onClick={()=>{
            if(auth.currentUser) {
              addToCart(product)
            setbutton(!button)
            }else{
              window.location.href='/signup'
            }
          }} 
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            {
              button ? "Added to Cart" : "Add Cart"
            }
          </button>
          <button 
          className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default SingleProduct;