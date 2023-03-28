
import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from '../actions/cart.action';

const INITAL_STATE = {
    items: [],
    total: 0,
}

const sumTotal = (items) => items.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);

const CartReducer = (state = INITAL_STATE, action) => {

    switch (action.type) {
        case ADD_ITEM:
            let updatedItems = [];
            if (state.items.find(item => item.id === action.item.id)) {
                updatedItems = state.items.map(item => {
                    if (item.id === action.item.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                })
            } else {
                updatedItems = [...state.items, action.item];
            }
            return {
                ...state,
                items: updatedItems,
                total: sumTotal(updatedItems)
            }

        case REMOVE_ITEM:
            const filteredItems = state.items.filter(item => item.id !== action.itemId);
            return {
                ...state,
                items: filteredItems,
                total: sumTotal(filteredItems)
            }

        case CONFIRM_CART:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default CartReducer;