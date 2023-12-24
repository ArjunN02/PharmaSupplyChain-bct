import React from "react";
import Image from "next/image";
import logoImage from "../Images/logo.png";
import github from "../Images/github.png";

export default () => {
  const footerNavs = [
    {
      href: "#tracking",
      name: "Track medications",
    },
    {
      href: "#services",
      name: "Services",
    },
    {
      href: "#info",
      name: "About us",
    },
  ];

  return (
    <footer className="pt-5 mt-10 py-10 border-t md:text-center bg-blue-100">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <Image src={logoImage} width={80} height={50} alt="Logo"/>
            <p className="text-blue-950 font-bold ">
              A Blockchain  based medication supply chain tracking system
            </p>
            <ul className="flex flex-wrap items-cnter gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li className="text-gray-800 hover:text-gray-500 duration-150" key={idx}>
                  <a key={idx} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* get app on github */}
          <div className="mt-2">
            <p className="text-gray-700 font-semibold">Get the app</p>
            <div className="flex items-center gap-3 mt-3 sm:block">
              <a href="https://github.com/tharaniamarasinghe/Safemedi">
              <Image
                  src={github} 
                  alt="github Image"
                  width={80}
                  height={50}
                /> 
              </a>
            </div>
          </div>

        </div>
        <div className="mt-10 py-10 border-t border-gray-300 md:text-center">
          <p> &copy; 2023 Tharani Amarasinghe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
