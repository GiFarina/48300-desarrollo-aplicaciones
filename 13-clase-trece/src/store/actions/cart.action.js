
import { API_URL } from '../../constants/Database';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item
    }
}

export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId
    }
}

export const confirmCart =(itemsCart, totalCart) => {
    return async dispatch => {
        try {
            
            const response = await fetch(API_URL+'orders.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: new Date(),
                    items: itemsCart,
                    total: totalCart
                }),
            });

            const result = await response.json();
            console.log(result);
            dispatch({
                type: CONFIRM_CART,
                confirm: true
            });
        } catch (error) {
            console.error(error)
        }
    }
}
