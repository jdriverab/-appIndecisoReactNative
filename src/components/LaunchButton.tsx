import React from 'react';
import { Text, TouchableOpacity, View, Platform, StyleSheet, TouchableNativeFeedback} from 'react-native';


interface props {
    text:string
    onPress: () => void
}

const LaunchButton = ({text, onPress}:props) => {

    const ios = () =>{

        return(

            <TouchableOpacity onPress={onPress} activeOpacity={0.5} 
            style={styles.fabLocation}>

                <View style={styles.fab
                }>
                    <Text style={styles.fabText
                    }>{text}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }

    const android = () => {

        // var timeOut = false

        // const alo = () =>{
        //     // if(!timeOut){
        //     //     timeOut = true
        //     //     setTimeout(()=>{
        //     //         timeOut = false, 
        //     //     },500);
        //     // }
        //     onPress 


        // }


        return(

            <View style={styles.fabLocation}>

                <TouchableNativeFeedback onPress={onPress} 
                background={TouchableNativeFeedback.Ripple("#28425B",false, 90)}>

                    <View style={styles.fab
                    }>
                        <Text style={styles.fabText
                        }>{text}
                        </Text>
                    </View>

                </TouchableNativeFeedback>
            </View>
        )

    }

    return ( 
        Platform.OS === "ios" ? ios() : android()
    )
}

const styles = StyleSheet.create({

    fabLocation:{
        // position: "relative",
        // top:60,
        alignSelf:"center", 
        // justifyContent:"center"
        // alignContent:"center"
        // alignItems:"center"
    },

    fab: {
        backgroundColor: "#5856d6",
        width: 180,
        height: 40, 
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 130,
            height: 60,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    fabText: {
        color: "white",
        fontSize: 20,
        fontWeight:"bold",
    }
})


export default LaunchButton;
