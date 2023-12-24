import React, {useState, useEffect, useContext} from "react";

//internal import
import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
  Info,
   
} from "../Components/index";

import {TrackingContext} from "../Conetxt/TrackingContext";

const index = () => {
  const{
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment, 
    getShipmentsCount,
    
  } = useContext(TrackingContext);
  
  //state variable
  const [createShipmentModel, setCreateShipmentModel] = useState(false);//e
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);//e

  //data state variable
  const [allShipmentsdata, setallShipmentsdata] = useState(); //D

  useEffect( () => {
    const getCampaignsData = getAllShipment();

    return async () => {
      const allData = await getCampaignsData;
      setallShipmentsdata(allData); //d

    };
  }, []);

  return (
    <>
      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel} //e
        setStartModal={setStartModal}
      />
      <Table
        setCreateShipmentModel={setCreateShipmentModel} //e
        allShipmentsdata={allShipmentsdata} //d
      />
      <Form
        createShipmentModel={createShipmentModel} //e
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel} //e
      />
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
      />
      <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
      />
      <GetShipment
        getModel={getModel} //e
        setGetModel={setGetModel} //e
        getShipment={getShipment}
      />
      <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
      <Info />
      </>
  
  );

};

export default index;


