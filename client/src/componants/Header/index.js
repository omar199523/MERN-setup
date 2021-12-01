import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {logout} from '../../store/action/authAction';



import './style.css';


const Header = ({setDarckMode ,DarckMode}) => {
    const {isAuthenticed} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <header className="main-header">
            <a href="/" className="main-logo">
                <h1>LINF</h1>
            </a>
            <div className= "main-nav-bar">
                <ul>
                    {(!isAuthenticed)?(
                        <>
                            <a href="/login"><li className="button sing-in">Sing In</li></a>
                            <a href="/signup"><li className="button sign-up">Sing Up</li></a>
                        </>
                     ):(
                        <>
                            <a href="/sherPersonData"><li className="button sign-up">Show Persons</li></a>
                            <a href="/mainForm"><li className="button sign-up">Add Person</li></a>
                            <button onClick={()=> dispatch(logout())}><li className="button sign-up">LogOut</li></button>
                        </>    
                        )}
                </ul>
            </div>
        </header>
    )
};
export default Header;
