import { useContext,useState,useEffect } from "react"
import { CartContext } from "../cart/CartContext"
import { auth } from "../utills/auth";



function OrderSummary () {
  
  const { cart } = useContext(CartContext);
  const [userEmail, setUserEmail] = useState(null);
  const [userData,setuserData] = useState()
  const [totalprice, settotalprice] = useState()



  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  useEffect(() => {
    const total = calculateTotalPrice(cart);
    settotalprice(total);
  }, [cart]); 



  useEffect(() => {
      const fetchUserEmail = () => {
          const user = auth.currentUser ;
          if (user) {
              setUserEmail(user.email);
          } else {
              setUserEmail('No user is currently logged in.');
          }
      };

      const timeoutId = setTimeout(fetchUserEmail, 1000); // 1 second delay

      
      return () => clearTimeout(timeoutId);
  },[])

  useEffect(()=>{
    if(userEmail) {
      const data = localStorage.getItem(`${userEmail}`);
      const retriveData = JSON.parse(data)
      setuserData(retriveData)
    }
  },[userEmail])

  console.log(userData);
  

if(userData) {
  console.log(userData);  
}
  
 

  
{
  if(userData) {
    console.log(userData);
    
    return(
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
  <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
      Order # {userData.email}
    </h1>
    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
      21st Mart 2021 at 10:34 PM
    </p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
          Customer’s Cart
        </p>

        {
          cart.map((item, index) => {
        return(
        <div key={item.id} className="mt-6  md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
          <div className="w-full md:w-40">
          <img
              className="w-full hidden md:block"
              src={item.image}
              alt="dress"
            />
            <img
              className="w-full md:hidden"
              src={item.image}
              alt="dress"
            />
          </div>
          <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                {item.title}
              </h3>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">
                ${item.price}
              </p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                {item.quantity}
              </p>
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                ${item.price}
              </p>
            </div>
          </div>
        </div>
        )
          })
        }

      </div>
      <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Summary
          </h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Subtotal
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                ${totalprice}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Shipping
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                $8.00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
              Total
            </p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
              ${totalprice+8}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Shipping
          </h3>
          <div className="flex justify-between items-start w-full">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full"
                  alt="logo"
                  src="https://i.ibb.co/L8KSdNQ/image-3.png"
                />
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                  DPD Delivery
                  <br />
                  <span className="font-normal">Delivery with 24 Hours</span>
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
              $8.00
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
        Customer
      </h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div className="flex flex-col justify-start items-start flex-shrink-0">
          <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            {/* <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" /> */}
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                {userData.name}
              </p>
            </div>
          </div>
          <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <p className="cursor-pointer text-sm leading-5 ">
              {userData.email}
            </p>
          </div>
        </div>
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                Shipping Address
              </p>
              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                {userData.city + userData.street + userData.zip}
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                Billing Address
              </p>
              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                {userData.city + userData.street + userData.zip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  
    )
  }}
}


export default OrderSummary