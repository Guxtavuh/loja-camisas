import { AntDesign } from "@expo/vector-icons";
import { Text,Image, View } from "react-native";

export default function Header(){
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"White"}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Image source={require("../../../../assets/logo.png")} style={{width:80, height:80}}/>
            <Text style={{color:"black", fontSize:30, margin:60, marginTop:20}}>RafaLaura</Text>
            <AntDesign name="shoppingcart" size={30} color={"black"}  style={{marginTop:10}}/>
            </View>
        </View>
    )
}