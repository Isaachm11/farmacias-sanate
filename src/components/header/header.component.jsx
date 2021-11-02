import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// import { ReactComponent as Logo } from '../../assets/crown.svg';
import { GiHospitalCross } from "react-icons/gi";

import { logoutUser } from "../../redux/user/user.actions";

import "./header.styles.scss";

const Header = ({ currentUser, logoutUser }) => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const toggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/products">
        <GiHospitalCross className="logo" />
        <div className="user-name">{currentUser.name} - {currentUser.type}</div>
      </Link>
      <div className="options">
        <Link className="option" to="/products">
          SHOP
        </Link>
        <Link className="option" to="/products">
          CONTACT
        </Link>
        <Link onClick={logoutUser} className="option" to="/">
          LOG OUT
        </Link>
        <CartIcon toggleCartDropdown={toggleCartDropdown} />
      </div>
      {showCartDropdown ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
