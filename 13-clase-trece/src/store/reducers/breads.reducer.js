import { BREADS } from "../../data/products";

import {SELECT_BREAD, FILTER_BREADS} from '../actions/bread.action'

const initialState = {
    breads: BREADS,
    filteredBreads : [],
    selected: null
}

const BreadsReducer = (state=initialState, action) => {
    switch(action.type){
        case SELECT_BREAD:
            return {
                ...state,
                selected: state.breads.find(bread=>bread.id ===action.breadId)
            }
        case FILTER_BREADS:
            return {
                    ...state, filteredBreads:state.breads.filter(bread=>bread.categoryId ===action.categoryId)
            }
        default:
            return state
    }
}

export default BreadsReducer;