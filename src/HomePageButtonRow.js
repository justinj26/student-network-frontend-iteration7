import Button from "@material-ui/core";
// import { Link as RouterLink } from 'react-router-dom';

export default function HomePageButtonRow(props) {
  return (
    <div>
      <Button variant="outlined">Home</Button>
      <Button variant="outlined">Profile</Button>
      <Button variant="outlined"></Button>
      {/* to add more */}


    </div>
  );
}