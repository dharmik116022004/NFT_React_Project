

import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom';

import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Market from '../../pages/Market';
import Create from '../../pages/Create';
import SellerProfile from '../../pages/SellerProfile';
import EditProfile from '../../pages/EditProfile';
import Wallet from '../../pages/Wallet';
import NftDetails from '../../pages/NftDetails';

const Routers = () => {
    return <Routes>
        <Route path= '/' element={<Navigate to ='/Home'/>} />
        <Route path='/home' element={<Home/>} /> 
        <Route path="/market" element={<Market/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sellerprofile" element={<SellerProfile/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/market/:id" element={<NftDetails/>} />
    </Routes>
}

export default Routers