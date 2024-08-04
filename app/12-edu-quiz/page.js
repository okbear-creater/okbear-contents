'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function ETBPage() {
  return (
    <div className={styles.container}>
      <main className={`${styles.main} markdown`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>Gemini API를 이용한 영어 문제 출제 툴 제작 과정</h2>
          <h3 className={styles.subtitle}>Gemini 1.5 Flash를 학습시키는 과정과 영어 문제 출제에 활용할 수 있는 서비스 제작 과정</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F5db28816-afa1-432e-9c08-0fdc9287de31%2Fewjofwepgjowpjoge.jpg?table=block&id=d48699bd-82aa-4fa5-bfed-32bf19bb788b&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="ewjofwepgjowpjoge.jpg" className={styles.contentImage} />
        
        <p className={styles.bodyText}><a href="https://edu-quiz-xi.vercel.app/" className={styles.hyperlink}>Edu Quiz</a></p>
        <p className={styles.bodyText}><a href="https://github.com/okbear-creater/edu-quiz" className={styles.hyperlink}>GitHub Repo</a></p>


        <h1>목적</h1>
        <p className={styles.bodyText}>부모님께서 고등학교 내신 영어 시험 문제를 출제하십니다. 내신 영어 시험 문제 출제는 모의고사, 부교재, 교과서에서 주어진 영어 지문을 목적, 심경 변화, 주장, 의미, 요지, 주제, 제목, 내용 일치, 어법, 어휘, 짧은 빈칸, 긴 빈칸, 무관한 문장, 순서 배열, 문장 삽입, 요약문 완성의 16개 유형으로 중 하나로 변형하는 작업입니다. 이 정도 문제 유형 변형 작업은 현재의 LLM으로 해결할 수 있다는 생각이 들었습니다. 모든 역대 모의고사와 수능 영어 문제가 ebs-i 웹사이트에 업로드되어 있어 학습시키기도 좋다고 판단했습니다. 그래서 Gemini에게 영어 문제 유형 16개를 학습시키고, 새로운 영어 지문과 문제 유형을 제시하면 해당 유형에 맞게 문제를 출제하는 서비스를 만들었습니다. 이를 통해 영어 교사의 영어 내신 문제 출제 작업의 효율을 높일 수 있습니다.</p>

        <h2>사용법</h2>

        <h3>0단계</h3>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F83d6ec5b-c506-4232-b9ec-8354da4920ef%2Foweihf.pdf-2.jpg?table=block&id=56fecdb3-b747-4968-b9ee-208758899e42&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="oweihf.pdf-2.jpg" className={styles.contentImage} />
        <p className={styles.bodyText}>랜딩 페이지입니다. 맨 위에 Gemini를 상징하는 색의 안내를 따라가면 됩니다.</p>

        <h3>1단계</h3>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb59cc43d-b6c1-4eac-96e0-6af0cf3caa89%2Foweihf.pdf-3.jpg?table=block&id=8758a600-f437-4d44-a997-199a6c2a8cec&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="oweihf.pdf-3.jpg" className={styles.contentImage} />
        <p className={styles.bodyText}>시험 문제를 출제하고자 하는 영어 지문을 붙여넣습니다.</p>

        <h3>2단계</h3>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F20a35b81-65d3-41aa-9902-6c3d1550a39b%2Foweihf.pdf-4.jpg?table=block&id=ea18a592-8627-481b-9dc4-cee2a6ed4407&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="oweihf.pdf-4.jpg" className={styles.contentImage} />
        <p className={styles.bodyText}>출제하고자 할 문제 유형과 난이도를 선택한 후, 출제 버튼을 누릅니다.</p>

        <h3>3단계</h3>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F99e53165-3ff5-4b4a-8a88-243669fd6af1%2Foweihf.pdf-5.jpg?table=block&id=eef70555-484a-41e0-b4d4-e51b19ffea82&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="oweihf.pdf-5.jpg" className={styles.contentImage} />
        <p className={styles.bodyText}>Gemini가 문제를 출제할 때까지 약 2~3초간 기다립니다.</p>

        <h3>4단계</h3>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F184b8eb4-ac13-44f9-b758-2460ce83863e%2Foweihf.pdf-6.jpg?table=block&id=d9e1a617-bdc6-44b7-b0f7-b3445d70c08c&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="oweihf.pdf-6.jpg" className={styles.contentImage} />
        <p className={styles.bodyText}>출제된 영어 문제를 복사하여 사용자의 용도에 맞게 활용할 수 있습니다.</p>

        <h1>개발 과정</h1>

        <h2>1. Gemini 학습시키기</h2>
        <p className={styles.bodyText}>ebs-i 웹사이트에서 모의고사 문제를 다운로드하여 문제 유형을 학습시켰습니다. 사용자가 단계를 선택할 수 있게 하는 기능도 추가했습니다. <a href="https://www.notion.so/a953977c5877490285333de0f5cb2c90?pvs=21" className={styles.hyperlink}>전체 프롬프트는 이겁니다.</a> 그리고 페이지 오른쪽 위에 'Get code'를 통해 튜닝된 Gemini의 js 코드를 얻을 수 있습니다.</p>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F62a88dbf-70ab-4a45-8710-1860d4880986%2FScreenshot_2024-08-05_at_5.27.04_AM.png?table=block&id=906b2785-3833-409e-9852-3cc381de6cac&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-05 at 5.27.04 AM.png" className={styles.contentImage} />

        <h2>2. 웹사이트 디자인</h2>
        <p className={styles.bodyText}>여러 UI를 그리며 고민해 본 결과, 심플한 블랙 앤 화이트 디자인은 너무 패션 브랜드 같아서 Gemini 홈페이지의 UI를 참고하여 디자인했습니다. 디자인 포인트는 맨 위에 그라디언트가 들어간 텍스트로 사용자 친화적인 멘트를 하는 것입니다.</p>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F9536328c-cacc-4596-b30d-4d04bc5cf836%2FScreenshot_2024-08-05_at_5.30.53_AM.png?table=block&id=b6752c7c-54c7-4d38-9ebe-f95940c9746a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-05 at 5.30.53 AM.png" className={styles.contentImage} />
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F75455d73-02dc-47ea-9848-2c818eb81f59%2FScreenshot_2024-08-05_at_5.31.03_AM.png?table=block&id=17496191-d1e0-4f3d-bd4e-9013815caadd&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-05 at 5.31.03 AM.png" className={styles.contentImage} />
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F4494c20e-d279-4f00-8973-d6deb56ea270%2FScreenshot_2024-08-05_at_5.31.24_AM.png?table=block&id=55fd730e-42e4-4613-838b-aa7d383de8ed&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-05 at 5.31.24 AM.png" className={styles.contentImage} />

        <h2>3. next.js 로 기능 구현 + 3.5 사용자 친화적 UX 개선</h2>
        <p className={styles.bodyText}>1단계에서 얻은 튜닝된 Gemini의 js 코드를 적용하여 구현했습니다. 구현할 때는 사용자 친화적으로, 마치 살아있는 것처럼 사용자와 소통하는 디자인을 적용했습니다. 지문을 붙여넣지 않았는데 문제 유형과 난이도를 선택하려 하거나, 문제 유형과 난이도를 선택하지 않았는데 출제를 시도하면, 맨 위의 그라디언트 텍스트가 흔들리고 빨간 불이 깜빡이며 사용자의 행동을 유도합니다.</p>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fdf739424-2c79-4cb7-a546-027226c4d49b%2FScreenshot_2024-08-05_at_5.37.46_AM.png?table=block&id=19988538-36f8-44a4-b06d-bc5c29c302fa&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="행동 유도 중인 빨간 점" className={styles.contentImage} />
          <figcaption>행동 유도 중인 빨간 점</figcaption>
        </figure>

        <h1>포장 및 마케팅</h1>
        <p className={styles.bodyText}>서비스가 만들어진 과정과 목적을 좀 더 포장 및 보완해 만든 <a href="https://www.figma.com/slides/yiybDXkyBZUHgDfNC4W7P5/에듀-퀴즈-소개-자료?node-id=1-550&t=KrPw8urMgnAzu3au-1" className={styles.hyperlink}>소개자료</a> 입니다. 소개할 때는 먼저 우리의 신념이 무엇인지(WE BELIEVE~), 그 신념을 지키기 위해 생각해낸 방법이 무엇인지(HOW), 그리고 그 방법을 실행하기 위해 만든 것이 이 제품(WHAT)이라는 애플의 제품 발표 및 소개 방식을 따랐습니다.</p>

        <h1>문제점과 미래 개선 방향 아이디어</h1>

        <h2>문제점</h2>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Ff9e0b93d-5323-4ae9-9966-5b796d23f8e5%2FScreenshot_2024-08-05_at_6.25.50_AM.png?table=block&id=1c93492c-a70d-41cf-983a-fdc122538dea&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="한 단어를 변형해야 할 부분을 두 단어를 변형, 게속해서 학습 시켜도 결과는 똑같게 나옴" className={styles.contentImage} />
        <figcaption>한 단어를 변형해야 할 부분을 두 단어를 변형, 게속해서 학습 시켜도 결과는 똑같게 나옴</figcaption>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fbd2188f3-a888-4c57-becb-30217e6b7759%2FScreenshot_2024-08-05_at_6.29.57_AM.png?table=block&id=0df394c5-3a05-4193-9ace-93bb3f0bb605&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="밑줄 부분 표시를 나타내기 위한 표시가 Gemini 학습시키는 텍스트 입력 부분에 다 삭제되서 들어감" className={styles.contentImage} />
        <figcaption>밑줄 부분 표시를 나타내기 위한 표시가 Gemini 학습시키는 텍스트 입력 부분에 다 삭제되서 들어감</figcaption>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fd774663e-65cb-4891-b195-da5136f83514%2FScreenshot_2024-08-05_at_6.24.44_AM.png?table=block&id=66c32d14-7e5e-47dd-84fb-9a29ba42e156&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="마크다운 문법을 적용하여 결과를 얻고, 이를 next.js에서 해당 스타일로 페이지에 표시하려 했지만, 결과값에 마크다운 문법 표시가 포함되지 않음" className={styles.contentImage} />
        <figcaption>마크다운 문법을 적용하여 결과를 얻고, 이를 next.js에서 해당 스타일로 페이지에 표시하려 했지만, 결과값에 마크다운 문법 표시가 포함되지 않음</figcaption>

        <h2>미래 개선 방향 아이디어</h2>
        <p className={styles.bodyText}>Gemini를 학습시켰지만, 일부 유형에서는 다른 유형과 동일한 방식으로 학습시켰음에도 불구하고 결과에 지문이 포함되지 않는 부분이 있었습니다. 또한, 문제 유형 학습이 잘 되지 않아 한 단어를 변형해야 할 부분을 두 단어를 변형하는 문제도 발생했습니다. 문제 유형을 더 많이 학습시키면 해결될 것 같았지만, 다른 유형들은 동일한 방식으로 했는데도 잘 되는 유형들이 많아서 이는 Gemini 1.5 Flash 버전의 한계로 판단했습니다. 또한, 마크다운 문법이 Gemini 학습 시 적용되지 않아 밑줄이 출력되지 않는 경우도 있었습니다. 추후에 더 발전한 버전이 나온다면, 그 버전으로 학습시켜 변형 문제 결과가 일관성 있게 나오도록 개선 가능할 것으로 생각합니다.</p>
      </main>
    </div>
  );
}
