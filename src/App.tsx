import React from 'react'
import { Formularios } from './components/Formularios'
// import { Usuarios } from './components/Usuarios'
// import { Login } from './components/Login'
// import { Contador } from './components/Contador';
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { ContadorConHook } from './components/ContadorConHook';

const App = () => {
  return (
    <div className="mt-2 ">
      <h1>Introducción a TS React</h1>
      <hr/>
      {/* <TiposBasicos />  */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
    </div>
  )
}

export default App;