import { AntDesign } from "@expo/vector-icons";
import { Text,Image, View } from "react-native";

export default function Header(){
    return(
        <View style={{height:"25%",justifyContent:"center", alignItems:"center", marginTop:25, backgroundColor:"#d3d3d3"}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Image source={require("../../../../assets/logo.png")} style={{width:80, height:80}}/>
            <Text style={{color:"black", fontSize:30, marginTop:20,textAlign:"center", marginLeft:"10%", marginRight:"20%"}}>RalphLauren</Text>
            <AntDesign name="shoppingcart" size={30} color={"black"}  style={{marginTop:25}}/>
            </View>
            
        </View>

    )
}