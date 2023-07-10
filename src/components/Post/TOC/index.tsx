import React, { useCallback, useEffect, useState } from 'react';
import TOCContainer from './TOCComponents/TOCContainer';
import TOCElement from './TOCComponents/TOCElement';
import { useAppSelector } from '@/redux/hooks/reduxHooks';

interface HeadingInfo {
  text: string | null;
  id: string;
}

const DEFAULT_HEIGHT = 50;

const TOC = () => {
  const isFullfilled = useAppSelector((state) => !state.poster.loading);
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
  }, [isFullfilled]);

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
        <TOCElement key={heading.id} onClick={onClickTOC(heading.id)}>
          {heading.text}
        </TOCElement>
      ))}
    </TOCContainer>
  );
};

export default TOC;
