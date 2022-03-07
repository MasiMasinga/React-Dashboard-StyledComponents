import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
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
  UserContainer,
  ShowUser,
  ShowUserTop,
  ShowTopTitle,
  FontWeight,
  ShowUserBottom,
  UserShowInfo,
  UserShowTitle,
  UpdateUser,
  UpdateTitle,
  UpdateForm,
  UpdateItem,
  UpdateRight,
  MyPublish,
} from "../styles/User.styled";

const User = () => {
  return (
    <ItemContainer>
      <ItemTitleContainer>
        <h1>Edit User</h1>
        <Link to="/newUser">
          <ItemAddButton>Create</ItemAddButton>
        </Link>
      </ItemTitleContainer>
      <UserContainer>
        <ShowUser>
          <ShowUserTop>
            <ItemShowImg
              src="https://randomuser.me/api/portraits/women/77.jpg"
              alt="show-image"
            />
            <ShowTopTitle>
              <FontWeight bolder>Rebecca Parker</FontWeight>
              <FontWeight>UX Designer</FontWeight>
            </ShowTopTitle>
          </ShowUserTop>
          <ShowUserBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <PermIdentity className="showIcon" />
              <span className="showInfoTitle">rebecca99</span>
            </UserShowInfo>
            <UserShowInfo>
              <CalendarToday className="showIcon" />
              <span className="showInfoTitle">22-12-1999</span>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <PhoneAndroid className="showIcon" />
              <span className="showInfoTitle">+91 123 456 67</span>
            </UserShowInfo>
            <UserShowInfo>
              <MailOutline className="showIcon" />
              <span className="showInfoTitle">rebecca99@gmail.com</span>
            </UserShowInfo>
            <UserShowInfo>
              <LocationSearching className="showIcon" />
              <span className="showInfoTitle">Mumbai | India</span>
            </UserShowInfo>
          </ShowUserBottom>
        </ShowUser>
        <UpdateUser>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <div>
              <UpdateItem>
                <label>Username</label>
                <input type="text" placeholder="rebecca99" />
              </UpdateItem>
              <UpdateItem>
                <label>Full Name</label>
                <input type="text" placeholder="Rebecca Parker" />
              </UpdateItem>
              <UpdateItem>
                <label>Email</label>
                <input type="text" placeholder="rebecca99@gmail.com" />
              </UpdateItem>
              <UpdateItem>
                <label>Phone</label>
                <input type="text" placeholder="+91 123 456 67" />
              </UpdateItem>
              <UpdateItem>
                <label>Address</label>
                <input type="text" placeholder="Mumbai | India" />
              </UpdateItem>
            </div>
            <UpdateRight>
              <ItemUpload>
                <ItemUploadImg
                  src="https://randomuser.me/api/portraits/women/77.jpg"
                  alt="upload-img"
                />
                <label htmlFor="file">
                  <MyPublish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </ItemUpload>
              <ItemUpdateButton>Update</ItemUpdateButton>
            </UpdateRight>
          </UpdateForm>
        </UpdateUser>
      </UserContainer>
    </ItemContainer>
  );
};

export default User;
