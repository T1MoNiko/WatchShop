import "./accountPage.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import { ChangeInfo } from "../../redux/PrivatOfficeSlice/types";
import { setAuth, changeInfo } from "../../redux/PrivatOfficeSlice/PrivatOfficeSlice";

const AccountPage: React.FC = () => {

    



  const { firstName, lastName, email, imageUrl } = useSelector(
    (state: RootState) => state.AccountReducer.data
  );
  const [state, setState] = useState<ChangeInfo>({
    firstName: "",
    lastName: "",
    imageUrl: imageUrl,
  });
  const [active, setActive] = useState(false);
  const [drag, setDrag] = useState(false);

  const dispatch = useAppDispatch();
  const { likedItems, cartItems } = useSelector(
    (state: RootState) => state.CartAndLikedSliceReducer
  );

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const ChangeInfo = () => {
    dispatch(changeInfo(state));
    setActive(false);
  };

  const ChangeBtnClick = () => {
    setActive(true);
    setState({
      firstName: "",
      lastName: "",
      imageUrl: imageUrl,
    });
  };

  function dragHandler(e: React.DragEvent) {
    e.preventDefault();
    setDrag(true);
  }

  function dragEndHandler(e: React.DragEvent) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("loadend", () => {
      setState((prev) => (reader.result ? { ...prev, imageUrl: reader.result } : prev));
    });
    setDrag(false);
  }

  return (
    <div uk-scrollspy="cls: uk-animation-fade; delay: 500">
      <Link to="/">
        <div id="arrowAnim">
          <div className="arrowSliding">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay1">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay2">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay3">
            <div className="arrow"></div>
          </div>
        </div>
      </Link>
      <h1 className="account-title">Personal account</h1>
      <div className="account-info-container">
        <div className="info-products">
          <div>
            <p>Amount of liked products: {likedItems.length}</p>
            <p>Amount of products in the cart: {cartItems.length}</p>
          </div>
          <Link to="/">
            <button onClick={() => dispatch(setAuth(false))}>sign out</button>
          </Link>
        </div>
        <div className="person-info">
          <div>{/* <img src={String(imageUrl)} alt="" /> */}</div>
          <p>{`${firstName} ${lastName}`}</p>
          <p>Email : {email}</p>
          <button onClick={() => ChangeBtnClick()}>Change</button>
        </div>
        {active && (
          <div className="reg-box">
            <p className="closeModal" onClick={() => setActive(false)}></p>
            <h1>Change information</h1>
            <input
              id="firstName"
              name="firstName"
              type="firstName"
              autoComplete="off"
              onChange={updateValue}
              className="regInput"
              placeholder="First name"
            />
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="off"
              onChange={updateValue}
              className="regInput"
              placeholder="Second name"
            />
            <input
              id="imageUrl"
              name="imageUrl"
              type="text"
              autoComplete="off"
              onChange={updateValue}
              className="regInput"
              placeholder="Photo url"
            />
            <div
              className="drag"
              onDragStart={dragHandler}
              onDragLeave={dragEndHandler}
              onDragOver={dragHandler}
              onDrop={onDropHandler}
            >
              {drag ? <p>Drop it</p> : <p>Drag and drop a photo</p>}
            </div>
            {state.firstName.length && state.lastName.length ? (
              <button className="btnRegActive" type="submit" onClick={() => ChangeInfo()}>
                Change
              </button>
            ) : (
              <button className="disable" disabled type="submit">
                Change
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;