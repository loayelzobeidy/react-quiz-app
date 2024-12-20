export function Footer(){
    return(
        <footer className="bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold tracking-tight text-purple-500">Your Company Name</h2>
              <p className="text-purple-500">Your Company Slogan</p>
            </div>
            <div className="flex flex-col md:flex-row space-x-8">
              <div>
                <h3 className="text-lg font-bold tracking-wide uppercase text-purple-500">Quick Links</h3>
                <ul>
                  <li><a href="#" className="text-purple-500 hover:text-purple-700">Home</a></li>
                  <li><a href="#" className="text-purple-500 hover:text-purple-700">About Us</a></li>
                  <li><a href="#" className="text-purple-500 hover:text-purple-700">Services</a></li>
                  <li><a href="#" className="text-purple-500 hover:text-purple-700">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-wide uppercase text-purple-500">Contact Us</h3>
                <ul>
                  <li className="text-purple-500">Your Address</li>
                  <li className="text-purple-500"> Your Email</li>
                  <li className="text-purple-500">Your Phone Number</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-purple-300 pt-5 text-center">
            <p className="text-purple-500">&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}