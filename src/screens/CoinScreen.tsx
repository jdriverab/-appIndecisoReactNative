import React from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LaunchButton from '../components/LaunchButton';
// import imagenCara from "./images/DogecoinCara";
import { useState, useRef } from 'react';
import HistoryListComponent from '../components/historyListComponent';
// import historyList from "./components/historyList";



const CoinScreen = () => {

    const [stateCoin, setstateCoin] = useState<boolean>(true);
    const [history, setHistory] = useState<boolean[]>([])

    const showCoin = useRef<boolean>(false)

    // console.log(history)

    const renderItem = ( item:any) => (
        <HistoryListComponent title={item} />
    );


    const onPress = () =>{
        var randomNumber = (Math.random() > 0.5 ? true : false)
        try{
            showCoin.current = true }
        finally{
            setstateCoin(randomNumber)
            setHistory([...history, randomNumber])
        }
    }

    return (

        <View style={styles.container}>

            <View style={styles.headerView}>
                <Text style={[styles.titleWelcome, styles.mainView]}>¡¡Holi indeciso!!</Text>

                {/* {renderItem(true, "hola")} */}

                <FlatList data={history} renderItem={renderItem} style={styles.historyView}/>

                {/* {showCoin.current ? 
                            <FlatList data={history} renderItem={result=>{<Item title={result}/>}} keyExtractor={item => item}/>

                        : 
                            <>
                            </> 
                }   */}


            </View>

            <View style={styles.mainView}>
                <LaunchButton text="Lanzar moneda" onPress={onPress}/>

                    {
                        showCoin.current ? 
                            <>
                                <Image style={styles.tinyLogo} source={stateCoin ? require('../images/DogecoinCara.png') : require('../images/DogecoinSello.png')}  /> 
                                <Text>
                                    {stateCoin == true ? "Cara" : "Sello"}
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
        // justifyContent: "center"
        // alignContent:"center"
    },

    headerView:{

        flex:1,
        backgroundColor: "red"

    },

    mainView: {

        flex:3,
        // position:"relative"

        // justifyContent: "center"

    },

    main:{



    },

    titleWelcome: {
        fontSize: 25,
        flexDirection:"column",
        // alignSelf: "center",
        // top: -50
        // justifyContent:"center",
    },

    historyView: {
        // fontSize: 25,
        // alignSelf: "center",
        top: 100,
        // justifyContent:"center",
        // alignContent:"center"
    },

    

    tinyLogo: {
        // position: "absolute",
        width: 100,
        height: 100,
        // alignSelf:"center",
        // bottom: 50
    }
})


export default CoinScreen;
