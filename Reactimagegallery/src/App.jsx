import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [image, setimage] = useState(null);
  const [isopen, setopen] = useState(false);
  const images = [
    "https://plus.unsplash.com/premium_photo-1669839774770-df5a3d2da257?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1586911323/photo/close-up-of-african-woman-hands-holding-red-heart-in-solidarity.webp?a=1&b=1&s=612x612&w=0&k=20&c=IK7oNrF3xqpOTEcXwFCVne532TMM2bufwyNiqfnkx-E=",
    "https://plus.unsplash.com/premium_vector-1682298983587-4c896d7433dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1428278819486-8f00bd7cdf80?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTAzNjU1NHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1446483050676-bd2fdf3ac2d6?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODgxODAzMHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1487101547033-bc92f62ff008?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzYxNTQ3Nnx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1645560532041-b736bd44ce5b?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTczNTkyOXx8ZW58MHx8fHx8"
  ]

  const handleimageopen = (img) => {
    setimage(img);
    setopen(true);
  }

  const handleClose = () => {
    setopen(false);
  }

  return (
    <div className="cards">
      <div className="card">
        {images.map((data, index) => {
          return (
            <img
              key={index}
              height="400"
              width="300"
              className="rounded-md cursor-pointer transition ease-in-out delay-150 hover:scale-105 duration-300"
              src={data}
              alt="React Logo"
              onClick={()=>{handleimageopen(data)
              }}
            />
          )
        })}
      </div>
      {isopen && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={image}
            />
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App




