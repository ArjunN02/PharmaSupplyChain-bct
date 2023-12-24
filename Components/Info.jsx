import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const InfoSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="info" className="py-14">
       {/* Info area */}
       <div id="info" className = "max-w-screen-xl mx-auto px-4 md:px-8  ">
         <div className="items-start justify-between md:flex">
           <div className="max-w-lg">
             <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
               About Safemedi
             </h3>
             <p className="text-gray-600 mt-2">
              Learn more on Safemedi
             </p>
           </div>
         </div>
       </div>


    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front of the card */}
        <div className="bg-blue-950 border border-blue-300 p-6 rounded-md shadow-md">
          <p className="ml-15 text-white font-bold mt-10 text-xl text-center">
          Why use Safemedi?
          </p>
          <button onClick={handleClick} className="mt-4 text-white">
            Click to view information
          </button>
        </div>

        {/* Back of the card */}
        <div className="bg-white border border-blue-300 p-6 rounded-md shadow-md">
          <p className="ml-20 text-blue-950 font-bold mt-10 text-xl text-center">
            SafeMedi is introduced to establish a secure and traceable medication supply chain <br />
            preventing the infiltration of counterfeit drugs <br />
            ensuring that only genuine and safe medications reach consumers.
          </p>
          {/* Add the rest of your back content here */}
          <button onClick={handleClick} className="mt-4 text-blue-950">
            Click to flip back
          </button>
        </div>
      </ReactCardFlip>
    </div>


    </section>
  );
};

export default InfoSection;