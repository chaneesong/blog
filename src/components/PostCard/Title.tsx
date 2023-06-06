import React from 'react';

interface TitleProps {
  title: string;
  createdAt: string;
}

export default function Title({ title, createdAt }: TitleProps) {
  const date = new Date();
  return (
    <h2>
      {title}
      <span style={{ marginLeft: '10px', fontSize: '15px' }}>{createdAt}</span>
    </h2>
  );
}
