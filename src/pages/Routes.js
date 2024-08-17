import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from 'contexts/AuthContext'
// import Frontend from './Frontend'
 import Dashboard from './Dashboard'
import PrivateRoute from 'components/PrivateRoute'
import Auth from './auth'
import Home from './Frontend/Home'
 
export default function Index() {
    const { isAuthenticated } = useAuthContext()
    return (
        <Routes>
            {/* <Route path='/*' element={<Navigate to="/auth/register" />} /> */}
            <Route path='/'  element={<Home/>}/>
            <Route path='auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to="/dashboard" />} />
            <Route path='dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
        </Routes>
    )
}
