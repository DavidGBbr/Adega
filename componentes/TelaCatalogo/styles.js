import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },

    containerScroll:{
        padding:20,
    },

    title:{
        fontSize:36,
        fontWeight:'bold',
        marginBottom:15,
    },

    description:{
        marginBottom:15,
        fontSize:18,
    },

    cardVinho:{
        flexDirection:'row',
        backgroundColor:'#ab887c',
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:20,
        marginBottom:20,
    },

    vinhoImg:{
        width:60,
        height:120,
    },

    cardBoxDescription:{
        flex:1,
    },

    cardTitle:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:15,
        color:'#fff',
    },

    cardDescription:{
        color:'#fff'
    }
});

export default styles;