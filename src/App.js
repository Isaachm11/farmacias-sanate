import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/sign-in/sign-in";
import ProductsList from "./pages/products-list/products-list";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/products" component={ProductsList} />
        {/* <Route path='/shop' /> */}
        {/* <Route exact path='/checkout' component={CheckoutPage} /> */}
        {/* <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          /> */}
      </Switch>
    </div>
  );
};

export default App;
