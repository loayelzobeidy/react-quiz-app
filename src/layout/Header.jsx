import img from "../assets/images/quiz-logo.png";
import { useState } from "react";
console.log("imgage", img);

export function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
     return(
     <div
  id="menu"
  className="hidden md:flex flex-row items-center justify-between bg-transparent my-16"
>
  <div className="flex items-center">
    <img
      src={img}
      alt="Your Logo"
      className="w-8 h-8 mr-4"
    />
    <h1 className="text-2xl font-bold">React Quiz</h1>
  </div>
  
  <div className="flex items-center">
    <a
      href="#"
      className="text-purple-600 hover:text-purple-300 transition-all duration-300 text-lg font-medium mr-6"
    >
      Home
    </a>
    <a
      href="#"
      className="text-purple-600 hover:text-purple-300 transition-all duration-300 text-lg font-medium mr-6"
    >
      About
    </a>
    <a
      href="#"
      className="text-purple-600 hover:text-purple-300 transition-all duration-300 text-lg font-medium mr-6"
    >
      Services
    </a>
    <a
      href="#"
      className="text-purple-600 hover:text-purple-300 transition-all duration-300 text-lg font-medium"
    >
      Contact
    </a>
  </div>
</div>
  );
}
