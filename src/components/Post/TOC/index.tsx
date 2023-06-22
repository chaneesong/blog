import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface HeadingInfo {
  text: string | null;
  id: string;
}

const TOCContainer = styled.div`
  position: sticky;
  top: 10%;
`;

const DEFAULT_HEIGHT = 50;

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

  const onClickTOC = useCallback(
    (id: string) => () => {
      const targetTag = document.getElementById(id);
      const bodyRect = document.body.getBoundingClientRect();
      const targetTagRect = targetTag?.getBoundingClientRect();

      if (!bodyRect || !targetTagRect) {
        return;
      }

      const scrollPosition = targetTagRect.top - bodyRect.top - DEFAULT_HEIGHT;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    },
    []
  );

  return (
    <TOCContainer>
      {headingList.map((heading) => (
        <div key={heading.id} onClick={onClickTOC(heading.id)}>
          {heading.text}
        </div>
      ))}
    </TOCContainer>
  );
};

export default TOC;
