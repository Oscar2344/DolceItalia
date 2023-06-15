import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from "./ResgisterForm.style";
import { Formik, useFormik } from "formik";
import { initialValues } from "./RegisterForm.Data";
import { validationSchema } from "./RegisterForm.Data";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import {screen} from "../../../utils/screenName";
import  Toast  from "react-native-toast-message";
const RegisterForm = () => {
  const navigation =useNavigation();
  //hook usestate
  const [showPassword, setShowPassword] = useState(false);

  //hook
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit:async (formValue) => {
      // console.log("Formilario");
      // console.group(formValue);
      try{
        const auth=getAuth();
       await createUserWithEmailAndPassword(
       auth,
       
       formValue.email,
       formValue.password
       );
       navigation.navigate(screen.account.account);
  

      }catch(error){
        // console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registrase",
          text2:" Intentalo de nuevo"
        })
      }
    },
  });
  const showHiddenPasword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo Electronico"
        container={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        container={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPasword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />

      <Input
        placeholder=" Comfirmar Contraseña"
        container={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
            onPress={showHiddenPasword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
        errorMessage={formik.errors.confirmPassword}
      />
      <Button
        title="Unirse"
        containerStyle={styles.Container}
        buttonStyle={styles.btnRegister}
        onPress={formik.handleSubmit}
        loading ={formik.isSubmitting}
      />
    </View>
  );
};
export default RegisterForm;
