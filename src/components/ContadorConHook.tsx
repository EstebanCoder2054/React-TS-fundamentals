import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const { valor, acumular } = useCounter(100);

    return (
        <>
            <h1>
                Contador con Hook: <small> {valor} </small>
            </h1>

            <button className="btn btn-primary" onClick={() => acumular(1)}>
                +1
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                -1
            </button>
        </>
    )
}
