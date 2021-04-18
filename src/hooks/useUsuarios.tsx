import React, { useEffect, useState, useRef } from 'react'
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes'

export const useUsuarios = () => {
    const [usuarios, setusuarios] = useState<Usuario[]>([])
    const [disableButton, setDisableButton] = useState<number>() //0: para deshabilitar el anterior -- 1: para deshabilitar el siguiente 

    const paginaRef = useRef(1) //sirve para llevar control del cambio de una variable sin la necesidad de renderizar el componente

    useEffect(() => {
        //llamado API
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {
        try {            
            const res = await reqResApi.get<ReqResListado>('/users', {
                params: {
                    page: paginaRef.current
                }
            });

            if(res.data.data.length > 0){
                setusuarios(res.data.data)
            }else{
                paginaRef.current--
                alert('No hay más registros')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current ++
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current --
            cargarUsuarios();
        }
    }

    return{
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }
}
