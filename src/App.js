import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/sign-in/sign-in";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="" component={SignIn} />
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
