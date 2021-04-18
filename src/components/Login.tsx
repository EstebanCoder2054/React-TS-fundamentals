import React, { useReducer, useEffect } from 'react'

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//las acciones se hacen con types
type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

//esta función es la que se encarga de modificar el state
const authReducer = ( state: AuthState, action: AuthAction ): AuthState  => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        case 'login': 
            const { nombre, username } = action.payload
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username

            }
    
        default:
            return state;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    //NOTA: el dispatch simplemente es el disparador

    useEffect(() => {
        setTimeout(() => {
            dispatch( { type: 'logout' } )
        }, 1500);
    }, [])

    const handleLogin = () => {
        dispatch({
            type: "login",
            payload: {
                nombre: 'Esteban',
                username: 'Dido'
            }
        })
    }

    const handleLogout = () => {
        dispatch({
            type: "logout"
        })
    }

    if(state.validando){
        return(
            <>
                <h3>login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>

        {state.token ? 
            (<div className="alert alert-success"> Autenticado como: {state.nombre} </div>) : 
            (<div className="alert alert-danger"> No autenticado </div>)
        }

        {state.token ? (
            <button className="btn btn-danger" onClick={() => handleLogout()}>
                Log out
            </button>
        ) : 
        (
            <button className="btn btn-primary" onClick={() => handleLogin()}>
                Log in
            </button>
        )
        }

            
        </>
    )
}
