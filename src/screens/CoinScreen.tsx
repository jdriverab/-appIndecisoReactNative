import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import LaunchButtonComponent from '../components/LaunchButtonComponent';
import HistoryListComponent from '../components/HistoryListComponent';
import StatisticComponent from '../components/StatisticComponent';
import useProbability from '../hooks/useProbability';


export interface StateCoin {
    coinFace: boolean;
    throwingRound: number;
}


const CoinScreen = () => {

    const [historyStateCoin, setHistoryStateCoin] = useState<StateCoin[]>([])
    const round = useRef<number>(1)
    const historyListView = useRef<FlatList<any>>(null)
    const buttonAvailible = useRef<boolean>(true)
    const {probabilityForFace} = useProbability();

    /**
     * Funcion realiza lanzamiento y setea el resultado obtenido agregandolo al array del estado "historyStateCoin"
     * @return {void}
     */
    const onPress = ():void =>{

        if(buttonAvailible.current || historyStateCoin.length <= 30){

            switchAvailibilityButton(buttonAvailible.current);
            var randomNumber = (Math.random() > 0.5 ? true : false);
            const data = [...historyStateCoin, {coinFace: randomNumber, throwingRound: round.current++}];
            setHistoryStateCoin(data);
            switchAvailibilityButton(buttonAvailible.current)
        } 
        historyListView?.current?.scrollToEnd();
        
    }

    /**
     * Funcion cambia referencia "buttonAvailible", si actualmente es true cambia a false o viceversa
     * @param data {boolean}
     * @return {void}
     */
    const switchAvailibilityButton = (data: boolean):void => {
        data ? buttonAvailible.current = false : setTimeout(()=> buttonAvailible.current = true, 200)
    }


    /**
     * Funcion setea aplicacion a estado inicial
     * @return {void}
     */
    const restart = ():void => {
        round.current = 1
        setHistoryStateCoin([])
    }

    return (

        <View style={styles.container}>

            <ImageBackground source={require('../images/memeBackground.png')} style={styles.container}>


                <Text style={styles.titleWelcome}>Toma tu decisión</Text>

                <View style={styles.historyView}>

                    <View style={styles.statisticList}>

                        <StatisticComponent data={historyStateCoin.map(res => res.coinFace)} type={"Cara"} />
                        <StatisticComponent data={historyStateCoin.map(res => res.coinFace)} type={"Sello"} />

                    </View>

                    <View style={styles.historyList}>

                        {historyStateCoin.length > 0 ?

                            <FlatList ref={historyListView} style={styles.flatList} data={historyStateCoin} renderItem={(res) => <HistoryListComponent data={res} />} />
                            :
                            <></>
                        }

                    </View>


                </View>

                <View style={styles.mainView}>

                    <View style={styles.actionButton}>

                        <LaunchButtonComponent text="Lanzar" onPress={onPress} size={"large"} />
                        <LaunchButtonComponent text="" onPress={restart} size={"small"} />

                    </View>

                    {
                        historyStateCoin.length > 0 ?

                            historyStateCoin.length == 50 ?
                                <>
                                    <Text style={styles.bottomText}>
                                        ¡¡Wow!! 30 lanzamientos, es hora de tomar una decision :3 {historyStateCoin[round.current - 2].coinFace == true ? "Cara" : "Sello"}
                                    </Text>
                                    <Text style={styles.bottomText}>
                                        El ganador fue {probabilityForFace(historyStateCoin.map(res => res.coinFace))}
                                    </Text>
                                </>
                                :
                                <>
                                    <Image style={styles.tinyLogo} source={historyStateCoin[round.current - 2].coinFace ? require('../images/LeTrueDogecoinCara.png') : require('../images/LeTrueDogecoinSello.png')} />
                                    <Text style={styles.bottomText}>
                                        {historyStateCoin[round.current - 2].coinFace == true ? "Cara" : "Sello"}
                                    </Text>
                                </>

                            :
                            <>
                                <Image style={styles.tinyLogo} source={require('../images/LeDogeStart.png')} />

                            </>
                    }
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    
    titleWelcome: {
        fontSize: 26,
        fontFamily: "sans-serif", 
        fontWeight: "bold",
        backgroundColor:"#BE85F3",
        marginBottom:11,
        paddingLeft:5,
    },
    
    historyView: {
        flex:2,
        alignItems:"center",  
        flexDirection:"row",
    },
    
    mainView: {      
        flex:3,    
        justifyContent: "center",
        alignItems:"center",
    },
    
    statisticList:{
        flex:1,
        alignItems:"center",    
    },
    
    historyList: {
        flex:1.5,
        alignItems:"center",      
    },
    
    flatList:{
        marginVertical: 10,
        borderColor:"Black",
        width:'80%',
    },

    actionButton:{
        backgroundColor:"#FDBEFF",
        height: 85,
        width: "85%",
        justifyContent:"space-evenly",
        flexDirection:"row",
        borderRadius:20,
        borderColor:"black",
        borderWidth: 2,
    },
    
    tinyLogo: {
        width: "60%",
        flex:0.8,
        justifyContent:"center",
        alignSelf:"center", 
    },

    bottomText:{
        fontSize: 16,
        fontFamily: "sans-serif", 
        position: 'absolute',
        bottom: 0

    },
    
})


export default CoinScreen;
