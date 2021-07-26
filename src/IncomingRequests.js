import Badge from "./Badge";
import Button from "@material-ui/core/Button";

const React = require("react");

class IncomingRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Badge />
        <Badge />
      </div>
    );
  }
}
