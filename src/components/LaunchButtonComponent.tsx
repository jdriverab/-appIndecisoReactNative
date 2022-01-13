import React from 'react';
import { Text, TouchableOpacity, View, Platform, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';


interface props {
    text:string;
    onPress: () => void;
    size?: "small" | "large";
}

const LaunchButtonComponent = ({text, onPress, size}:props) => {

    const ios = () =>{

        return(

            <TouchableOpacity onPress={onPress} activeOpacity={0.5} 
            style={styles.fabLocation} accessibilityLabel={size == "large" ? "Action button" : "Refresh button" }>

                <View style={[styles.fab, size == "large" ? styles.fabLarge : styles.fabSmall]}>

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

            <View style={styles.fabLocation} accessibilityLabel={size == "large" ? "Action button" : "Refresh button" }>

                <TouchableNativeFeedback onPress={onPress} 
                background={TouchableNativeFeedback.Ripple("#28425B",false, size == "large" ? 90 : 25)}>

                    <View style={[ styles.fab, size == "large" ? styles.fabLarge : styles.fabSmall]}>

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

    fab:{
        backgroundColor: "#BE85F3",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderWidth:1,
    },

    fabLarge: {
        width: 180,
        height: 60, 
        borderRadius:5,
        shadowOffset: {
            width: 130,
            height: 60,
        },
    },

    fabSmall: {
        width: 60,
        height: 60, 
        borderRadius:100,
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },

    fabTextLarge: {
        color: "black",
        fontSize: 24,
        fontFamily: "sans-serif", 
        fontWeight:"bold",
    },

    tinyLogo: {
        width: 30,
        height: 30,
    }
})


export default LaunchButtonComponent;
