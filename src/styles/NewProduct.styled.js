import styled from "styled-components";

export const NewProductContainer = styled.div`
  display: flex;
`;

export const ProductLeft = styled.div`
  flex: 1;
`;

export const ImageContainer = styled.div`
  flex: 3;
`;

export const ProductForm = styled.form`
  margin-top: 10px;
`;

export const ProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  input,
  select {
    padding: 10px;
  }
`;

export const ProductButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: #1876f2;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const Preview = styled.div`
  margin-top: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    max-height: 320px;
    object-fit: cover;
  }

  button {
    cursor: pointer;
    padding: 15px;
    background-color: red;
    color: white;
    border: none;
    font-weight: 600;
  }
`;
