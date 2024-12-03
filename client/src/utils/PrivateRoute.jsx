import React from 'react'
import { useAuth } from '../context/AuthContext';
import {Navigate} from "react-router-dom";
import { Loader } from './Loader';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth()
    if(isLoading){
        return <div className='vh-100 d-flex justify-content-center align-items-center'>  <Loader/> </div>
    }
 
 return user ? children : <Navigate to="/auth/sign-in"/>
}

export default PrivateRoute