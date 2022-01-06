import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {StateCoin} from '../screens/CoinScreen'

interface ListRenderItemInfo{
    data: Item;
}

type Item = {
    index: number;
    item: StateCoin;
    //todo: nunca supe cual era el type de esta variable "separators"
    separators: any;
}

const HistoryListComponent = ({data}:ListRenderItemInfo) => {

    return (
        <View style={styles.item}>
            <Text style={styles.textStyle}>{`${data.item.throwingRound}`}</Text>
            <Text style={[styles.textStyle, styles.textStyleIndex]}>{`${data.item.coinFace ? "Cara":"Sello"}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        flexDirection:"row",
        fontFamily: "sans-serif",
        minHeight: 31,
        minWidth:100,
        backgroundColor:'#FDBEFF',
        borderRadius: 50,
        marginBottom:2,
        
    },
    
    textStyle:{
        fontSize: 16,
        fontFamily: "sans-serif",
        width:40,
        textAlign:"center", 
        alignSelf:"center"
    },

    textStyleIndex:{
        width:"auto",
        minWidth:70,
        textAlign:"left", 
        fontSize: 18,
        fontWeight: "bold",
    },
})

export default HistoryListComponent
