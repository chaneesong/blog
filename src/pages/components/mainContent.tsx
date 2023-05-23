import Card from 'react-bootstrap/Card';

interface PostProps {
  post: PostCard;
}

export default function MainContent({ post }: PostProps) {
  return (
    <Card style={{ width: '20rem', marginBottom: '10px', border: 'none' }}>
      <Card.Img style={{ borderRadius: '5px' }} src={post.image} />
      <Card.Body>{post.title}</Card.Body>
    </Card>
  );
}
