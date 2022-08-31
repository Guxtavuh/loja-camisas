import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
main:{
    height:"60%",
    
},
lstprodutos:{
    flexDirection:"row",
    padding:10,
    borderBottomColor:"silver",
    borderBottomWidth:1
},
imgproduto:{
width:100,
height:100,
resizeMode:"cover"
},
nomeproduto:{
    fontSize:20,
    fontWeight:"bold",
    color:"black"
},
categoria:{
    fontSize:15
},
preco:{
    color:"darkred",
    fontSize:25,
    fontWeight:"bold"
},
infoproduto:{

},
btndetalhe:{
    margin:5,
    backgroundColor:"skyblue",
    padding:10,
    borderRadius:10,

},
btncarrinho:{
    padding:10,
    color:"green",
    borderRadius:10,
    margin:20
}


})