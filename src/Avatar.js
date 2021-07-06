import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export default function Avatar(props) {
  return (
    <Col xs={6} md={4}>
      <Image src={props.user.src} roundedCircle />
    </Col>
  );
}
