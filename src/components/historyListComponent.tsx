import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const historyListComponent = ({title}:any) => {

    console.log(title)
    return (
        <View style={styles.item}>
            <Text style={[styles.textStyle, styles.textStyleIndex]}>{`${title.index + 1}`}</Text>
            <Text style={styles.textStyle}>{`${title.item}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        // backgroundColor: '#f9c2ff',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // justifyContent:"center"
    alignSelf:"center",
    flexDirection:"row"

    },

    textStyleIndex:{
        marginRight:10

    },

    textStyle:{
        fontSize: 20,
    }


})

export default historyListComponent
