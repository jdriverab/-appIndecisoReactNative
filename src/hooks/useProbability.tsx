import React from 'react'

const useProbability = () => {

    /**
     * Funcion retorna el % de "cara" que se tiene hasta el momento
     * 
     * @return {boolean} 
     */
    const probabilityForFace = (array:boolean[]= [])=> {
        
        const counter = Math.floor(100*(array.filter(res=> res == true).length / array.length))
        if(counter >= 0){
            return counter
        } else{
            return null
        }
    }

    return {
        probabilityForFace,
    }
}

export default useProbability
