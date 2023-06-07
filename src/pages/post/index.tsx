import React from 'react';

import AppLayout from '@/components/AppLayout';
import { postData } from '../../../public/dummyData';
import PostCard from '@/components/PostCard';

export default function Post() {
  return (
    <AppLayout>
      <h2>Post</h2>

      {postData.map((post) => (
        <PostCard post={post} />
      ))}
    </AppLayout>
  );
}
