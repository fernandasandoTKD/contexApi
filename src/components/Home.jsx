import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {

  //Estoy consumiento el contexto questa en provider de este
  const nameHome = useContext (Context);
  return (
    <div>Home
       <p>¡Bienvenid@ <strong>{nameHome.first_name} {nameHome.last_name}</strong></p>
    </div>
    
  )
}
