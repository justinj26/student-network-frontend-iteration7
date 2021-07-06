
import React from "react";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      {/* <h2>Welcome to The Student Network!</h2> */}
      <div>
        {/* <h3>Log in </h3>
        <h5>Login!</h5> */}
        <Login />
        {/* <br />
        <h5>No account?</h5>
        
        <Button variant="contained" color="primary" component={RouterLink} to="/signup">
          Sign Up!
        </Button> */}
      </div>
    </div>
  );
}
