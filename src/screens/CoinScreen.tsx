import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import LaunchButton from '../components/LaunchButton';
// import imagenCara from "./images/DogecoinCara";
import { useState } from 'react';



const CoinScreen = () => {

    const [estadoMoneda, setEstadoMoneda] = useState<boolean>(true);

    const onPress = () =>{
        Math.random() >= 0.5 ? setEstadoMoneda(true):setEstadoMoneda(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleWelcome}>¡¡Holi indeciso!!</Text>

            <LaunchButton text="Lanzar moneda" onPress={onPress}/>

            {estadoMoneda? <Image style={styles.tinyLogo} source={require('../images/DogecoinCara.png')}/> : <Image style={styles.tinyLogo} source={require('../images/DogecoinSello.png')}/> }

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center"
    },

    titleWelcome: {
        fontSize: 25,
        alignSelf: "center",
        position:"relative",
        // top: 200
    },

    tinyLogo: {
        position: "absolute",
        width: 100,
        height: 100,
        alignSelf:"center",
        bottom: 50
    }
})


export default CoinScreen;
