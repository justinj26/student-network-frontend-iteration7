import Button from "@material-ui/core/Button";
import extracurriculars from "./extracurriculars";
import majors from "./majors";
import { Form, Col, Row } from "react-bootstrap";

// styling
import styles from "./Filter.module.css";
import { Link as RouterLink } from "react-router-dom";

const countries_json = require("all-countries-and-cities-json");
const student_status = ["High School", "Undergraduate", "Graduate"];
// const years = ["1", "2", "3", "4"];
const majors_list = majors.sort();
// data formatting
const countries = Object.keys(countries_json);
const extracurriculars_list = extracurriculars.sort();

// be able to use react
const React = require("react");

// package for REST operations
const axios = require("axios");

// url to get all users
const url = "https://student-network-backend-stage.herokuapp.com/users";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filter_major1: "",
      filter_major2: "",
      filter_major3: "",
      filter_school: "",
      filter_nationality: "",
      filter_extracurricular1: "",
      filter_extracurricular2: "",
      filter_extracurricular3: "",
      filter_education: "",
      users_to_display: []
    };

    this.handleMajor1 = this.handleMajor1.bind(this);
    this.handleMajor2 = this.handleMajor2.bind(this);
    this.handleMajor3 = this.handleMajor3.bind(this);
    this.handleExtracurricular1 = this.handleExtracurricular1.bind(this);
    this.handleExtracurricular2 = this.handleExtracurricular2.bind(this);
    this.handleExtracurricular3 = this.handleExtracurricular3.bind(this);
    this.handleSchool = this.handleSchool.bind(this);
    this.handleNationality = this.handleNationality.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componenetDidMount() {
    try {
      const response = await axios.get(url);
      const json = await response.json();
      this.setState({ users: json });
    } catch (error) {
      console.log(error);
    }
  }

  handleMajor1(event) {
    this.setState({ filter_major1: event.target.value });
  }
  handleMajor2(event) {
    this.setState({ filter_major2: event.target.value });
  }
  handleMajor3(event) {
    this.setState({ filter_major3: event.target.value });
  }
  handleExtracurricular1(event) {
    this.setState({ filter_extracurricular1: event.target.value });
  }
  handleExtracurricular2(event) {
    this.setState({ filter_extracurricular2: event.target.value });
  }
  handleExtracurricular3(event) {
    this.setState({ filter_extracurricular3: event.target.value });
  }
  handleSchool(event) {
    this.setState({ filter_school: event.target.value });
  }

  handleNationality(event) {
    this.setState({ filter_nationality: event.target.value });
  }

  handleEducation(event) {
    this.setState({ filter_education: event.target.value });
  }

  // childFunction=(e)=>{
  //   e.preventDefault();
  //   this.props.functionCallFromHome(`${this.state.users_to_display}`);
  // }

  handleSubmit(event) {
    event.preventDefault();

    // let users_to_display = this.state.users;
    // if (this.state.filter_major1 !== "") {
    //   users_to_display = users_to_display.filter((user) => user.major);
    // }
    // if (this.state.filter_school !== "") {
    //   users_to_display = users_to_display.filter((user) => user.major);
    // }
    // if (this.state.filter_nationality !== "") {
    //   users_to_display = users_to_display.filter((user) => user.major);
    // }
    // if (this.state.filter_major2 !== "") {
    //   users_to_display = users_to_display.filter((user) => user.major);
    // }
    let users_to_display = this.state.users;
    if (this.state.filter_major1 !== "") {
      users_to_display = users_to_display.filter(
        (user) => user.major === this.state.filter_major1
      );
    }
    if (this.state.filter_major2 !== "") {
      users_to_display = users_to_display.filter(
        (user) => user.major === this.state.filter_major2
      );
    }
    if (this.state.filter_major3 !== "") {
      users_to_display = users_to_display.filter(
        (user) => user.major === this.state.filter_major2
      );
    }
    if (this.state.filter_extracurricular1 !== "") {
      users_to_display = users_to_display.filter((user) =>
        user.intersts.member(this.state.filter_extracurricular1)
      );
    }
    if (this.state.filter_extracurricular2 !== "") {
      users_to_display = users_to_display.filter(
        (user) => user.extracurricular2 === this.state.filter_extracurricular2
      );
    }
    if (this.state.filter_extracurricular3 !== "") {
      users_to_display = users_to_display.filter(
        (user) => user.extracurricular3 === this.state.filter_extracurricular3
      );
    }
    if (this.state.filter_school !== "") {
      users_to_display = users_to_display.filter(
        (user) => user.school_name === this.state.filter_school
      );
    }
    if (this.state.filter_nationality !== "") {
      users_to_display = users_to_display.filter(
        (user) => user.nationality === this.state.filter_nationality
      );
    }

    this.props.functionCallFromHome(`${this.state.users_to_display}`)
  }

  render() {
    // let users_to_display = this.state.users;
    // if (this.state.filter_major1 !== "") {
    //   users_to_display = users_to_display.filter((user) => user.major === this.state.filter_major1);
    // }
    // if (this.state.filter_major2 !== "") {
    //   users_to_display = users_to_display.filter(user => user.major === this.state.filter_major2)
    // }
    // if (this.state.filter_major3 !== "") {
    //   users_to_display = users_to_display.filter(user => user.major === this.state.filter_major2)
    // }
    // if (this.state.filter_extracurricular1 !== "") {
    //   users_to_display = users_to_display.filter(user => user.extracurricular1 === this.state.filter_extracurricular1)
    // }
    // if (this.state.filter_extracurricular2 !== "") {
    //   users_to_display = users_to_display.filter(user => user.extracurricular2 === this.state.filter_extracurricular2)
    // }
    // if (this.state.filter_extracurricular3 !== "") {
    //   users_to_display = users_to_display.filter(user => user.extracurricular3 === this.state.filter_extracurricular3)
    // }
    // if (this.state.filter_school !== "") {
    //   users_to_display = users_to_display.filter((user) => user.school_name === this.state.filter_school);
    // }
    // if (this.state.filter_nationality !== "") {
    //   users_to_display = users_to_display.filter((user) => user.nationality === this.state.filter_nationality );
    // }

    // if (filter_major != "") {
    //   users_to_display = users_to_display.filter(user => user.major)
    // }

    // Thought: put filter logic back here: if the memory of these unkas are well-served, the render
    // method re-renders whenever state is changed.

    return (
      // <div>
      // <div className={styles.filter_box}>
      //   {/* <div className={styles.cutoff_box}> */}
      //   Filter:
      //   <form>
      //     <label>
      //       <input type="checkbox" value="nationality" />
      //       Nationality:
      //       <select
      //         value={this.state.filter_nationality}
      //         onChange={this.handleNationality}
      //       >
      //         <option>{""}</option>
      //         {countries.map((country) => (
      //           <option>{country}</option>
      //         ))}
      //       </select>
      //     </label>
      //     <br />
      //     <label>
      //       <input type="checkbox" value="school_name" />
      //       School Name:
      //       <input
      //         type="text"
      //         value={this.state.filter_school}
      //         onChange={this.handleSchool}
      //         />
      //     </label>
      //     <br />
      //     <label>
      //       Major:
      //       <select
      //         value={this.state.filter_major1}
      //         onChange={this.handleMajor1}
      //       >
      //         <option>{""}</option>
      //         {majors_list.map((major) => (
      //           <option>{major}</option>
      //         ))}
      //       </select>
      //     </label>
      //     <br />
      //     <label>
      //       <label>
      //         Major:
      //         <select
      //           value={this.state.filter_major2}
      //           onChange={this.handleMajor2}
      //         >
      //           <option>{""}</option>
      //           {majors_list.map((major) => (
      //             <option>{major}</option>
      //           ))}
      //         </select>
      //       </label>{" "}
      //       <label>
      //         Major:
      //         <select
      //           value={this.state.filter_major3}
      //           onChange={this.handleMajor3}
      //         >
      //           <option>{""}</option>
      //           {majors_list.map((major) => (
      //             <option>{major}</option>
      //           ))}
      //         </select>
      //       </label>
      //       Extracurricular:
      //       <select
      //         value={this.state.filter_extracurricular1}
      //         onChange={this.handleExtracurricular1}
      //       ><option>{""}</option>
      //         {extracurriculars_list.map((extra) => (
      //           <option>{extra}</option>
      //         ))}
      //       </select>
      //     </label>
      //     <label>
      //       Extracurricular:
      //       <select
      //         value={this.state.filter_extracurricular2}
      //         onChange={this.handleExtracurricular2}
      //       >
      //         <option>{""}</option>
      //         {extracurriculars_list.map((extra) => (
      //           <option>{extra}</option>
      //         ))}
      //       </select>
      //     </label>
      //     <label>
      //       Extracurricular:
      //       <select
      //         value={this.state.filter_extracurricular3}
      //         onChange={this.handleExtracurricular3}
      //       >
      //         <option>{""}</option>
      //         {extracurriculars_list.map((extra) => (
      //           <option>{extra}</option>
      //         ))}
      //       </select>
      //     </label>
      //     <label>
      //       Education Level:
      //       <select
      //         value={this.state.filter_education}
      //         onChange={this.handleEducation}
      //       >
      //         <option>{""}</option>
      //         {student_status.map((level) => (
      //           <option>{level}</option>
      //         ))}
      //       </select>
      //     </label>

      //     {/* <Button type="submit" onClick={this.handleSubmit} component={RouterLink} to="/home/filter">Search using filter</Button> */}
      //   </form>
      <div className={styles.filter_box}>
        <p id={styles.filter_title}>Filter: </p>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Nationality:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                value={this.state.filter_nationality}
                onChange={this.handleNationality}
                custom
                // required
              >
                <option>{""}</option>
                {countries.map((country) => (
                  <option>{country}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
              School Name:
            </Form.Label> */}
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.filter_school}
                onChange={this.handleSchool}
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
              Major:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                value={this.state.filter_major1}
                onChange={this.handleMajor1}
                custom
              >
                <option>{""}</option>
                {majors_list.map((major) => (
                  <option>{major}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Major:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                value={this.state.filter_major2}
                onChange={this.handleMajor2}
                custom
              >
                <option>{""}</option>
                {majors_list.map((major) => (
                  <option>{major}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Major:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                value={this.state.filter_major3}
                onChange={this.handleMajor3}
                custom
              >
                <option>{""}</option>
                {majors_list.map((major) => (
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
                value={this.state.filter_extracurricular1}
                onChange={this.handleExtracurricular1}
                custom
              >
                <option>{""}</option>
                {extracurriculars_list.map((extracurricular) => (
                  <option>{extracurricular}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
              <Form.Control
                as="select"
                value={this.state.filter_extracurricular2}
                onChange={this.handleExtracurricular2}
                custom
              >
                <option>{""}</option>
                {extracurriculars_list.map((extracurricular) => (
                  <option>{extracurricular}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
              <Form.Control
                as="select"
                value={this.state.filter_extracurricular3}
                onChange={this.handleExtracurricular3}
                custom
              >
                <option>{""}</option>
                {extracurriculars_list.map((extracurricular) => (
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
              Education Level:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                value={this.state.filter_education}
                onChange={this.handleEducation}
                custom
              >
                <option>{""}</option>
                {student_status.map((level) => (
                  <option>{level}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <br />
          <Button variant="outlined" onChange={this.handleSubmit}  type="submit" component={RouterLink} to="/filter">
            {/* onClick={this.childFunction.bind(this)} */}
            Filter
          </Button>
          {/* </Col> */}
          {/* </Form.Group> */}
        </Form>
      </div>
      //   <Form.Group as={Row} controlId="formHorizontalEmail">
      //     <Form.Label column sm={2}>
      //       Fun fact:
      //     </Form.Label>
      //     <Col sm={10}>
      //       <Form.Control
      //         as="textarea"
      //         type="textarea"
      //         value={this.state.data.fun_fact}
      //         onChange={this.handleFunFact}
      //         placeholder="Fun fact"
      //         required
      //       />
      //       <Form.Control.Feedback type="invalid">
      //          username or password not recognized */}
      //       </Form.Control.Feedback>
      //     </Col>
      //   </Form.Group>
      // // </div>
    );
  }
}

export default Filter;
