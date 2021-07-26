import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const React = require("react");
const axios = require("axios");

const url = "https://student-network-backend-stage.herokuapp.com/userprofile";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  async componenetDidMount() {
    try {
      const response = await axios.get(url);
      const json = await response.json();
      this.setState({ user: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // first_name = form["first_name"],
    // last_name = form["last_name"],
    // nationality = form["nationality"],
    // interests = form["interests"],
    // education_level = form["education"],
    // school = form["school"],
    // work_email = form["work_email"])
    return (
      <div>
        {/* <p>{this.state.user.first_name}</p>
        <p>{this.state.user.last_name}</p>
        <p>{this.state.user.nationality}</p>
        <p>{this.state.user.education}</p>
        <p>{this.state.user.school}</p>
        <p>{this.state.user.interests}</p>
        <p>{this.state.user.work_email}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p> */}
        <Button component={RouterLink} to="/editprofile">
          Edit Profile:{" "}
        </Button>
      </div>
    );
  }
}

export default Profile;
