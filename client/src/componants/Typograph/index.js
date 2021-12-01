
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css'

export const H1 = ({children,className}) => {

    return (
        <>
           <h2 className={"h1 "+ className}>{children}</h2> 
        </>
    )
}
export const H2 = ({children,className}) => {
    return (
        <>
           <h2 className={"h2 "+ className}>{children}</h2> 
        </>
    )
}
export const H3 = ({children,className}) => {
    return (
        <>
           <h3 className={"h3 "+ className}>{children}</h3> 
        </>
    )
}
export const H4 = ({children,className}) => {
    return (
        <>
           <h4 className={"h4 "+ className}>{children}</h4> 
        </>
    )
}
export const H5 = ({children,className}) => {
    return (
        <>
           <h5 className={"h5 "+ className}>{children}</h5> 
        </>
    )
}
export const H6 = ({children,className}) => {
    return (
        <>
           <h6 className={"h6 "+ className}>{children}</h6> 
        </>
    )
}
export const P1 = ({children,className}) => {
    return (
        <>
           <p className={"p1 "+className}>{children}</p> 
        </>
    )
}
export const P2 = ({children,className}) => {
    return (
        <>
           <p className={"p2 "+className}>{children}</p> 
        </>
    )
}
export const P3 = ({children,className}) => {
    return (
        <>
           <p className={"p3 "+className}>{children}</p> 
        </>
    )
}

