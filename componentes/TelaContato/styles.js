import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff'
    },

    title:{
        fontSize:26,
        fontWeight:'bold',
        marginBottom:35,
    },

    contactList:{
        alignItems:'center',
    },

    contactBox:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#d5d5d5',
        borderRadius:10,
        padding:15,
        margin:5,
        height:150,
        width:300,
    },

    contactTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#400303',
    },

    contactParagraph:{
        fontSize:18,
        color:'#400303',
    }
})

export default styles;