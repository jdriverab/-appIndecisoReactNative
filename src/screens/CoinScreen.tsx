import React from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LaunchButton from '../components/LaunchButton';
// import imagenCara from "./images/DogecoinCara";
import { useState, useRef, useEffect } from 'react';
import HistoryListComponent from '../components/historyListComponent';
// import historyList from "./components/historyList";

interface stateCoin {
    coinFace: boolean;
    throwingRound: number;
}

const CoinScreen = () => {

    const [historyStateCoin, setHistoryStateCoin] = useState<stateCoin[]>([])
    const round = useRef<number>(1)

    console.log(round)



    const renderItem = ( item:any) => (
        <HistoryListComponent data={item} />
    );


    const onPress = () =>{
        var randomNumber = (Math.random() > 0.5 ? true : false)
        const data = [...historyStateCoin, {coinFace: randomNumber, throwingRound: round.current++}];
        
        setHistoryStateCoin(data)
    }

    useEffect(()=>{

        

    },[historyStateCoin])

    return (

        <View style={styles.container}>

            <Text style={[styles.titleWelcome]}>¡¡Holi indeciso!!</Text>

            <View style={styles.historyView}>
                {historyStateCoin.length > 0 ? 

                    <FlatList style={styles.new} data={historyStateCoin} renderItem={renderItem} refreshing={false} />
                : 
                    <></>
                }            
            </View>

            <View style={styles.buttonAction}>

                <LaunchButton text="Lanzar moneda" onPress={onPress}/>

            </View>



            <View style={styles.mainView}>

                {
                    historyStateCoin.length > 0 ? 
                        <>
                            <Image style={styles.tinyLogo} source={historyStateCoin[round.current-2].coinFace ? require('../images/DogecoinCara.png') : require('../images/DogecoinSello.png')}  /> 
                            <Text>
                                {historyStateCoin[round.current-2].coinFace == true ? "Cara" : "Sello"}
                            </Text>
                        </>
                    : 
                        <>
                        </> 
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,

    },

    titleWelcome: {
        flex: 1,
        fontSize: 35,
        alignSelf: "center",
 
    },

    mainView: {      
        flex:3,    
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"red"
    },
    
    historyView: {
        flex:3,
        backgroundColor: "red",
        alignItems:"center",      
    },

    new:{
        borderColor:"green",
        borderWidth:5, 
        marginVertical: 10
    },

    buttonAction:{
        backgroundColor:"blue",
        flex:1,
        justifyContent:"center"
    },
    
    tinyLogo: {
        width: 100,
        height: 100,
    }
})


export default CoinScreen;
