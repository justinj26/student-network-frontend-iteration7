import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button";
import styles from "./MatchesAndRequests.module.css";

// import link capability/capacity for 
import { Link as RouterLink } from "react-router-dom";

const React = require("react");

class MatchesAndRequests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        matches: [],
        incoming_match_requests: [],
        favorite_matches: [],
        outgoing_match_requests: [],
        saved_profiles: []
      }
    };
  }




  render() {
    return (
      <div>
        <div className={styles.matches_and_requests_box}>
          <div>
            <Button component={RouterLink} to="home/all_matches"><ChevronRightIcon /></Button>  
            Favorite Matches
          </div>
          <div>
            <Button component={RouterLink} to="home/incoming_match_requests"><ChevronRightIcon /></Button>  
            Incoming Matches Requests
          </div>
          <div>
            <Button component={RouterLink} to="home/favorite_matches"><ChevronRightIcon /></Button>  
            Favorite Matches
          </div>
          <div>
            <Button component={RouterLink} to="home/outgoing_match_requests"><ChevronRightIcon /></Button>  
            Outgoing Match Requests
          </div>
          <div>
            <Button component={RouterLink} to="home/saved_profiles"><ChevronRightIcon /></Button>  
            Saved Profiles
          </div>
          

        </div>
      </div>
    );
  }
}

export default MatchesAndRequests;