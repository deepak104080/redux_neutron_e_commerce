import React, { useEffect } from "react";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const loginData = useSelector((state) => state.login);
    
    useEffect(() => {
        console.log('----login data from selector -----', loginData);
        if(!loginData.loginStatus) {
            navigate('/');
        }
    })

    const placeOrder = () => {
        console.log('order placed....');
        //dispatch for adding product in orders
        //navigate to orders page
    }

    const cartData = useSelector((state) => state.cart);
    console.log('-----------cart data--------------', cartData);
    
    return(
        <> 
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                <h2>Cart</h2>
            </div>
        </div>

        <div className="row bg-success bg-opacity-10">
            <div className="col-12">
                <table className="table table-bordered">
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{cartData.title}</td>
                        <td><img src={cartData.image} className="img-fluid img-thumbnail"/></td>
                        <td>{cartData.price}</td>
                        <td>1</td>
                        <td>{cartData.price}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="row bg-info bg-opacity-50">
            <div className="col-12 text-center">
                <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
            </div>
        </div>
        </>
    )
}

export default Cart;