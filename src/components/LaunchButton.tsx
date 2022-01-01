import React from 'react';
import { Text, TouchableOpacity, View, Platform, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';


interface props {
    text:string;
    onPress: () => void;
    size?: "small" | "large";
}

const LaunchButton = ({text, onPress, size}:props) => {

    const ios = () =>{

        return(

            <TouchableOpacity onPress={onPress} activeOpacity={0.5} 
            style={styles.fabLocation}>

                <View style={size == "large" ? styles.fabLarge : styles.fabSmall}>

                    {size == "large" ? 

                        <Text style={styles.fabTextLarge}>{text}</Text>
                        :
                        <Image style={styles.tinyLogo} source={require('../images/RefreshIcon.png')}/> 
                            
                    }

                </View>

            </TouchableOpacity>
        )
    }

    const android = () => {

        return(

            <View style={styles.fabLocation}>

                <TouchableNativeFeedback onPress={onPress} 
                background={TouchableNativeFeedback.Ripple("#28425B",false, size == "large" ? 90 : 30)}>

                    <View style={size == "large" ? styles.fabLarge : styles.fabSmall}>

                        {size == "large" ?

                            <Text style={styles.fabTextLarge}>{text}</Text>
                            :
                            <Image style={styles.tinyLogo} source={require('../images/RefreshIcon.png')} />

                        }

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
        alignSelf:"center", 
    },

    fabLarge: {
        backgroundColor: "#BE85F3",
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

    fabSmall: {
        backgroundColor: "#BE85F3",
        width: 50,
        height: 50, 
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    fabTextLarge: {
        color: "black",
        fontSize: 20,
        fontWeight:"bold",
    },

    tinyLogo: {
        width: 30,
        height: 30,
    }
})


export default LaunchButton;
