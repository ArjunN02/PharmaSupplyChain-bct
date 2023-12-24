import React, { useState, useEffect} from "react";
import images from "../Images/index";
import Image from "next/image";


export default ({
  openProfile,
  setOpenProfile,
  currentUser,
  getShipmentsCount,
}) => {
  const [count, setCount] = useState();
  useEffect(() => {
    const getShipmentsData = getShipmentsCount();

    return async () => {
      const allData = await getShipmentsData;
      setCount(allData);
    };
  }, []);

  return openProfile ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div 
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setOpenProfile(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-blue-950 rounded-md hover:bg-gray-100"
              onClick={() => setOpenProfile(false)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      />
                  </svg>
              </button>
            </div>

            <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
              <div className="flex flex-col items-center pb-10">

                <Image
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={images.avatar}
                  alt="Profile image"
                />

                <h5 class="text-lg font-medium text-blue-950">
                  Welcome to Safemedi
                </h5>

                <div class="text-sm text-gray-500 dark:text-gray-400">
                User Address: {currentUser}
                </div>
                
                <div class="text-sm text-gray-500 dark:text-gray-400">
                Total Shipment: {count}
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  ) : ( "" );
  
};



  