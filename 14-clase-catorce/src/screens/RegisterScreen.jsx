import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../store/actions/auth.action'
import Input from '../components/Input'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let formIsValid = true;
        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }
        return {
            formIsValid,
            inputValidities,
            inputValues
        }
    }
    return state;
}


const RegisterScreen = () => {
    const dispatch = useDispatch();
    const isAuthLoading = useSelector(state => state.auth.isLoading);

    const [formState, dispatchFormState] = React.useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });


    const onHandleRegister = () => {
        if (!formState.formIsValid) {
            dispatch(signUp(email, password))
        } else {
            alert('Por favor, ingrese un email y una contraseña válidos')
        }
    }

    const handleChangedText = React.useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    }, [dispatchFormState])

    return (
        <KeyboardAvoidingView style={styles.screen} behavior="padding">
            <View style={styles.container}>
                <Text style={styles.title}>REGISTRO</Text>
                <View style={styles.form}>
                    <Input
                        initialValue={formState.inputValues.email}
                        initiallyValid={formState.inputValidities.email}
                        onInputChange={handleChangedText}
                        id='email'
                        required
                        email
                        minLength={5}
                        label='Email'
                        errorText='Por favor, ingrese un email válido'
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                    <Input
                        initialValue={formState.inputValues.email}
                        initiallyValid={formState.inputValidities.email}
                        onInputChange={handleChangedText}
                        id='password'
                        required
                        minLength={5}
                        label='Password'
                        errorText='Por favor, ingrese un password válido'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={onHandleRegister}>
                        <Text style={styles.loginButtonText}>{isAuthLoading ? 'Loading...' : 'Registrarse'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>
                        ¿Ya tienes una cuenta?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.promptButton}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'OpenSans_700Bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,
        fontFamily: 'OpenSans_700Bold'
    },
    textInput: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    loginButton: {
        width: '100%',
        justifyContent: 'center',
        height: 40,
        backgroundColor: colors.primary,
        marginVertical: 12,
    },
    loginButtonText: {
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
        textAlign: 'center',
        color: '#fff',
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        fontFamily: 'OpenSans_700Bold',
        color: colors.primary
    },
    button: {
        backgroundColor: colors.primary,
        marginVertical: 20,
    }
})