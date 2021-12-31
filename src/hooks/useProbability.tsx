import React from 'react'

const useProbability = () => {

    const probabilityForFace = (array:boolean[]= []) => {
        
        const counter = Math.floor(100*(array.filter(res=> res == true).length / array.length))

        console.log(counter)

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
