import { SIGN_UP_URL } from "../../constants/Database";
export const SIGN_UP = "SIGN_UP";

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: "SIGN_UP_START"
            })
            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            console.log(data);

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId
            })
        } catch (error) {
            dispatch({
                type: "SIGN_UP_FAIL"
            })
            alert(error);
        }
    }

}