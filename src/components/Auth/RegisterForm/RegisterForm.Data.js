import *  as Yup from "yup";

export const initialValues =()=> {
return{
    email:"",
    password:"",
    confirmPassword:"",

}
}
export const validationSchema =()=>{
    return Yup.object({
        email:Yup.string().email("El imeil no es correcto").required("El imeil es obligatorio"),
        password:Yup.string().required("La contraseñsa es obligatorio"),
        confirmPassword: Yup.string().required("La contraseñsa es obligatorio").oneOf([Yup.ref("password")] , "Las contraseñas no coiciden"),

    })
}