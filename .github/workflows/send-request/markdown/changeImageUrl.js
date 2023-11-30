// 마크다운의 이미지 태그를 실제 구글 드라이브의 url로 변경하는 함수
export const changeImageUrl = (markdownText, imageIds) => {
  if (!imageIds) return markdownText;

  const regex = /!\[[^\]]*\]\(([^)]*)\)/g;
  const modifiedMarkdownContent = markdownText.replace(regex, (match, url) => {
    const imageName = url.split('/').at(-1);
    const imageId = imageIds[imageName];
    console.log(imageName, imageId);
    if (imageId) {
      return `![${imageName}](${process.env.PREV_IMAGE_URL}${imageId})`;
    }
    return match;
  });

  return modifiedMarkdownContent;
};
