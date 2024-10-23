import { useContext, useEffect, useState } from "react"
import { CartContext } from "../cart/CartContext";
import { data } from "autoprefixer";
import { auth } from "../utills/auth";



function Checkout () {
    const { cart,orderData,setorderData} = useContext(CartContext);

    const calculateSubtotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
          total += cart[i].price * cart[i].quantity;
        }
        return total;
      };

    console.log(cart);
    
    const [checkoutinput,setCheckoutinput] = useState({
        firstname:"",
        lastname:"",
        email:"",
        state:"",
        city:"",
        street:"",
        zipCode:"",
        phoneNo:"",
        totalPrice:""
    })


    const handleinput = (e) => {
        e.persist()
        setCheckoutinput({...checkoutinput,[e.target.name]:e.target.value})
    }

    const placeorder = (e) => {
        e.preventDefault()

        const data = {
            firstname:checkoutinput.firstname,
            lastname:checkoutinput.lastname,
            email:checkoutinput.email,
            state:checkoutinput.state,
            city:checkoutinput.city,
            street:checkoutinput.street,
            zipCode:checkoutinput.zipCode,
            phoneNo:checkoutinput.phoneNo,
        }
      setorderData(data)
    }

``
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const checkUserEmail = () => {
            if (auth.currentUser) {
                setUserEmail(auth.currentUser.email);
            } else {
                setTimeout(checkUserEmail, 100);
            }
        };

        checkUserEmail();
    }, []);

    const setDataToLocalStorage = () => {
      if (userEmail && orderData) {
        localStorage.setItem(userEmail, JSON.stringify(orderData));
      }
    }
    
    useEffect(() => {
      if (userEmail && orderData) {
        setDataToLocalStorage();
      }
    }, [userEmail, orderData]);

    return (

    <div className="font-[sans-serif] bg-white">
  <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
      <div className="relative h-full">
        <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
          <div className="space-y-4">
            
            {
                cart.map( (items)=>{
            return(               
            <div key={items.id} className="flex items-start gap-4">
              <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                <img
                  src={items.image}
                  className="w-full object-contain"
                /> 
              </div>
              <div className="w-full">
                <h3 className="text-base text-white">{items.title}</h3>
                <ul className="text-xs text-gray-300 space-y-2 mt-2">
                  <li>
                    Size <span className="float-right">{items.category}</span>
                  </li>
                  <li>
                    Quantity <span className="float-right">{items.quantity}</span>
                  </li>
                  <li>
                    Total Price <span className="float-right">{ (items.price * items.quantity).toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>

                    )
                } )
            }


        </div>
        </div>
        <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
          <h4 className="flex flex-wrap gap-4 text-base text-white">
            Total <span className="ml-auto">${calculateSubtotal().toFixed(2)}</span>
          </h4>
        </div>
      </div>
    </div>
    <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
      <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
      <form className="mt-8">
        <div>
          <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstname"
                onChange={handleinput}
                value={Checkout.firstname}
                placeholder="First Name"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                onChange={handleinput}
                value={Checkout.lastname}
                placeholder="Last Name"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleinput}
                value={Checkout.email}
                placeholder="Email"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
            <div>
              <input
                type="number"
                name="phoneNo"
                onChange={handleinput}
                value={Checkout.phoneNo}
                placeholder="Phone No."
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="street"
                onChange={handleinput}
                value={Checkout.street}
                placeholder="Address Line"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                onChange={handleinput}
                value={Checkout.city}
                placeholder="City"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
            <div>
              <input
                type="text"
                name="state"
                onChange={handleinput}
                value={Checkout.state}
                placeholder="State"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
            <div>
              <input
                type="text"
                name="zipCode"
                onChange={handleinput}
                value={Checkout.zipCode}
                placeholder="Zip Code"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col mt-8">
            <button
              type="button"
              className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
            >
              Cancel
            </button>
            <button
              onClick={placeorder}
              type="button"
              className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>



    )
}



export default Checkout