import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Firebase from 'pages/Dashboard/data/Firebase';

export default function Frontend() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/auth/firebase' element={<Firebase />} />
        </Routes>
    );
}
