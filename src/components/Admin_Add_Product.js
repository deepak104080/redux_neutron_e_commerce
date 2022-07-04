import React, {useRef} from "react";
import axios from "axios";

const Admin_Add_Product = () => {
    let inputRef1 = useRef();
    let inputRef2 = useRef();
    let inputRef3 = useRef();
    let inputRef4 = useRef();
    let inputRef5 = useRef();
    let inputRef6 = useRef();
    let errorRef = useRef();


    const addProductFn = async () => {
        let obj = {};
        obj.id = inputRef1.current.value;
        obj.title = inputRef2.current.value;
        obj.price = inputRef3.current.value;
        obj.description = inputRef4.current.value;
        obj.image = inputRef5.current.value;
        obj.category = inputRef6.current.value;

        console.log(obj);
        if(obj.id !== '' && obj.title!== '' && obj.price!== '' && obj.category!== '' ) {
            //make post api call
            const url = 'http://localhost:4000/products/';

            const response = await axios.post(url, obj).catch(err => console.log(err))
            console.log(response);
            errorRef.current.textContent = ''
        }
        else {
            errorRef.current.textContent = 'Plz fill all the values.'
        }
        
    }

    return(
        <>
            <div className="row">
                <div className="col-12">
                    Product ID:
                    <input type="text" ref={inputRef1}/><br></br>
                    Title:
                    <input type="text" ref={inputRef2}/><br></br>
                    Price:
                    <input type="text" ref={inputRef3}/><br></br>
                    Description:
                    <input type="text" ref={inputRef4}/><br></br>
                    Category:
                    <input type="text" ref={inputRef5}/><br></br>
                    Image:
                    <input type="text" ref={inputRef6}/><br></br>
                    <button className="btn btn-primary" onClick={addProductFn}>Add Product</button>
                </div>
                <div className="text-danger" ref={errorRef}></div>
            </div>
        </>
    )
}

export default Admin_Add_Product;