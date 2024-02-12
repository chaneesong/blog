import React from 'react';
import styled from 'styled-components';
import { articleElements } from './articleElement';

const Content = styled.div`
  margin-bottom: 4em;
  line-height: 35px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Title = styled.div`
  font-size: 2em;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const IntroContent = () => {
  return (
    <>
      <FlexContainer>
        <div>
          <Content>
            JS, TS 생태계와 개발 환경을 설정하는 것에 관심이 있습니다.
            <br />
            개발 도중 만난 개발 일지, 에러 처리, 유용한 팁 등을 공유합니다.
            <br />
          </Content>
          {articleElements.map((ele) => (
            <Content key={ele.title}>
              <TitleContainer>
                <Image title={ele.title} src={ele.src} />
                <Title>{ele.title}</Title>
              </TitleContainer>
              <div dangerouslySetInnerHTML={{ __html: ele.content }}></div>
            </Content>
          ))}
        </div>
        <Content style={{ marginBottom: '50px', textAlign: 'right' }}>
          <strong>
            블로그의 모든 내용은 자유롭게 수정 및 공유하셔도 상관 없습니다.
          </strong>
        </Content>
      </FlexContainer>
    </>
  );
};

export default IntroContent;
