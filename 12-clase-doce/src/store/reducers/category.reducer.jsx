import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.action";

const initialState = {
    categories: CATEGORIES,
    selected: null,
}

const CategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_CATEGORY:
            const indexCategory = state.categories.findIndex(cat=>cat.id===action.categoryId)
            if (indexCategory === -1) return state;
            const newState = {...state, selected:state.categories[indexCategory]}
            //console.log(newState)
            return newState
        default:
            return state
    }
}

export default CategoryReducer;