import React, { useEffect } from "react";
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

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

    const cartData = useSelector((state) => state.cart.products);
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
                    {
                        cartData.map((item) => (
                            <tr>
                                <td>1</td>
                                <td>{item.title}</td>
                                <td><img src={item.image} style={{'max-width': 100}} className="img-fluid"/></td>
                                <td>{item.price}</td>
                                <td>1</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                    
                </table>
            </div>
        </div>

        <div className="row bg-info bg-opacity-10">
            <div className="col-6 text-center">
                <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
            </div>
            <div className="col-6 text-center">
                <Link to="/productlist" className="btn btn-primary" onClick={placeOrder}>Continue Shopping</Link>
            </div>
        </div>
        </>
    )
}

export default Cart;