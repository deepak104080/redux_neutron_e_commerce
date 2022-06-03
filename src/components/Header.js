import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, logoutUser} from '../redux/actions/loginAction';

const Header = () => {
    const navigate = useNavigate();
    const loginData = useSelector((state) => state.login);

    console.log('----login data from selector -----', loginData);

    const dispatch = useDispatch();

    const handleAuth = () => {
        if(loginData.loginStatus) {
            dispatch(logoutUser());
        }
        else {
            //dispatch(loginUser('newtonschool'));
            navigate('/');
        }
        
    }

    return(
        <> 
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                <h2>Header</h2>
            </div>
        </div>
        <div className="row bg-warning bg-opacity-50">
            <div className="col-2">
                <Link to='/productlist'>Home</Link>
            </div>
            <div className="col-2">
                <Link to='/cart'>Cart</Link>
            </div>
            <div className="col-2">
                <Link to='/orders'>Orders</Link>
            </div>
            <div className="col-2">
                <Link to='/wishlist'>Wishlist</Link>
            </div>
            <div className="col-2">
                <button className="btn btn-primary btn-sm" onClick={handleAuth}>
                    {
                        loginData.loginStatus ? 'Logout' : 'Login'
                    }
                </button>
            </div>
        </div>
        </>
    )
}

export default Header;