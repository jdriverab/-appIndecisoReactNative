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
        marginBottom:11,
        aspectRatio: 1,
    },

    statistic:{
        minHeight: 100,
        minWidth: 130,
        borderColor:"black",
        borderWidth: 2,
        borderRadius:20,
        aspectRatio: 1,
        backgroundColor:'#FDBEFF',
    },

    text: {
        fontSize: 26,
        fontFamily: "sans-serif", 
        textAlign:"center",
        fontWeight: "bold",
    },

    littleText:{
        fontSize: 14,
        fontFamily: "sans-serif",
    },

    number: {
        paddingTop:5,
        fontSize:34,
        textAlign:"center",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color:"red",
    }
})

export default StatisticComponent
