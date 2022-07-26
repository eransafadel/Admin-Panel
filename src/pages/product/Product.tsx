import React from 'react';
import { Link } from "react-router-dom";
import "./product.css";
import MyChart from "../../components/chart/MyChart";
import {productData} from "./data/data";
import {productRows,productRowsInfo} from "../data/data";
import { Publish } from "@material-ui/icons";

const Product = () => {

    const index:string| undefined = window.location.href.split("/").pop();
   
    const indexNum: number = Number(index);


    const item:productRowsInfo = productRows[indexNum-1];

  
    return (
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
              <div className="productTopLeft">
                  <MyChart data={productData} dataKey="Sales" title="Sales Performance" grid={false}/>
              </div>
              <div className="productTopRight">
                  <div className="productInfoTop">
                      <img src={item.img} alt="" className="productInfoImg" />
                      <span className="productName">{item.name}</span>
                  </div>
                  <div className="productInfoBottom">
                      <div className="productInfoItem">
                          <span className="productInfoKey">id:</span>
                          <span className="productInfoValue">{item.id}</span>
                      </div>
                      <div className="productInfoItem">
                          <span className="productInfoKey">sales:</span>
                          <span className="productInfoValue">5123</span>
                      </div>
                      <div className="productInfoItem">
                          <span className="productInfoKey">active:</span>
                          <span className="productInfoValue">yes</span>
                      </div>
                      <div className="productInfoItem">
                          <span className="productInfoKey">in stock:</span>
                          <span className="productInfoValue">no</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="productBottom">
              <form className="productForm">
                  <div className="productFormLeft">
                      <label>Product Name</label>
                      <input type="text" placeholder={item.name} />
                      <label>In Stock</label>
                      <select name="inStock" id="idStock">
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
                          <img src={item.img} alt="" className="productUploadImg" />
                          <label htmlFor="file">
                              <Publish/>
                          </label>
                          <input type="file" id="file" style={{display:"none"}} />
                      </div>
                      <button className="productButton">Update</button>
                  </div>
              </form>
          </div>
        </div>
      );
}

export default Product;