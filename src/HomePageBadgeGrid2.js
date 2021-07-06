import Badge from "./Badge";
import Grid from "@material-ui/core/Grid";
import styles from "./Home.module.css";
// class HomePageBadgeGrid extends React.Component {
//   constructor() {
//     super(props);

//     this.state =
//   }
// }

export default function HomePageBadgeGrid2(props) {
  var badges = props.users.map((user) => (
    <div>
      <Badge user={user} />
    </div>
  ));

  return (
    <div>
      <div className={styles.main_grid} >{badges}</div>
    </div>
  );
}
