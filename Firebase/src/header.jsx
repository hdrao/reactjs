import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon,  ShoppingCartIcon, ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SignUpPage from "./auth/signup";
import { storage,storageRef,
          imagesRef,
          auth,
          onAuthStateChanged,
          getDownloadURL,
          ref
        } from './utills/auth';
import { useState, useEffect,useContext } from 'react';
import { useInsertionEffect } from 'react';
import { redirect } from 'react-router';
import Cart from './cart/Cart';
import logo from './assets/logo.jpg'; // if assets is a sibling of header.jsx

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Your Orders', href: '/ordersummary', current: true },
  // { name: 'Sign in', href: '/signin', current: true },
  // { name: 'Calendar', href: '#signup', current: false },
]





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Example() {
  const [ispop,setispop] = useState(false)
  const [popup,setpopup] = useState(null);
const [isOpen, setIsOpen] = useState(false);
const [img,setimg] = useState();
  useEffect ( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        setIsOpen(true)
        getDownloadURL(ref(storage,`users/${user.uid}`))
        .then( (url) => {
          const imgUrl = url;
          setimg(imgUrl);
        }).catch( (err) => {
          alert(err)
        } )
      }else{
        setIsOpen(false)
        const defaultImg = 'https://img.freepik.com/premium-photo/cart-from-supermarket-concept-online-shopping-ai-generated_894218-1015.jpg'
        setimg(defaultImg)
      }
    })
  },[])
  function signout () {
    auth.signOut()
  }
  function handleimageopen (popimg) {
    setispop(true)
    setpopup(popimg)
  }
  
  function handleCloseImage () {
    setispop(false)
  }


  return (
    <>
      {/* <div className="cards">
      {ispop && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={popup}
            />
            <button onClick={handleCloseImage}>Close</button>
          </div>
        </div>
      )}
    </div> */}
<div className={`fixed inset-0 flex items-center justify-center ${ispop ? 'block' : 'hidden'}`}>
  <div className="modal fixed inset-0 bg-black opacity-50"></div>
  <div className="modal-content bg-white rounded-full w-3/8 h-3/4 p-2 flex justify-center items-center transition-transform transform duration-300 ease-in-out">
    <img src={popup} alt="Popup" className="rounded-full w-full h-full object-contain" />
    <button 
      onClick={handleCloseImage} 
      className="absolute top-2 right-2 text-2xl font-bold text-white"
    >
      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
    </button>
  </div>
</div>
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

        <div className="flex flex-shrink-0 items-center cursor-pointer">
           <h1 className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300 relative">
          <span className="text-yellow-400"><a href='/'>Cart</a></span>
          <span className="text-teal-300"><a href='/'>Cove</a></span>
          <span className="absolute -top-1 -right-2 bg-gradient-to-r from-purple-400 to-blue-500 h-2 w-2 rounded-full animate-pulse"></span>
          </h1>
        </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a href='/cart'>
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" /> 
            </button>
            </a>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={img}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem >
                {
                isOpen ? <button onClick={()=>handleimageopen(img)} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                Your Profile Picture
              </button> : <a href="/signin" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                Signin
              </a> 
                }
                </MenuItem>
                <MenuItem>
                {
                  isOpen ? <a onClick={signout} href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  Sign out
                </a>: <a href="/signup" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  Signup
                </a>
                }
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </>
  )
}


export default Example