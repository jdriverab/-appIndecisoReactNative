import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useProbability from '../hooks/useProbability';

interface StatisticData {
    data: boolean[];
    type: string
}

const StatisticComponent = ({data, type}:StatisticData) => {

    const {probabilityForFace} = useProbability();

    const probFace = probabilityForFace(data)

    // console.log(alo)
    // console.log(data)


    console.log(probFace)
    return (
        <View style={styles.statistic}>
            <Text style={styles.text}>Porcentaje {`${type}`}</Text>
            <Text style={styles.number}>{

                probFace !== null ? 
                        type == "Cara" ?

                        `${probFace}%`            

                        :

                        `${100 - probFace}%`   
                        
                    : 
                        "-"
            
            }</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    statistic:{
        flex:1,

        alignSelf:"flex-start",
        top:50
    },

    text: {
        fontSize:15,
        textAlign:"center",
        fontWeight: "bold",
        fontFamily: "sans-serif"
    },

    number: {

        fontSize:55,
        textAlign:"center",
        fontWeight: "bold",
        fontFamily: "sans-serif"

    }
})

export default StatisticComponent
