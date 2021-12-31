import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {StateCoin} from '../screens/CoinScreen'

// todo: asignar interface a data

interface ListRenderItemInfo{
    data: Item;
}

type Item = {
    index: number;
    item: StateCoin;
    //nunca supe cual era el type de esta variable "separators"
    separators: any;
}

const HistoryListComponent = ({data}:ListRenderItemInfo) => {

    return (
        <View style={styles.item}>
            <Text style={styles.textStyle}>{`${data.item.throwingRound}`}</Text>
            <Text style={[styles.textStyle, styles.textStyleIndex]}>{`${data.item.coinFace ? "cara":"sello"}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        // flex:1,
        backgroundColor: 'pink',
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
    // lineHeight: "30"
    
    

    
    // top:"70%",
    // marginTop: 10,
    height:37,
    
},

textStyle:{
    fontSize: 20,
    width:30,
    // justifyContent:"center"
    // textAlign:"center"
    // alignContent:"center"
    // alignItems:"center"
},

textStyleIndex:{
        marginLeft:10,
        width:60

    },
})

export default HistoryListComponent
