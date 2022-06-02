import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import {setProducts} from '../redux/actions/productActions';

const ProductList = () => {
    // const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tempData = useSelector((state) => state.allProducts.products);


    const loginData = useSelector((state) => state.login);
    console.log('----login data from selector -----', loginData);
    if(!loginData.loginStatus) {
        navigate('/');
    }

    console.log('data from redux - ', tempData);

    const fetchProductsList = () => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(response => {
            console.log(response);
            // setData(response);
            // trigger action with data - type and payload;
            dispatch(setProducts(response));
        })
    }

    useEffect(() => {
        fetchProductsList();
    }, [])

    return(
        <>
        <div className="row bg-success bg-opacity-50">
            <div className="col-12">
                HomePage - Product List
            </div>
        </div>

        <div className="row bg-success bg-opacity-10">
            <div className="col-12">
                <div className="row">
                {tempData && tempData.map((temp, index) => (
                    <div className="col-4 product-item" key={index + temp.title}>
                        <div><Link to={`/productdetail/${temp.id}`}><img src={temp.image} className="img-fluid"/></Link></div>
                        <div>{temp.title}</div>
                        <div>{temp.price}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductList;