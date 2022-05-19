import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import './products.css';
import {productData} from '../../dummyData';

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to ="/NewProduct">
                    <button className="productAddButton">Create New Product</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} type= "monotone" dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img className="productInfoImg" src="" alt="" />
                        <span className="productName"> green Cup</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                    <form action="" className="productForm">
                        <div className="productFormLeft">
                            <label>Product Name</label>
                            <input type="text"placeholder="Apple Airpod" />
                            <label>In Stock</label>
                            <select name="inStock" id="inStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src="" alt="" className="productUploadImg" />
                                <label for="file">
                                    <Publish/>
                                </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <div className="productButton">Update</div>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Product
