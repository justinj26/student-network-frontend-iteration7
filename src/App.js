import "./styles.css";
import Login from "./Login";
// import Badge from "./Badge";
import Welcome from "./Welcome";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Home from "./Home";
import MatchesAndRequests from "./MatchesAndRequests";
import { Switch, Route } from "react-router-dom";
import Filter from "./Filter";
import SignUp1 from "./SignUp1";

// const user = localStorage.getItem("user_id");

// const data = {
//   college: "University of Michigan",
//   major: "Computer Science",
//   extracuriculars: ["Aerospace Engineering", "Dungeons and Dragons"]
// };

export default function App() {
  // const data = {
  //   first_name: "Ike",
  //   last_name: "Boxton",
  //   college: "University of Michigan",
  //   major: "Computer Science",
  //   extras: ["Aerospace Engineering", "Dungeons and Dragons"]
  // };

  // some setup, to where if a user is present, go to home page
  // if not, go to Welcome page

  // const display = (user) ? <Home user={user} > : <Login>

  return (
    <div className="App">
      <Home />
      {/* <Filter /> */}
      <MatchesAndRequests />
      {/* <SignUp1 /> */}
      {/* <Welcome /> */}
      {/* <SignUp /> */}
      {/* {display} */}
      {/* if (localStorage.getItem("user_id")) */}
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/home">
          {/* user here */}
          <Home />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route>{/* <HomePageBadgeGrid users={mentors} /> */}</Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route></Route>
      </Switch>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* <SignUp />

      <Welcome />
      <Login />
      <Badge user={data} /> */}
    </div>
  );
}
