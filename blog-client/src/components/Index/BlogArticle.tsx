import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin-bottom: 4em;
  line-height: 35px;
`;

const TitleContainer = styled.div`
  &::after {
    content: '';
    display: block;
    width: 100px;
    border-bottom: 1px solid #373e47;
    margin: 20px 0px;
  }
`;

const BlogIntro = () => {
  return (
    <>
      <Content>
        JS, TS 생태계와 개발 환경을 설정하는 것에 관심이 있습니다.
        <br />
        개발 도중 만난 개발 일지, 에러 처리, 유용한 팁 등을 공유합니다.
        <br />
      </Content>
      <Content>
        <TitleContainer>
          <h3>개발 일지</h3>
        </TitleContainer>
        다양한 토이 프로젝트를 만드는 과정을 공유합니다.
        <br />
        물론 블로그 제작 과정 또한 공유합니다.
      </Content>
      <Content>
        <TitleContainer>
          <h3>에러 처리</h3>
        </TitleContainer>
        인상 깊었던 에러를 처리한 경험을 공유합니다.
      </Content>
      <Content>
        <TitleContainer>
          <h3>Github</h3>
        </TitleContainer>
        게시 된 모든 내용의 소스 코드는 Github에서 다시 볼 수 있습니다.
      </Content>
      <Content>
        <TitleContainer>
          <h3>Notion</h3>
        </TitleContainer>
        강의 및 책 등을 통해 배운 내용을 다듬어 정리하는 공간은 따로 있습니다.
        <br />
        노션을 통해 정리하고 있으며, 이것 역시 모두 공개합니다.
      </Content>
      <Content style={{ marginBottom: '10px', textAlign: 'right' }}>
        <strong>
          블로그의 모든 내용은 자유롭게 수정 및 공유하셔도 상관 없습니다.
        </strong>
      </Content>
    </>
  );
};

export default BlogIntro;
