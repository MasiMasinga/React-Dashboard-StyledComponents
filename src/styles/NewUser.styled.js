import styled from "styled-components";

export const UserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const UserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;

  label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }

  input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  select {
    height: 40px;
    border-radius: 5px;
  }
`;

export const UserRadio = styled.div`
  input {
    margin-top: 15px;
  }

  label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;

export const UserButton = styled.button`
  width: 200px;
  border: none;
  background-color: #1876f2;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
