// Login page
import styles from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "@material-ui/core/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link as RouterLink } from "react-router-dom";
// import { Redirect } from "react-router-dom";

const axios = require("axios");
const React = require("react");

const url = "https://student-network-backend-stage.herokuapp.com/login";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hidden: true,
      validated: false
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit(event) {
    alert("submitted");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();
    this.setState({ validated: true });

    if (this.state.validated) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };

      const response = await axios.post(url, user);
      const json = response.json();
      // store the user in localStorage
      localStorage.setItem("user_id", json["user_id"]);
      localStorage.setItem("token", json["token"]);
      console.log(response.data);
      // <Redirect to="/home" />
    }
  }
  // might not be a bad time for a get request /
  // this login information might be passed to the
  // the rest of the app
  // post request
  // thought: will need to be able to take errors from backend
  // and then display those errors.

  render() {
    return (
      <div className={styles.login_page}>
        <div className={styles.flex_center}>
          <div className={styles.header}>
            <h1>The Student Network</h1>
          </div>
          <div className={styles.login_box}>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                {/* <Form.Label column sm={2}>
                  Email
                </Form.Label> */}
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" required />
                  <Form.Control.Feedback type="invalid">
                    {/* username or password not recognized */}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <br />
              <Form.Group as={Row} controlId="formHorizontalPassword">
                {/* <Form.Label column sm={2}>
                  Password
                </Form.Label> */}
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" required />
                  <br />
                  <Form.Control.Feedback type="invalid">
                    {/* username or password not recognized */}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <br />
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button variant="contained" color="primary" type="submit">
                    Sign in
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
          <div className={styles.sign_up}>
            <h5>No account?</h5>
          
            <Button variant="contained" color="primary" component={RouterLink} to="/signup">
              Sign Up!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

// <Form>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>

// <div className={styles.login_page}>
//   <form onSubmit={this.handleSubmit}>
//     <label>
//       Email:
//       <input
//         type="text"
//         value={this.state.email}
//         onChange={this.handleEmail}
//       />
//     </label>
//     <br />
//     <label>
//       Password:
//       <input
//         type="password"
//         value={this.state.password}
//         onChange={this.handlePassword}
//       />
//     </label>
//     <input type="submit" value="Submit" />
//   </form>
// </div>

// {/* <Form>
// <Col>
//   <Form.Group as={Col} controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group as={Col} controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>

//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>

//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Col>
// </Form> */}
