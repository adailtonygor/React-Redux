import { NUN_MIN_ALTERADO, NUN_MAX_ALTERADO } from "./actionTypes"


// Action Creator
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUN_MIN_ALTERADO,
        payload: novoNumero
    }
}


// Action Creator
export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUN_MAX_ALTERADO,
        payload: novoNumero
    }
}