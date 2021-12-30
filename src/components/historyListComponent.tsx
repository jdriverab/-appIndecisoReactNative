import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

// todo: asignar interface a data
const historyListComponent = ({data}:any) => {

    // console.log(data.item)
    return (
        <View style={styles.item}>
            <Text style={styles.textStyle}>{`${data.item.throwingRound}`}</Text>
            <Text style={[styles.textStyle, styles.textStyleIndex]}>{`${data.item.coinFace ? "cara":"sello"}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor: '#f9c2ff',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // justifyContent:"center"
    flexDirection:"row",
    // position:"absolute",
    // top:-100
    // justifyContent:"center"
    // alignSelf:"center"
    // alignItems:"center"
    // alignContent:"center",
    // position:"absolute",
    

    
    // top:"70%",
    // marginTop: 10,
    height:37,
    
},

textStyle:{
    fontSize: 20,
    width:40,
    // justifyContent:"center"
    // textAlign:"center"
    // alignContent:"center"
    // alignItems:"center"
},

textStyleIndex:{
        marginLeft:10,
        width:70

    },
})

export default historyListComponent
