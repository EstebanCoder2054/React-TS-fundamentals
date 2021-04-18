import React from 'react'
import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios'

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();
    
    const renderItem = ({id, first_name, last_name, email, avatar }: Usuario) => {
        return(
            <tr key={id.toString()}>
                <td>
                    <img style={{width: 35, borderRadius: 100}} src={avatar} alt={first_name}/>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={() => paginaAnterior()}>
                Anterior
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => paginaSiguiente()}>
                Siguiente
            </button>
        </div>
    )
}
