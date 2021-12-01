import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './style.css';

// import {clearErrors} from '../../store/action/errorAction'
import {register} from '../../store/action/authAction';

import {H2} from "../../componants/Typograph"


const SignUp = ()=> {
    const {error }= useSelector(state => state)
    const { auth }= useSelector(state => state)
     const dispatch = useDispatch();
    const [signupData , setSignUpData] = useState({
        modal:false,
        completName:"",
        email:"",
        password:"",
        confirmPassword:"",
        msg:null


    })
    useEffect(() => {
        if(error.id ==="REGISTER_FAIL"){
            setSignUpData({...signupData,msg:error.msg.msg})
        }
        
    }, [error.id, error.msg.msg])
    const handleOnChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setSignUpData({ ...signupData, [name]: value });
      };
      const handleOnSubmit=(e)=>{
        e.preventDefault();
        const {completName,password,confirmPassword,email} =signupData
        if(password ===confirmPassword){
            dispatch(register({name:completName,email,password}))
        }else if(password !==confirmPassword){
            setSignUpData({...signupData,msg:"Password and comfirm password must be equal"})
        }
        
      }
      const handleError = ()=>{
          if(error.status && signupData.msg){
              return (<output className="error">{signupData.msg}</output>)
          }else if (auth.isAuthenticed){
              return (<output className="sucssce">"Sign Up is Success"</output>)
          }else {
            return (<output></output>)
        }
      }
    return (
        <form onSubmit ={handleOnSubmit } className="signup-form">
            <H2>Sign Up</H2>
            {handleError()}
            <label htmlFor ="CompletName">
                Complet Name
                <input id="CompletName" type="text" name ="completName" value ={signupData.completName} onChange= {handleOnChange}/>
            </label>
            <label htmlFor ="email">
                Email
                <input id="email" type="email" name ="email" value ={signupData.email} onChange= {handleOnChange}/>
            </label>
            <label htmlFor ="Password">
                Password
                <input id="Password" type="password" name ="password" value ={signupData.password} onChange= {handleOnChange}/>
            </label>
            <label htmlFor ="Password">
                Confirm Password
                <input id="ConfirmPassword" type="password" name ="confirmPassword" value ={signupData.confirmPassword} onChange= {handleOnChange}/>
            </label>
            <button type="submit">Sign Up</button>
            
        </form>
    )
}



export default SignUp;