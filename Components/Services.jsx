import images from "../Images/index";
import Image from "next/image";

 export default function (
  { 
    setOpenProfile,
    setCompleteModal, 
    setGetModel, 
    setStartModal,
  } ) {
    
  const team = [
    {
      avatar: images.startShipment,
    },
    {
      avatar: images.getShipment,
    },
    {
      avatar: images.compShipment,
    },
    {
      avatar: images.userProfile,
    },
  ];

  const openModelBox = (text) => { 
    if (text === 1) {
      setStartModal(true);
    } else if (text === 2) {
      setGetModel(true); 
    } else if (text === 3) {
      setCompleteModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    }
  };

  return (
    <div>

        {/* gif area */}
        <section className="bg-blue-950 text-white py-20 mb-10">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h5 className="text-2xl md:text-5xl font-bold mb-4">
                  Blockchain-Based Medication Supply Chain Tracking System
                </h5>
                <button className="bg-white text-blue-950 px-6 py-3 rounded-full font-medium hover:bg-gray-200">
                  <a href="#info" className="text-blue-950">Learn More</a>
                </button>
              </div>
              <div>           
                <Image
                  src={images.tagline} 
                  alt="GIF Image"
                  width={2600}
                  height={2600}
                />        
              </div>
            </div>
          </div>
        </section>

        {/* Tracking services area */}
        <div id="services" className = "max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Tracking Services
          </h3>
          <p className="text-gray-600 mt-2">
            Medication tracking services
          </p>
        </div>
        </div>
        </div>
        <section className="py-0 pb-14">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12">
              <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 ml-40 mr-40 mb-10">
                {team.map((item, i) => (
                  <li key={i}>
                    <div onClick={() => openModelBox(i + 1)} //e
                      className="w-full h-60 sm:h-52 md:h-56">
                      <Image
                        src={item.avatar}
                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                        alt="" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

    </div>
  );
};
