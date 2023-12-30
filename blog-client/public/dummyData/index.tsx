export const categoriesData = ['javascript', 'typescript', 'test category'];

export const tagsData = ['tagTest1', 'tagTest2'];

const date = new Date();

const createdAt = `${date.getFullYear()} / ${
  date.getMonth() + 1
} / ${date.getDate()}`;

export const dummyPostData: Post[] = [
  {
    id: 1,
    title:
      '타이틀의 길이가 2줄 이상이면 어떻게 표시될까? 정상적으로 표시된다. 그렇다면 3줄일 경우 어떻게 표시되는지 궁금하지 않나?',
    content: `## Intro

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
    category: { id: 'test', keyword: 'javascript' },
    tags: [
      { id: 'test1', keyword: 'tag1' },
      { id: 'test2', keyword: 'tag2' },
      { id: 'test3', keyword: 'tag3' },
    ],
    createdAt,
    // image: '/images/preview.png',
  },
  {
    id: 2,
    title: 'three sum',
    content: `### [15. 3Sum](https://leetcode.com/problems/3sum/description/)

## 문제 설명

정수 배열이 주어질 때, 3개의 엘리먼트가 \`i != j~, ~i != k~, ~j != k\`이고,
\`nums[i] + nums[j] + nums[k] === 0\`인 경우를 모두 찾으시오.

> 인용구 테스트
> 두 줄 테스트

### 긴 heading은 toc에 어떻게 표시되는지 궁금하다.

결과에 중복이 존재해서는 안된다.

## 해결 방법

투 포인터 탐색을 진행하기 위해 주어진 배열을 오름차순으로 정렬한다.

배열을 순회할 때, 인덱스 i를 기준으로 ~left = i + 1~, ~right = nums.length - 1~로 기준을 두고, 투 포인터 탐색을 진행한다.

1. 현재 세 숫자를 더한다.
2. 합이 0보다 작으면 left를 오른쪽으로 한 칸 옮긴다.
3. 합이 0보다 크면 right를 왼쪽으로 한 칸 옮긴다.
4. 0일 경우 결과에 저장하고, left와 right에 중복만큼 포인터를 넘긴다.

## 풀이 코드

~~~typescript
export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return result;
}
~~~

## 테스트 코드

~~~typescript
import { describe, expect, test } from '@jest/globals';
import { threeSum } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = threeSum([-1, 0, 1, 2, -1, -4]);
    const expected = [
      expect.arrayContaining([-1, -1, 2]),
      expect.arrayContaining([-1, 0, 1]),
    ];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = threeSum([0, 1, 1]);
    const expected = [];

    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const output = threeSum([0, 0, 0]);
    const expected = [[0, 0, 0]];
    expect(output).toEqual(expected);
  });
});
~~~
`,
    category: {
      id: 'test',
      keyword: 'test',
    },
    tags: [
      { id: 'test1', keyword: 'tag1' },
      { id: 'test2', keyword: 'tag2' },
      { id: 'test3', keyword: 'tag3' },
    ],
    createdAt,
    // image: '/images/preview.png',
  },
];
