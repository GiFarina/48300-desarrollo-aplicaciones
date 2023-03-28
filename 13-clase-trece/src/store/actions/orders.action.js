import { API_URL } from '../../constants/Database';

export const GET_ORDERS = 'GET_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER';

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/orders.json`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response)
            const resData = await response.json();
            const orders = Object.keys(resData).map(key => {
                return {
                    id: key,
                    ...resData[key]
                }
            });
            dispatch({
                type: GET_ORDERS,
                orders
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/orders/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resData = await response.json();
            console.log(resData);
            dispatch({
                type: DELETE_ORDER,
                id
            });
        } catch (error) {
            console.log(error);
        }
    }
}