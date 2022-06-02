import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../redux/actions/loginAction';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginData = useSelector((state) => state.login);

    console.log('----login data from selector -----', loginData);

    if(loginData.loginStatus) {
        navigate('/productlist');
    }

    const loginFn = () => {
        // take two input values
        // call api with username and password
        // if successfull, call dispatch
        // else
        // show error
        dispatch(loginUser('newtonschool'));
    }
    return(
        <>
         <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                <h2>Login Page</h2>
            </div>
        </div>
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                Username: <input type="text" name="username" />
                Password: <input type="password" name="password"/>
                <button onClick={loginFn}>Login</button>
            </div>
        </div>
        </>
    )
}

export default Login;