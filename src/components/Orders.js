import React, {useEffect} from "react";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Orders = () => {
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
                <h2>Orders</h2>
            </div>
        </div>
        </>
    )
}

export default Orders;