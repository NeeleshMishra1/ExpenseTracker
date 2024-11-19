import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },
    addContainer:{
        flex:1,
        padding:20,
    },
    arrow:{
     flexDirection:"row",
     alignItems:"center"
    },
    splaceImage:{
        width:25,
        height:25,
    },
    addText:{
        fontSize:20,
        fontWeight:"700",
        color:"#641FC9",
    },
    Date:{
        width:"100%",
        height:55,
        padding:5,
        marginTop:20,
        borderWidth:2,
        borderRadius:10,
        borderColor:"#641FC9",
        justifyContent:"center",
        paddingLeft:20,
    },
    dateText:{
        fontSize:17,
        fontWeight:"700"
    },
    legend:{
        position: 'absolute',
        top: -17,
        left: 30,
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding:5,
        borderRadius:5,
        color:"#641FC9",
        fontSize:18,
    },

    switchView: {
        flexDirection:"row",
        backgroundColor:"#641FC9",
        marginTop:20,
        justifyContent:"center",
        borderRadius:10,
        alignItems:"center",   
    },
    switch1: {
        justifyContent:"center",
        alignItems:"center",
        height:50,
        borderRadius:10,
        width:"40%",
        marginVertical:10, 
    },
    switch2: {
        justifyContent:"center",
        alignItems:"center",
        height:50,
        borderRadius:10,
        padding:10,
        width:"40%",
        marginVertical:10, 
    },
    incomeText: {
        fontSize: 20,
        fontWeight: "900",
        marginLeft: 6,
        color: "#dbdad7",
        fontFamily:'FlameRegular'
    },
    addAmount:{
        backgroundColor:"#641FC9",
        justifyContent:"center",
        alignItems:"center",
        height:70,
        marginTop:20,
        borderRadius:10,
    },
    addButton:{
        fontSize:22,
        color:"white",
        fontWeight:"700"
    },
    Date1:{
        width:"100%",
        height:55,
        padding:5,
        marginTop:20,
        borderWidth:2,
        borderRadius:10,
        borderColor:"#641FC9",
        justifyContent:"center",
        paddingLeft:20,
    }, 
});

export default styles;