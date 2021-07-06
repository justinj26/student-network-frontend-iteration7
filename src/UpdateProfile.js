// import { Form, Input, Button, Select, Checkbox } from "antd";
import { Form, Col, Row } from "react-bootstrap";
import styles from "./SignUp.module.css";
import Button from "@material-ui/core/Button";
// import country_names from "./countries";
import majors from "./majors";
import extracurriculars from "./extracurriculars";

const axios = require("axios");
const React = require("react");
const countries_json = require("all-countries-and-cities-json");
// thought: user likely from a different page
// const user = {};
const user_info_url = "https://student-network-backend-stage.herokuapp.com/updateprofile";
const get_url = "https://student-network-backend-stage.herokuapp.com/userprofile"

const student_status = ["High School", "Undergraduate", "Graduate"];
const years = ["1", "2", "3", "4"];
const countries = Object.keys(countries_json);

class UpdateProfile extends React.Component {
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
      validated: false
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
      password: this.state.password
    };

    try {
      axios.post(get_url, user);
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
    }

    
    try {
      axios.post(user_info_url, user_info);
    } catch (error) {
      alert(error.message);
    }


    this.setState({ validated: true });
  }

  

    // get user info
  async componenetDidMount() {
    try {
      const response = await axios.get(get_url);
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  
    
  }

  

  render() {
    let years_filter =
      this.state.data.student_statuses === "Graduate"
        ? years.slice(0, 3)
        : years;

    return (
      <div className={styles.form_box}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              First Name:
            </Form.Label>
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
            <Form.Label column sm={2}>
              Last Name:
            </Form.Label>
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
            <Form.Label column sm={2}>
              Email:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                value={this.state.user.email}
                onChange={this.handleEmail}
                placeholder="Email"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password:
            </Form.Label>
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
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Primary Phone:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="tel"
                value={this.state.data.telephone}
                onChange={this.handleTelephone}
                placeholder="Format: 555-555-5555"
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
          <h3>
            If in high school, feel free to fill out these next questions with
            college in mind!!!
          </h3>
          <br />
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
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              {/* // material-ui button */}

              <br />
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>
              <Button
                variant="contained"
                color="primary"
                onChange={this.handleSubmit}
                type="submit"
              >
                Sign Up
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UpdateProfile;