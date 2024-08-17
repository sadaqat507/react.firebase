import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Firebasedata from './firedata'
import ReadProduct from './ReadRegisterdata'
 // import Firebasedata from './firedata'

export default function Auth() {
    return (
        <Routes>
            <Route path='/' element={<>This is Home Blanck page</>} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='/firebase' element={<Firebasedata/>}/>
            <Route path='/readproduct' element={<ReadProduct/>}/>
            <Route path='/*' element={<>This is blank pages</>}/>

        </Routes>   
    )
}
