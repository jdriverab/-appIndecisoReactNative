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

    return (
        <View style={styles.main}>

            <View style={styles.statistic}>
                <Text style={styles.text}># {`${type}`}</Text>
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

            {type == "Sello" ? 

                <Text style={styles.littleText}>Turno # {data.length}</Text>
                :
                <></>
            }

        </View>
    )
}

const styles = StyleSheet.create({

    main:{
        flex:1,
        alignItems:"center"
    },
    
    statistic:{
        minWidth: 120,
        borderColor:"black",
        borderWidth: 2,
        borderRadius:20,
        backgroundColor:'#FDBEFF',
        justifyContent:"center",
        alignItems:"center"
    },

    text: {
        fontSize: 26,
        fontFamily: "sans-serif", 
        fontWeight: "bold",
    },

    littleText:{
        fontSize: 14,
        fontFamily: "sans-serif",
        fontWeight: "bold",
    },

    number: {
        fontSize:34,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color:"red",
    }
})

export default StatisticComponent
