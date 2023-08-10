import Card from "react-bootstrap/Card";

export default function CustomCard({ headerTitle, children }) {
  return (
    <>
      <Card className="my-5">
        <Card.Header>{headerTitle}</Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </>
  );
}
