import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectAlertStatus } from "../slices/infoSlice";
import useFetch from "./useFetch";

const InfoContext = createContext();

export const InfoContextProvider = ({ children }) => {
  alert = useSelector(selectAlertStatus);

  var info = useFetch("https://biapay.000webhostapp.com/DP/api/info/read.php");
  if (info.data == null) {
    info.data = {
      name: "",
      email: "",
      mobile: "",
      address: "",
      description: "",
      mission: "",
      vission: "",
      Logo: "",
      facebook: "",
      instagram: "",
      whatsapp: "",
      linkedIn: "",
      tiktok: "",
      snapchat: "",
      date: "",
    };
  }

  // const updateName = (c) => (info.data.name = c);
  // const updateEmail = (c) => (info.data.email = c);
  // const updateMobile = (c) => (info.data.mobile = c);
  // const updateAddress = (c) => (info.data.address = c);
  // const updateDescription = (c) => (info.data.description = c);
  // const updateMission = (c) => (info.data.mission = c);
  // const updateVission = (c) => (info.data.vission = c);
  // const updateFacebook = (c) => (info.data.facebook = c);
  // const updateInstagram = (c) => (info.data.instagram = c);
  // const updateWhatsapp = (c) => (info.data.whatsapp = c);
  // const updateLinkedin = (c) => (info.data.linkedIn = c);
  // const updateTiktok = (c) => (info.data.tiktok = c);
  // const updateSnapchat = (c) => (info.data.snapchat = c);

  const updateLogo = (c) => (info.data.Logo = c);

  const updateInfo = (name,email,mobile,address,facebook,instagram,whatsapp,linkedIn,tiktok,snapchat) => {
    info.data.name= name;
    info.data.email=email;
    info.data.mobile=mobile;
    info.data.address=address;
    info.data.facebook=facebook;
    info.data.instagram=instagram;
    info.data.whatsapp=whatsapp;
    info.data.linkedIn=linkedIn;
    info.data.tiktok=tiktok;
    info.data.snapchat=snapchat;
  }
  const updateDesc = (desc,mission,vission) => {
    info.data.description=desc;
    info.data.mission=mission;
    info.data.vission=vission;
  }

  var Services = useFetch("https://biapay.000webhostapp.com/DP/api/services/read.php");

  const addRow = (obj) => {
    Services.data.unshift(obj);
  };

  const RemoveService = (id) => {
    Services.data.splice(Services.data.findIndex(a => a.id === id) , 1)
  };






  var features = useFetch("https://biapay.000webhostapp.com/DP/api/features/read.php");

    const addFeature = (obj) => {
      features.data.unshift(obj);
    };


    const RemoveFeature = (id) => {
      features.data.splice(features.data.findIndex(a => a.id === id) , 1)
    };
  




    var Clients = useFetch("https://biapay.000webhostapp.com/DP/api/clients/read.php");

    const addClient = (obj) => {
      Clients.data.unshift(obj);
    };


    const RemoveClient = (id) => {
      Clients.data.splice(Clients.data.findIndex(a => a.id === id) , 1)
    };





    var Gallery = useFetch("https://biapay.000webhostapp.com/DP/api/gallery/read.php");

    const addImage = (obj) => {
      Gallery.data.unshift(obj);
    };


    const RemoveImage = (id) => {
      Gallery.data.splice(Gallery.data.findIndex(a => a.id === id) , 1)
    };

  










    useEffect(() => {

    }, [info, alert, Services, features, Clients]);

  // console.log(loading)
  // console.log(error)
  return (
    <InfoContext.Provider
      value={{
        info,
        Services,
        features,
        Clients,
        Gallery,
        addClient,
        addRow,
        addFeature,
        addImage,
        RemoveImage,
        RemoveClient,
        RemoveService,
        RemoveFeature,
        updateInfo,
        updateLogo,
        updateDesc
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};


export const Info = () => {
  return useContext(InfoContext);
};
