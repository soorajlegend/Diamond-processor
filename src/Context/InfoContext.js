import { data } from "jquery";
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

  const updateName = (c) => (info.data.name = c);
  const updateEmail = (c) => (info.data.email = c);
  const updateMobile = (c) => (info.data.mobile = c);
  const updateAddress = (c) => (info.data.address = c);
  const updateDescription = (c) => (info.data.description = c);
  const updateMission = (c) => (info.data.mission = c);
  const updateVission = (c) => (info.data.vission = c);
  const updateLogo = (c) => (info.data.Logo = c);
  const updateFacebook = (c) => (info.data.facebook = c);
  const updateInstagram = (c) => (info.data.instagram = c);
  const updateWhatsapp = (c) => (info.data.whatsapp = c);
  const updateLinkedin = (c) => (info.data.linkedIn = c);
  const updateTiktok = (c) => (info.data.tiktok = c);
  const updateSnapchat = (c) => (info.data.snapchat = c);

  var Services = useFetch("https://biapay.000webhostapp.com/DP/api/services/read.php");

  const addRow = (obj) => {
    Services.data.unshift(obj);
  };

  const RemoveService = (id) => {
    // var arr = Services.data.filter((item) => item.id !== id);
    Services.data.splice(Services.data.findIndex(a => a.id === id) , 1)
  };






  var features = useFetch("https://biapay.000webhostapp.com/DP/api/Features/read.php");

    const addFeature = (obj) => {
      features.data.unshift(obj);
    };


    const RemoveFeature = (id) => {
      // var arr = Services.data.filter((item) => item.id !== id);
      features.data.splice(features.data.findIndex(a => a.id === id) , 1)
    };
  


















    useEffect(() => {
      console.log(features.data);
    }, [info, alert, Services, features]);

  // console.log(loading)
  // console.log(error)
  return (
    <InfoContext.Provider
      value={{
        info,
        Services,
        features,
        addRow,
        addFeature,
        RemoveService,
        updateName,
        updateEmail,
        updateMobile,
        updateAddress,
        updateDescription,
        updateMission,
        updateVission,
        updateLogo,
        updateFacebook,
        updateInstagram,
        updateWhatsapp,
        updateLinkedin,
        updateTiktok,
        updateSnapchat,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};




export const Info = () => {
  return useContext(InfoContext);
};
