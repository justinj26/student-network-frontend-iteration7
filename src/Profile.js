import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const React = require("react");
const axios = require("axios");

const url_user_info =
  "https://student-network-backend-stage.herokuapp.com/userprofile";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  async componenetDidMount() {
    // let options = {
    //   user_id: "60b331d192bf21a0e630892a"
    //   headers: {
    //     Authorization: 'Basic a8df3427e4344bbeacc80b9e22b6cddc'
    //   }
    // }
    try {
      const response = await axios.post(
        url_user_info,
        "60b331d192bf21a0e630892a",
        {
          headers: {
            Authorization: `Basic ${"a8df3427e4344bbeacc80b9e22b6cddc"}`
          }
        }
      );
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
        <p>First name: {this.state.user.first_name}</p>
        <p>{this.state.user.last_name}</p>
        <p>{this.state.user.nationality}</p>
        <p>{this.state.user.education}</p>
        <p>{this.state.user.school}</p>
        <p>{this.state.user.interests}</p>
        <p>{this.state.user.work_email}</p>
        {/* <p>{this.state.user.}</p>
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
