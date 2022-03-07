import styled from "styled-components";

export const ProductTopContainer = styled.div`
    display: flex;
`
export const TopLeftContainer = styled.div`
    flex: 1;
`
export const TopRightContainer = styled(TopLeftContainer)`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export const InfoTopContainer = styled.div`
    display: flex;
    align-items: center;
    .productName {
        font-weight: 600;
    }
`
export const InfoBottomContainer = styled.div`
    margin-top: 10px;
`
export const InfoItemContainer = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    .productInfoValue {
        font-weight: 300;
    }
`
export const ProductBottomContainer = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`
export const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 10px;
        color: gray;
    }
    input {
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        border-bottom: 1px solid gray;
    }
    select{
        margin-bottom: 10px;
    }
`
export const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
