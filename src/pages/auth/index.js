import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

export default function Auth() {
    return (
        <Routes>
            <Route path='/' element={<>This is Home Blanck page</>} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}
