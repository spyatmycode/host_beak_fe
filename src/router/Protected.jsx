import React, { useContext, useEffect } from 'react'
import { AppContext } from '../providers/AppProvider'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {

    const { auth } = useContext(AppContext)



    if (!auth) return <Navigate to={"/signup"} />


    return (
        <>
            {children}
        </>
    )
}

export default Protected