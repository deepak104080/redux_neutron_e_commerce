import React, {useEffect} from "react";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Wishlist = () => {
    const navigate = useNavigate();
    const loginData = useSelector((state) => state.login);
    
    useEffect(() => {
        console.log('----login data from selector -----', loginData);
        if(!loginData.loginStatus) {
            navigate('/');
        }
    })
    return(
        <> 
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                <h2>Wishlist</h2>
            </div>
        </div>
        </>
    )
}

export default Wishlist;