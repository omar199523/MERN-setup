import React from 'react'
import { Route } from 'react-router'
import { useSelector } from 'react-redux'

const ProtectRoute = ({component:Componanet, ...rest}) => {
    const { auth }= useSelector(state => state)
        return (
        <Route {...rest} render = {props => {
            if (auth.isAuthenticed){return <Componanet {...props}/>}
        }}/>
    )
}

export default ProtectRoute
