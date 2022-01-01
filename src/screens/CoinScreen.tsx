import React from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LaunchButton from '../components/LaunchButton';
// import imagenCara from "./images/DogecoinCara";
import { useState, useRef, useEffect } from 'react';
import HistoryListComponent from '../components/HistoryListComponent';
// import historyList from "./components/historyList";
import StatisticComponent from '../components/StatisticComponent';

export interface StateCoin {
    coinFace: boolean;
    throwingRound: number;
}

const CoinScreen = () => {

    const [historyStateCoin, setHistoryStateCoin] = useState<StateCoin[]>([])
    const round = useRef<number>(1)
    const historyListView = useRef<FlatList<any>>(null)

    const onPress = () =>{
            var randomNumber = (Math.random() > 0.5 ? true : false)
            const data = [...historyStateCoin, {coinFace: randomNumber, throwingRound: round.current++}];
            setHistoryStateCoin(data)
            historyListView?.current?.scrollToEnd()
    }

    const restart = () => {
        round.current = 1
        setHistoryStateCoin([])
    }

    return (

        <View style={styles.container}>

            <Text style={styles.titleWelcome}>Toma tu decisión</Text>

            <View style={styles.historyWidth}>

                <StatisticComponent  data={historyStateCoin.map(res => res.coinFace)} type={"Cara"}/>
                

                <View style={styles.historyHeight}>

                    {historyStateCoin.length > 0 ? 

                        <FlatList ref={historyListView} style={styles.flatList} data={historyStateCoin} renderItem={(res)=> <HistoryListComponent data={res} />} />
                    : 
                        <></>
                    }         

                </View>

                <StatisticComponent data={historyStateCoin.map(res => res.coinFace)} type={"Sello"}/>

            </View>

            <View style={styles.buttonAction}>

                <LaunchButton text="Lanzar moneda" onPress={onPress} size={"large"}/>
                <LaunchButton text="" onPress={restart} size={"small"}/>
                        
            </View>



            <View style={styles.mainView}>

                {
                    historyStateCoin.length > 0 ? 
                        <>
                            <Image style={styles.tinyLogo} source={historyStateCoin[round.current-2].coinFace ? require('../images/LeTrueDogecoinCara.png') : require('../images/LeTrueDogecoinSello.png')}  /> 
                            <Text style={styles.anyText}>
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
        backgroundColor: "#FBDFFC"
    },

    titleWelcome: {
        flex: 1,
        fontSize: 45,
        alignSelf: "center",
        fontWeight: "bold",
        fontFamily: "sans-serif"

 
    },

    mainView: {      
        flex:2,    
        justifyContent: "center",
        alignItems:"center",
    },
    
    historyWidth: {
        flex:3,
        alignItems:"center",  
        flexDirection:"row"    
    },
    
    historyHeight: {
        flex:1,
        alignItems:"center",      
        borderWidth:2,
        height:"100%"
    },


    flatList:{
        marginVertical: 10,
        borderColor:"Black",
    },

    buttonAction:{
        backgroundColor:"#FDBEFF",
        flex:1,
        justifyContent:"space-evenly",
        flexDirection:"row",
        borderRadius:50,

    },

    anyText:{
        fontFamily: "sans-serif",
        fontSize: 20,
        position: 'absolute',
        bottom: 0

    },
    
    tinyLogo: {
        width: 160,
        height: 160,
    }
})


export default CoinScreen;
