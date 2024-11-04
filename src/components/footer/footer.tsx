import { Link } from "react-router-dom"



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
        <div className=''>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-pink-400">About Us</Link></li>
            <li><Link to="#" className="hover:text-pink-400">Careers</Link></li>
            <li><Link to="#" className="hover:text-pink-400">Press</Link></li>
          </ul>
        </div>
       
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-pink-400">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-pink-400">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-pink-400">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-pink-400">Facebook</Link></li>
            <li><Link to="#" className="hover:text-pink-400">Twitter</Link></li>
            <li><Link to="#" className="hover:text-pink-400">Instagram</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2024 Boom Bomm. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer