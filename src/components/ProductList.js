import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from '../redux/actions/productActions';

const ProductList = () => {
    // const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const tempData = useSelector((state) => state.allProducts.products);

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
        <div className="row bg-success bg-opacity-10">
            <div className="col-12">
                HomePage - Product List
            </div>
        </div>

        <div className="row bg-success bg-opacity-10">
            <div className="col-12">
                {tempData && tempData.map((temp, index) => (
                    <div key={index + temp.title}>{temp.price} - {temp.title}</div>
                ))}
            </div>
        </div>
        </>
    )
}

export default ProductList;