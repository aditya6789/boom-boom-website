import { Link } from "react-router-dom";





export default function Navbar(){
    return (
        <div className=" w-fuabsolute top-0 left-0 right-0 z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <Link  to="/">
          <p className="text-gray-600 hover:text-gray-900">Home</p>
            
          </Link>
          <Link  to="/about">
          <p className="text-gray-600 hover:text-gray-900">About</p>

            
          </Link>
          <Link  to="/contact">
          <p className="text-gray-600 hover:text-gray-900">Contact</p>

            
          </Link>
        </div>
        <div className="text-2xl font-serif">Boom Boom</div>
        <div>
          <Link  to="/privacy">
          <p className="text-gray-600 hover:text-gray-900">Privacy Policy</p>

            
          </Link>
        </div>
      </div>
    )

};