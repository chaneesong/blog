import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface HeadingInfo {
  text: string | null;
  id: string;
}

const TOC = () => {
  const [headingList, setHeadingList] = useState([] as HeadingInfo[]);

  useEffect(() => {
    setHeadingList(
      Array.from(document.querySelectorAll('h1, h2, h3')).map(
        (element, index): HeadingInfo => {
          element.id = `heading-${index}`;
          return { text: element.textContent, id: element.id };
        }
      )
    );
  }, []);

  return (
    <div>
      {headingList.map((heading) => (
        <Link href={`#${heading.id}`} key={heading.id}>
          <div>{heading.text}</div>
        </Link>
      ))}
    </div>
  );
};

export default TOC;
