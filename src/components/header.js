import {BsFillHandbagFill,BsSearch} from "react-icons/bs"
import {SlBasket} from "react-icons/sl"
import { Link } from "react-router-dom"
function Header() {
  return (
    <div className=" p-3 bg-[#00cccc] ">
        <div className="container mx-auto flex flex-wrap items-center justify-around">
        <Link to="/">
            <div className="flex items-center gap-2">
            <BsFillHandbagFill className="text-white"/>
                 <h1 className="text-white text-lg tracking-widest">Markets</h1>
            </div>
            </Link>
        <div>
            <ul className="flex gap-3 text-[#ccffff]">
                <li>
                    <h2>About</h2>
                </li>
                <Link to="/news">
                <li>
                    <h2>News</h2>
                </li>
                </Link>
                <li>
                    <h2>Service</h2>
                </li>
                <Link to="/gallery">
                <li>
                    <h2>Gallery</h2>
                </li>
                </Link>
                <Link to="/contact">
                <li>
                    <h2>Cantact</h2>
                </li>
                </Link>
            </ul>
            
        </div>
        <div className="flex items-center  gap-3 text-white ">

          <SlBasket/>
           <BsSearch/> 
        </div>
        </div>
       
    </div>
  )
}
export default Header