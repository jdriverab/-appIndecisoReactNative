import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

interface StatisticData {
    data: boolean[];
    type: string;
    percentage: number
}

const StatisticComponent = ({data, type, percentage}:StatisticData) => {

    return (
        <View style={styles.main}>

            <View style={styles.statistic}>
                <Text style={styles.text}># {`${type}`}</Text>
                <Text style={styles.number}>
                    {
                    data.length > 0 ? 
                        `${percentage}%` 
                    : 
                        "-"
                    }
                </Text>

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
