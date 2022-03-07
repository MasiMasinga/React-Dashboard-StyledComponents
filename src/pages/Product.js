import React from "react";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@material-ui/icons";
import {
  ItemContainer,
  ItemTitleContainer,
  ItemAddButton,
  ItemShowImg,
  ItemUploadImg,
  ItemUpdateButton,
  ItemUpload,
} from "../styles/styled-elements";
import {
  ProductTopContainer,
  TopLeftContainer,
  InfoTopContainer,
  InfoBottomContainer,
  TopRightContainer,
  InfoItemContainer,
  FormLeft,
  FormRight,
  ProductBottomContainer,
  ProductForm,
} from "../styles/Product.styled";

const Product = () => {
  return (
    <ItemContainer>
      <ItemTitleContainer>
        <h1>Edit Product</h1>
        <Link to="/product/NewProduct">
          <ItemAddButton>Create</ItemAddButton>
        </Link>
      </ItemTitleContainer>
      <ProductTopContainer>
        <TopLeftContainer>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeftContainer>
        <TopRightContainer>
          <InfoTopContainer>
            <ItemShowImg
              mr
              src="https://picsum.photos/200/300/?random=1"
              alt="show-image"
            />
            <span className="productName">Mac Mini M1</span>
          </InfoTopContainer>
          <InfoBottomContainer>
            <InfoItemContainer>
              <span>id:</span>
              <span className="productInfoValue">123</span>
            </InfoItemContainer>
            <InfoItemContainer>
              <span>sales:</span>
              <span className="productInfoValue">5123</span>
            </InfoItemContainer>
            <InfoItemContainer>
              <span>active:</span>
              <span className="productInfoValue">yes</span>
            </InfoItemContainer>
            <InfoItemContainer>
              <span>in stock:</span>
              <span className="productInfoValue">no</span>
            </InfoItemContainer>
          </InfoBottomContainer>
        </TopRightContainer>
      </ProductTopContainer>
      <ProductBottomContainer>
        <ProductForm>
          <FormLeft>
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
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
          </FormLeft>
          <FormRight>
            <ItemUpload>
              <ItemUploadImg
                src="https://picsum.photos/200/300/?random=1"
                alt="upload-img"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </ItemUpload>
            <ItemUpdateButton>Update</ItemUpdateButton>
          </FormRight>
        </ProductForm>
      </ProductBottomContainer>
    </ItemContainer>
  );
};

export default Product;
