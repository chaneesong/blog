import React from 'react';

const Title = ({ titleProp }: { titleProp: PostTitleProp }) => {
  return (
    <>
      <div>{titleProp.title}</div>
      <div>{titleProp.category}</div>
      <div>
        {titleProp.tags.map((tag: string) => (
          <span>{tag}</span>
        ))}
      </div>
      <div>{titleProp.createdAt}</div>
    </>
  );
};

export default Title;
