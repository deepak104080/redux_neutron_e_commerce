import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setSelectedProduct} from '../redux/actions/productDetailActions';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log('id from list page - ', id);

    const tempProduct = useSelector((state) => state.selectedProduct.selectedProduct);

    console.log('---data from selected product store - ', tempProduct);


    const fetchProductDetail = async () => {
        const url = 'https://fakestoreapi.com/products/'+id;
        const response = await axios.get(url);
        console.log('----response data in product detail api call ----', response.data);
        dispatch(setSelectedProduct(response.data));
    }

    useEffect(() => {
        fetchProductDetail();
    }, [])

    return(
        <>
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                Product Detail
            </div>
        </div>
        <div className="row bg-info bg-opacity-10">
            <div className="col-4">
                <img src={tempProduct.image} className="img-fluid"/>
            </div>
            <div className="col-4">
                <h2>{tempProduct.title}</h2>
                <h2>{tempProduct.price}</h2>
                <h3>{tempProduct.category}</h3>
                <p>{tempProduct.description}</p>
            </div>
            <div className="col-4">
                <button>Add to Cart</button>
                <button>Add to Wishlist</button>
            </div>
        </div>
        </>
    )
}

export default ProductDetail;