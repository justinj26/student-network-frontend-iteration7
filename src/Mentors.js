import Badge from "./Badge";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";

const axios = require("axios");
// class HomePageBadgeGrid extends React.Component {
//   constructor() {
//     super(props);

//     this.state = 
//   }
// }

const url = "https://student-network-backend-stage.herokuapp.com/getallmentors"

export default function Mentors(props) {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function fetchData() {

      try {
        const response = await axios.get(url, {
          headers: {
            'user_id': props.user_id,
            'token': props.token
          }
        });
        const json = await response.json();
        setUsers(json.mentors);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
    })

  var badges = users.map((user) => 
  <Grid item xs={6}>
    <Badge user={user} />
    </Grid>
  );



  return (


    <div>
      <Grid 
        container 
        justify="space-evenly"
        alignItems="center">
          {badges}
      </Grid>
    </div>
  );
}