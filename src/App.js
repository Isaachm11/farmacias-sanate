import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignInPage from "./pages/sign-in/sign-in";
import ProductsListPage from "./pages/products-list/products-list";
import ProductEditPage from "./pages/product-edit/product-edit";
import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";
import Title from "./components/title/title.component";

const App = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? <Header /> : null}
      {/* <Header /> */}
      <Title />
      {!currentUser ? <Redirect to="/" /> : <Redirect to="/products" />}
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/products" component={ProductsListPage} />
        <Route exact path="/products/edit/:id" component={ProductEditPage} />
      </Switch>
      {/* <Switch> */}
      {/* <Route exact path="/" component={SignIn} /> */}
      {/* <Route exact path="/products" component={ProductsList} /> */}
      {/* <Route exact path='/checkout' component={CheckoutPage} /> */}
      {/* <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        /> */}
      {/* </Switch> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);

export const url_server = "https://1878-201-145-108-16.ngrok.io";
