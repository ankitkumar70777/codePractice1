import { useState } from 'react'
import './App.css'
import CakeView from './features/cake/cakeView'
import IceCreamView from './features/icecream/iceCreamView'
import UserView from './features/user/userView'

function App() {

  return (
    <>
      <CakeView />
      <br />
      <IceCreamView />
      <br />
      <UserView />
    </>
  )
}

export default App
