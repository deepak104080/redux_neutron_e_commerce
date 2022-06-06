import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setSelectedProduct} from '../redux/actions/productDetailActions';
import {addToCart} from '../redux/actions/cartActions';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log('id from list page - ', id);

    let tempProduct = {};

    tempProduct = useSelector((state) => state.selectedProduct);
    //console.log('---data from selected product store - ', tempProduct);

    const loginData = useSelector((state) => state.login);
    //console.log('----login data from selector -----', loginData);
    const cartData = useSelector((state) => state.cart);
    // console.log('----login data from selector for cart -----', cartData);

    const tempData = useSelector((state) => state);
    console.log('----login data from selector -----', tempData);


    const fetchProductDetail = async () => {
        const url = 'https://fakestoreapi.com/products/'+id;
        const response = await axios.get(url);
        // console.log('----response data in product detail api call ----', response.data);
        dispatch(setSelectedProduct(response.data));
    }

    useEffect(() => {
        fetchProductDetail();
    }, [])

    const addCart = () => {
        dispatch(addToCart(tempProduct));
    }

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
                <h2>{tempProduct.title || ' '}</h2>
                <h2>{tempProduct.price || ' '}</h2>
                <h3>{tempProduct.category || ' '}</h3>
                <p>{tempProduct.description || ' '}</p>
            </div>
            <div className="col-4">
                {
                    loginData.loginStatus && (
                        <>
                        {
                            cartData.products.map((temp) => temp.id).indexOf(tempProduct.id) !== -1  ? 
                            (<Link to='/cart'>Go to Cart</Link>) : 
                            (<button onClick={addCart}>Add to Cart</button>)
                        }
                        
                        <br></br>
                        <button>Add to Wishlist</button>
                        </>
                    )
                }
                
            </div>
        </div>
        </>
    )
}

export default ProductDetail;