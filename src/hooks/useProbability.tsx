import React from 'react'

const useProbability = () => {

    /**
     * Funcion retorna el % de "cara" que se tiene hasta el momento
     * @param {booeal[]} array Array con historia de lanzamientos
     * @param {boolean} face Lado de lanzamiento "Cara" o "Sello"
     * @return {number} 
     */
    const percentagePerFace = (array:boolean[]= [], face:boolean) => {
        // const ola = Math.floor(100*(array.filter(res=> res == face).length / array.length))
        // console.log(ola)
        if (array.length > 0) { 
            return Number(Math.floor(100*(array.filter(res=> res == face).length / array.length)))
        } else {
            return 0
        }
    }

    /**
     * Funcion regresa en string si es cara o sello
     * @param {number} input true para "Cara" - false para "Sello"
     * @return {string}
     */
     const FaceOrSeal = (input:boolean):string => {
        return input ? "Cara" : "Sello"
    }

    return {
        percentagePerFace,
        FaceOrSeal
    }
}

export default useProbability
