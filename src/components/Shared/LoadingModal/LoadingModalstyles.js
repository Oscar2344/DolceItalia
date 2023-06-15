import { Overlay } from "@rneui/base";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native"

//hoja de estilos
export const styles =StyleSheet.create({
    overlay :{
        height:100,
        width: 200,
        backgroundColor:"#ffff",
        borderColor:"#00a680",
        borderwidth:  2,
        borderRadius:25,
    },
    view:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        color:"#00a680",
        textTransform:"uppercase",
        marginTop:15,

    }
});

