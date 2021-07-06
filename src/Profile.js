import Button from "@material-ui/core/Button";

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
    return (
      <div>
        {/* <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p>
        <p>{this.state.user.}</p> */}
        <Button>Edit Profile: </Button>
      </div>
    );
  }
}

export default Profile;
