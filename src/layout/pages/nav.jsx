import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {

  const [color, setColor] = useState(false);

  const changeColor = () =>{

    if(window.scrollY >= 160){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }



  window.addEventListener('scroll', changeColor)
  return (
    <>
    <header className={color ? 'header header-color': 'header'}>

    
    <nav className='navBar flex justify-evenly p-4 m-4'>

        <Link className="font-bold text-center font-forAll text-color-h text-xl hover:text-red-600 transition duration-300" to="/">Home</Link>
        <Link className="font-bold text-center font-forAll text-color-h text-xl hover:text-red-600 transition duration-300" to="/about-me">About Me</Link>

    </nav>
    
    </header>
    </>
  )
}

export default Nav