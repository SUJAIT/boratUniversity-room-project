import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Authentication/SignIn'
import Signup from './Authentication/Signup'
import Doubleroom from './Body/Doubleroom'
import Home from './Body/Home'
import Presidentialsuit from './Body/Presidentialsuit'
import Singleroom from './Body/Singleroom'
import Studio from './Body/Studio'
import AuthProvider from './ContextApi/ContextAuth'
import Navbar from './Navbar/Navbar'

const Main = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='//singleroom' element={<Singleroom />}></Route>
          <Route exact path='/studio' element={<Studio />}></Route>
          <Route exact path='/doublerroom' element={<Doubleroom />}></Route>
          <Route exact path='/presidentialsuit' element={<Presidentialsuit />}></Route>
          <Route exact path='/login' element={<SignIn />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      


    </div>
  )
}

export default Main
