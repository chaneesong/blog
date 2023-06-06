import React from 'react';

interface TagProps {
  tags: Tag[];
}

export default function TagSection({ tags }: TagProps) {
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag} style={{ marginRight: '5px' }}>
          {tag}
        </span>
      ))}
    </div>
  );
}
