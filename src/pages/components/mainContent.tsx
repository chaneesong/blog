import Card from 'react-bootstrap/Card';

export default function MainContent() {
  return (
    <Card style={{ width: '18rem', marginBottom: '10px', border: 'none'}}>
      <Card.Img style={{borderRadius: '5px'}} variant="top" src="/images/Forest1.png" />
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}
