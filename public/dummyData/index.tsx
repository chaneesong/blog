export const categoriesData = ['javascript', 'typescript', 'test category'];

export const tagsData = ['tagTest1', 'tagTest2'];

const date = new Date();

const createdAt = `${date.getFullYear()} / ${
  date.getMonth() + 1
} / ${date.getDate()}`;

export const postData = [
  {
    id: 1,
    title: 'Title1',
    content: `모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를
        가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의
        자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든
        국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시
        변호인의 조력을 받을 권리를 가진다.`,
    category: 'category1',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt,
  },
  {
    id: 2,
    title: 'Title2',
    content: `모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를
    가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의
    자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든
    국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시
    변호인의 조력을 받을 권리를 가진다.`,
    category: 'category1',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt,
  },
  {
    id: 3,
    title: 'Title3',
    content: `모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를
    가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의
    자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든
    국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시
    변호인의 조력을 받을 권리를 가진다.`,
    category: 'category1',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt,
  },
  {
    id: 4,
    title: 'Title Test',
    content: `
    ## Intro
    
    리트코드의 Group Anagrams라는 문제를 풀다가 테스트코드를 작성하는데 지문에 이런 문구가 있다.  
    
    > You can return the answer in any order.  
    > 어떠한 순서로도 반환할 수 있다.
    
    이럴 때 jest로 테스트코드를 작성한다고 하면 어떻게 작성해야되는지 의문이 들었다.  
    그런데 애초에 키워드 자체를 모르는데 어떻게 검색을 할 수 있나... ㅋㅋ  
    그래서 jest 공식문서 몇 번 깔짝거리다가 검색 몇 번 해보고 Gpt한테 물어봤다.  
    
    어허 너무 쉽잖아 jest로 '**해줘**(애초에 정확하지 않기도 함).'  
    
    ~~~typescript
    describe("groupAnagrams", () => {
      test("example test case", () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const output = groupAnagrams(input);
        const expectedOutput = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
        expect(output).toEqual(expect.arrayContaining(expectedOutput));
      });
    
      test("returns empty array when input is empty array", () => {
        const input: string[] = [];
        const output = groupAnagrams(input);
        const expectedOutput: string[][] = [];
        expect(output).toEqual(expectedOutput);
      });
      ...
    });
    ~~~
    
    이렇게 답변 해줬다. 이 때 arrayContaining이라는 키워드를 확인했고, 이미 이 때 끝난거나 다름없다.  
    그런데 해당 테스트코드는 완전히 정답은 아니고 일부는 커버하지 못한다.  
    
    만약 아래와 같은 정답이 있을 때 Gpt가 알려준 테스트코드는 정답을 통과하지 못한다.  
    
    [["eat", "tea", "ate"], ["nat", "tan"], ["bat"]]  
    
    해당 반환 값이 리트코드에서는 정답이다.
    
    그럼 과연 chatGpt는 몇 번만에 테스트코드를 정확하게 작성 할 수 있는지 궁금해졌고, 몇 번 물어봤다.
    
    갑자기 자기 멋대로 문제를 해석하기 시작해서 힌트를 주었다.  
    
    그냥 이건 expectedOutput의 순서만 바뀐거잖아ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ  
    영어로 물어봤으면 정확하게 대답했을까? 그냥 아예 정답에 가까운 질문을 해봤다.  
    
    오... 결국 3번만에 정확한 테스트코드를 작성했다.  
    구글 검색으로 찾았으면 키워드 찾는데만 수 십분을 썼을 수도 있다.  
    그런데 키워드 찾는데 질문 한 번, 정확한 코드를 작성하는데 질문 4번이 소요되었다.  
    솔직히 구글 검색보다 쉬운거 인정한다.  
    그런데 몇 번 틀리는 것을 보니 chatGpt의 표본이 결국 구글에서 검색되는 많은 자료들이 아닐까 싶다.
    
    이걸 보면서 인터넷에 얼마나 많은 오류들이 떠돌아 다니는지 새삼 다시 깨닫게 되었다.  
    그래도 나는 이러한 오류를 작성하는 사람들을 비판할 생각도 없을 뿐더러,  
    **틀릴 수 있다는 공포**를 이겨내고 블로그를 작성해서 남들에게 자신의 자료를 공개하는 분들에게 존경심을 표한다.
    
    또한, 그러한 방대한 자료, 오류들이 없었으면 chatGpt도 없었겠지.
    
    칭찬 또한 잊지 말고 해주자!`,
    category: 'javascript',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt,
  },
];
