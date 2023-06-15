import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserLogeScreen from "./UserLogeScreen";
import UserGuestScreen from "./UserGuestScreen/UserGuestScreen";
import LoadingModal from "../../components/Shared/LoadingModal/LoadingModal";
const AccountScreens = () => {
  const [hasLoge, setHasLoge] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //verificar si la secion cambia
      //console.log (user);
     setHasLoge(user != null ? true : false);
    });
  }, []);
  if (hasLoge == null){
    return <LoadingModal show={true} text="Cargando"/>
  }

  return hasLoge == true ? <UserLogeScreen /> : <UserGuestScreen />;
};
export default AccountScreens;
