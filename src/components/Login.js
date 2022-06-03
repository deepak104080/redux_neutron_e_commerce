import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../redux/actions/loginAction';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputRef1 = useRef();
    const inputRef2 = useRef();

    const loginData = useSelector((state) => state.login);

    console.log('----login data from selector -----', loginData);

    if(loginData.loginStatus) {
        navigate('/productlist');
    }

    const loginFn = () => {
        // take two input values
        let username = inputRef1.current.value;
        let password = inputRef2.current.value;
        console.log('useername and password', username, password);

        // call api with username and password
        // if successfull, call dispatch
        if(username === 'deepak123' && password === '123456') {
            dispatch(loginUser('newtonschool'));
        }
        // else
        // show error
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
                Username: <input type="text" ref={inputRef1} name="username" value={'deepak123'}/>
                Password: <input type="password" ref={inputRef2} name="password" value={'123456'}/>
                <button onClick={loginFn}>Login</button>
            </div>
        </div>
        </>
    )
}

export default Login;