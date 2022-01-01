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
        flex:1,
        flexDirection:"row",
        fontFamily: "sans-serif",
        height:37,
    },

    textStyle:{
        fontSize: 20,
        width:30,
        fontFamily: "sans-serif",
    },

    textStyleIndex:{
        width:60
    },
})

export default HistoryListComponent
