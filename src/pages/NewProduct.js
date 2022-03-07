import React, { useState } from "react";
import { TheList } from "../styles/styled-elements";
import {
  NewProductContainer,
  ProductLeft,
  ProductForm,
  ProductItem,
  ProductButton,
  ImageContainer,
  Preview,
} from "../styles/NewProduct.styled";

const NewProduct = () => {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <TheList>
      <NewProductContainer>
        <ProductLeft>
          <h1>New Product</h1>
          <ProductForm>
            <ProductItem>
              <label>Image</label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={imageChange}
              />
            </ProductItem>
            <ProductItem>
              <label>Name</label>
              <input type="text" placeholder="Apple Airpods" />
            </ProductItem>
            <ProductItem>
              <label>Stock</label>
              <input type="text" placeholder="123" />
            </ProductItem>
            <ProductItem>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </ProductItem>
            <ProductButton>Create</ProductButton>
          </ProductForm>
        </ProductLeft>
        <ImageContainer>
          {selectedImage && (
            <Preview>
              <img src={URL.createObjectURL(selectedImage)} alt="preview" />
              <button onClick={removeSelectedImage}>Remove This Image</button>
            </Preview>
          )}
        </ImageContainer>
      </NewProductContainer>
    </TheList>
  );
};

export default NewProduct;
