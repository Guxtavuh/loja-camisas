import { View,Text, ScrollView } from "react-native";
import Header from "./components/Header";
import Painel from "./components/Painel";
import Main from "./components/Main";
import Details from "../Details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
export default function  Home(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                    <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}} />
                    <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )


}



function  Inicio({navigation }){
    return(
        <View style={{flex:1, backgroundColor:"#d3d3d3"}}>
            <Header/>
            <ScrollView horizontal={false}>
            <Painel/>
            <Main tela = {navigation}/>
            </ScrollView>
        </View>

    )
}