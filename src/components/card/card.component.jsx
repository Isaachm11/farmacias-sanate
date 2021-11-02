import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./card.styles.scss";
import { withRouter } from "react-router";

const Card = ({ product, currentUser, history }) => (
  <div className="card-container">
    <h2 className="text-center">{product.name}</h2>
    <div className="content">
      <img
        className="image"
        src={`https://picsum.photos/seed/${product.p_id}/200`}
        alt="product"
      />

      <div className="info">
        <ul className="list-group">
          <li className="list-group-item text-justify">
            {product.description}
          </li>
          <li className="list-group-item">Price: $ {product.price}</li>
          <li className="list-group-item">Stock: {product.availability}</li>
        </ul>
      </div>
    </div>
    {currentUser.type === "USER" ? (
      <CustomButton>Add to cart</CustomButton>
    ) : (
      <CustomButton onClick={() => history.push(`products/edit/${product.p_id}`)}>Edit product</CustomButton>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Card));
