// Login page
import styles from "./Login.module.css";

import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import { Redirect } from "react-router-dom";

// import { Form, Input, Button, Select, Checkbox } from "antd";
import { Form, Col, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
// import country_names from "./countries";
import majors from "./majors";
import extracurriculars from "./extracurriculars";

const axios = require("axios");
const React = require("react");
const countries_json = require("all-countries-and-cities-json");
// thought: user likely from a different page
// const user = {};
const basic_login_url =
  "https://student-network-backend-stage.herokuapp.com/signup";
const user_info_url =
  "https://student-network-backend-stage.herokuapp.com/updateprofile";

const student_status = ["High School", "Undergraduate", "Graduate"];
const years = ["1", "2", "3", "4"];
const countries = Object.keys(countries_json);


const url = "https://student-network-backend-stage.herokuapp.com/login";

class SignUp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      data: {
        nationality: "",
        // : ["", ""],
        telephone: "",
        student_status: "",
        student_year: "",
        location_city: "",
        school_name: "",
        potential_major: "",
        extracurricular1: "",
        extracurricular2: "",
        extracurricular3: "",
        fun_fact: ""
      },
      validated: false,
      count: 0
    };

    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleNationality = this.handleNationality.bind(this);
    this.handleTelephone = this.handleTelephone.bind(this);
    this.handleExtracurricular1 = this.handleExtracurricular1.bind(this);
    this.handleExtracurricular2 = this.handleExtracurricular2.bind(this);
    this.handleExtracurricular3 = this.handleExtracurricular3.bind(this);
    this.handleStudentStatus = this.handleStudentStatus.bind(this);
    this.handleStudentYear = this.handleStudentYear.bind(this);
    this.handleFunFact = this.handleFunFact.bind(this);
    this.handlePotentialMajor = this.handlePotentialMajor.bind(this);
    this.handleSchoolName = this.handleSchoolName.bind(this);
    this.handleLocationCity = this.handleLocationCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle1 = this.handleToggle1.bind(this);
    this.handleToggle2 = this.handleToggle2.bind(this);
  }

  handleFirst(event) {
    this.setState({ user: { first_name: event.target.value } });
  }
  handleLast(event) {
    this.setState({ user: { last_name: event.target.value } });
  }
  handleEmail(event) {
    this.setState({ user: { email: event.target.value } });
  }
  handlePassword(event) {
    this.setState({ user: { password: event.target.value } });
  }
  handleNationality(event) {
    this.setState({ data: { nationality: event.target.value } });
  }
  handleTelephone(event) {
    this.setState({ data: { telephone: event.target.value } });
  }
  handleExtracurricular1(event) {
    this.setState({ data: { extracurricular1: event.target.value } });
  }
  handleExtracurricular2(event) {
    this.setState({ data: { extracurricular2: event.target.value } });
  }
  handleExtracurricular3(event) {
    this.setState({ data: { extracurricular3: event.target.value } });
  }
  handleStudentStatus(event) {
    this.setState({ data: { student_status: event.target.value } });
  }
  handleStudentYear(event) {
    this.setState({ data: { student_year: event.target.value } });
  }
  handleFunFact(event) {
    this.setState({ data: { fun_fact: event.target.value } });
  }
  handlePotentialMajor(event) {
    this.setState({ data: { potential_major: event.target.value } });
  }
  handleSchoolName(event) {
    this.setState({ data: { school_name: event.target.value } });
  }
  handleLocationCity(event) {
    this.setState({ data: { location_city: event.target.value } });
  }

  async handleSubmit(event) {
    alert("submitted");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      mentor_capacity: false
    };

    try {
      axios.post(basic_login_url, user);
    } catch (error) {
      alert(error.message);
    }
    const user_info = {
      nationality: this.state.data.nationality,
      telephone: this.state.data.telephone,
      student_status: this.state.data.student_status,
      student_year: this.state.data.student_year,
      location_city: this.state.data.location_city,
      school_name: this.state.data.school_name,
      potential_major: this.state.data.potential_major,
      extracurricular1: this.state.data.extracurricular1,
      extracurricular2: this.state.data.extracurricular2,
      extracurricular3: this.state.data.extracurricular3,
      fun_fact: this.state.data.fun_fact
  
    };

    try {
      axios.post(user_info_url, user_info);
    } catch (error) {
      alert(error.message);
    }

    this.setState({ validated: true });
  }

  handleToggle1(event) {
    alert("submitted");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    this.setState({ count: 1 })
  }

  handleToggle2(event) {
    alert("submitted");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    this.setState({ count: 2})
  }



 

    //   const response = await axios.post(url, user);
    //   const json = response.json();
    //   // store the user in localStorage
    //   localStorage.setItem("user_id", json["user_id"]);
    //   localStorage.setItem("token", json["token"]);
    //   console.log(response.data);
    //   // <Redirect to="/home" />
    // }
 
  // might not be a bad time for a get request /
  // this login information might be passed to the
  // the rest of the app
  // post request
  // thought: will need to be able to take errors from backend
  // and then display those errors.

  render() {

    let years_filter =
      this.state.data.student_statuses === "Graduate"
        ? years.slice(0, 3)
        : years;

    // const header = (
    //   <div className={styles.login_page}>
    //     <div className={styles.header}>
    //       <h1>The Student Network</h1>
    //     </div>
    // );   

    const signup1 = (
      <div className={styles.login_box}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
          First Name:
        </Form.Label> */}
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.user.first_name}
                onChange={this.handleFirst}
                placeholder="First Name"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
          Last Name:
        </Form.Label> */}
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={this.state.user.last_name}
                onChange={this.handleLast}
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
          Email:
        </Form.Label> */}
            <Col sm={10}>
              <Form.Control
                type="email"
                value={this.state.user.email}
                onChange={this.handleEmail}
                placeholder="School email"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalPassword">
            {/* <Form.Label column sm={2}>
          Password:
        </Form.Label> */}
            <Col sm={10}>
              <Form.Control
                type="password"
                value={this.state.user.password}
                onChange={this.handlePassword}
                placeholder="Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <p>
          <b>Let's Get Networking...</b>
          </p>
          <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button onClick={this.handleToggle1} type="submit">
                  <ArrowForwardIcon />
                </Button>
              </Col>
          </Form.Group>
        </Form>
        {/* <br />
        <p>
          <b>Let's Get Networking...</b>
        </p>
        <Button onClick={this.handleToggle1} type="submit">
          <ArrowForwardIcon />
        </Button> */}
      </div>
    );

    const signup2 = (
      <div className={styles.login_box}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Nationality:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                value={this.state.data.nationality}
                onChange={this.handleNationality}
                custom
                required
              >
                {countries.map((country) => (
                  <option>{country}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Hometown:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.data.location_city}
                onChange={this.handleLocationCity}
                placeholder="Format: city, state (if applicable)"
                required
              ></Form.Control>
            </Col>
          </Form.Group>

          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label sm={2}>Student Status: </Form.Label>
            {/* <Col sm={10}> */}
            <Form.Control
              as="select"
              value={this.state.data.student_status}
              onChange={this.handleStudentStatus}
              custom
              required
            >
              {student_status.map((niveau) => (
                <option>{niveau}</option>
              ))}
            </Form.Control>
            {/* </Col> */}
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label sm={2}>Year: </Form.Label>
            {/* <Col sm={10}> */}
            <Form.Control
              as="select"
              value={this.state.data.year}
              onChange={this.handleStudentYear}
              custom
              required
            >
              {years_filter.map((num) => (
                <option>{num}</option>
              ))}
            </Form.Control>
            {/* </Col> */}
          </Form.Group>
          <br />
          <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button onClick={this.handleToggle2} type="submit">
                  <ArrowForwardIcon />
                </Button>
              </Col>
          </Form.Group>
        </Form>
        {/* <br />
        <p>
          <b>Let's Get Networking...</b>
        </p>
        <Button onClick={this.handleToggle2} type="submit">
          <ArrowForwardIcon />
        </Button> */}
      </div>
    );

    const signup3 = (
      <div className={styles.login_box}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                School Name:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  value={this.state.data.school_name}
                  onChange={this.handleSchoolName}
                  placeholder="School Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {/* username or password not recognized */}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Potential major:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  value={this.state.data.potential_major}
                  onChange={this.handlePotentialMajor}
                  custom
                >
                  {majors.sort().map((major) => (
                    <option>{major}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Extracurriculars:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  value={this.state.data.extracurricular1}
                  onChange={this.handleExtracurricular1}
                  custom
                >
                  {extracurriculars.sort().map((extracurricular) => (
                    <option>{extracurricular}</option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {/* username or password not recognized */}
                </Form.Control.Feedback>
                <Form.Control
                  as="select"
                  value={this.state.data.extracurricular2}
                  onChange={this.handleExtracurricular2}
                  custom
                >
                  {extracurriculars.sort().map((extracurricular) => (
                    <option>{extracurricular}</option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {/* username or password not recognized */}
                </Form.Control.Feedback>
                <Form.Control
                  as="select"
                  value={this.state.data.extracurricular3}
                  onChange={this.handleExtracurricular3}
                  custom
                >
                  {extracurriculars.sort().map((extracurricular) => (
                    <option>{extracurricular}</option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {/* username or password not recognized */}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Fun fact:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  type="textarea"
                  value={this.state.data.fun_fact}
                  onChange={this.handleFunFact}
                  placeholder="Fun fact"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {/* username or password not recognized */}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
          <br />
        <p>
          <b>Let's Get Networking...</b>
        </p>
        <Button onClick={this.handleSubmit}>
           Sign Up
        </Button>
      </div>
    );
    let signup_page;
    let count = this.state.count;
    if (count === 0) {
      signup_page = signup1
    } else if (count === 1) {  
      signup_page = signup2
    } else if (count === 2) {
      signup_page = signup3
    }
    return (
      <div className={styles.login_page}>
        <div className={styles.header}>
          <h1>The Student Network</h1>
        </div>
        {signup_page}
           
        
        
        {/* <div className={styles.login_box}>
          <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
              First Name:
            </Form.Label> */}
        {/* <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.user.first_name}
                onChange={this.handleFirst}
                placeholder="First Name"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
        {/* </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
              Last Name:
            </Form.Label> */}
        {/* <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={this.state.user.last_name}
                onChange={this.handleLast}
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
        {/* </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
              Email:
            </Form.Label> */}
        {/* <Col sm={10}>
              <Form.Control
                type="email"
                value={this.state.user.email}
                onChange={this.handleEmail}
                placeholder="School email"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
        {/* </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalPassword">
            {/* <Form.Label column sm={2}>
              Password:
            </Form.Label> */}
        {/* <Col sm={10}>
              <Form.Control
                type="password"
                value={this.state.user.password}
                onChange={this.handlePassword}
                placeholder="Password"
                required */}
        {/* />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
        {/* </Form.Control.Feedback>
            </Col>
          </Form.Group> */}
        {/* </Form>
          <br />
        <p><b>Let's Get Networking...</b></p>
        <Button onClick={}><ArrowForwardIcon /></Button> */}
        {/* </div> */}
        {/* <div className={styles.sign_up}>
          <h5>No account?</h5>
        
          <Button variant="contained" color="primary" component={RouterLink} to="/signup">
            Sign Up!
          </Button>
        </div> */}
      </div>
    );
  }
}

export default SignUp1;
