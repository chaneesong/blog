import Link from 'next/link';
import Card from 'react-bootstrap/Card';

interface PostProps {
  post: PostCard;
}

export default function RecentPostCard({ post }: PostProps) {
  return (
    <Link
      href={'/post/' + post.id}
      style={{ width: '20rem', marginBottom: '10px' }}
    >
      <Card style={{ border: 'none' }}>
        <Card.Img style={{ borderRadius: '5px' }} src={post.image} />
        <Card.Body>{post.title}</Card.Body>
      </Card>
    </Link>
  );
}
