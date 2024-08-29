'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function JTBCPage() {
  return (
    <div className={styles.container}>
      <main className={`${styles.main} markdown`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>공익루팡AI</h2>
          <h3 className={styles.subtitle}>사전에 학습된 자료를 기반으로 답변을 생성하는 챗봇 제작 과정</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fc3248d61-a00d-4867-8d05-c48e214735a3%2Fwefij.jpg?table=block&id=96e98000-f8a5-4114-bae3-68cecce41963&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="공익루팡AI" className={styles.contentImage} />
        
        <h1>서비스 소개</h1>
        <p className={styles.bodyText}>병무청의 병역판정기준을 학습시킨 챗봇입니다. 병역신체검사를 앞둔 20살 남학생들이 자신의 증상을 입력하고, 공익 여부를 미리 판단해서 신체검사 전에 병무용 진단서를 얻는 등의 사전 조취를 취할 수 있도록 돕습니다.</p>
        
        <h2>제작 시 문제점과 해결</h2>
        
        <h3>1. AI모델 선정</h3>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F672e57cb-1d63-444c-99ba-8b1dc572cc4f%2FScreenshot_2024-08-17_at_2.08.54_AM.png?table=block&id=ae47d314-2bb1-4e5d-a32e-b7346e02a2cf&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-17 at 2.08.54 AM" className={styles.contentImage} />
        </figure>
        <p className={styles.bodyText}>처음에는 에듀퀴즈처럼 Gemini API를 사용하려 했으나, 답변의 일관성이 떨어져 LLM의 성능 부족을 느꼈습니다. 에듀퀴즈는 정해진 형식의 답변을 제공하기 때문에 이러한 문제가 잘 드러나지 않았지만, 자료를 찾아 문장으로 만들어야 하는 공익루팡AI에서는 적합하지 않다고 판단했습니다.</p>
        <p className={styles.bodyText}>대안으로 Claude와 Chat-GPT 4o를 테스트했습니다. 두 모델에서 각각 ‘Projects’와 ‘GPTs’ 기능을 활용해 챗봇을 제작하고, 미리 설정한 기준을 바탕으로 답변을 생성하는 데 만족스러운 결과를 보였습니다. 최종적으로 Chat-GPT 4o를 선택한 이유는 다음과 같습니다.</p>
        <ul className={styles.customList}>
          <li>Claude의 Projects는 사이트 내에서만 작동이 되고, API를 따로 빼서 하려면 하위 모델을 선택해야 함</li>
          <li>하위 모델에서도 json으로 답변 파인튜닝만 되고, 파일 업로드를 통한 배경지식 설정은 불가</li>
          <li>Chat-GPT API가 더 인터넷에 튜토리얼이 널리 퍼져 있음</li>
        </ul>
        <p className={styles.bodyText}>OpenAI Playground에서 더 가성비가 좋은 4mini 모델을 테스트해보았으나, 확실히 답변 능력이 떨어졌고, 파일 업로드 기능이 없어 4o로 결정했습니다. 키와 몸무게 측정 후 결과 이미지를 업로드하면 BMI 지수를 계산해 ‘멸치공익’인지 ‘돼지공익’인지 구분하는 기능이나 발목 사진을 통해 종골경사각을 계산하는 기능을 추가하려는 계획 때문입니다.</p>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F050c2aa3-1ee2-4980-8221-a6504686dbce%2Fwefipj.png?table=block&id=fb132bcc-d15b-4d9c-a267-8388cc6b1e23&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="4o mini 테스트 결과 디테일이 떨어지는 답변" className={styles.contentImage} />
          <figcaption>4o mini 테스트 결과 디테일이 떨어지는 답변</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F7f5d4220-84e5-410f-9d52-8d28759439f9%2F20200728_192907.jpg?table=block&id=48b7227e-6c83-45a0-a2a0-a4b5ef5d140b&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="업로드에 활용하려 했던 이미지(공익으로 나와야 하는 키 이미지 예시)" className={styles.contentImage} />
          <figcaption>업로드에 활용하려 했던 이미지(공익으로 나와야 하는 키 이미지 예시)</figcaption>
        </figure>
        
        <h3>2. Chat-GPT API 답변 튜닝</h3>
        <p className={styles.bodyText}>OpenAI Playground에서 시도했던 프롬프트를 그대로 API를 활용한 제 웹사이트에 입력했을때 답변이 Playground에서 했던 것 처럼 이상적으로 나오지 않았습니다. route.js 파일 안에서 직접 프롬프트를 더 상세히 작성하니 제대로 작동했습니다. 이 경험을 통해 프롬프트 작성은 route.js 파일 안에서 더 구체적으로 처리해야 한다는 것을 깨달았습니다.</p>
        
        <h3>3. Typewiter 애니메이션</h3>
        <p className={styles.bodyText}>글자가 한 글자씩 나타나는데, 맨 앞 글자가 짤려 나오는 문제가 있습니다. 계속해서 첫 글자가 나타나지 않아 의아해하다가, 첫글자가 지워지는 것을 계산해서 “제제가 분석한 결과입니다.“라는 문구로 결과물이 나오도록 프롬프트를 설정했지만, 여전히 문제가 해결되지 않았습니다. 앞에 한 칸 빈 공간 ’ ’을 항상 두도록 했지만, 그래도 해결되지 않았습니다. 애니메이션 적용을 빼서 확인해 보니, 이는 애니메이션 문제였습니다. next.js 기본 문법에서 js 문법으로 구현된 Typewiter 애니메이션 대신 CSS 스타일로 적용했더니 해결되었습니다.</p>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F19e42ec8-95e5-445e-8f5d-29a682977722%2FScreenshot_2024-08-18_at_3.47.41_PM.png?table=block&id=45bca62c-8471-447b-8e3c-ea3b9d6f2162&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="애니메이션을 빼고 작동 여부 확인 부분과 중간 수정 과정" className={styles.contentImage} />
          <figcaption>애니메이션을 빼고 작동 여부 확인 부분과 중간 수정 과정</figcaption>
        </figure>
        <p className={styles.bodyText}>하지만 최종적으로는 Typewiter 더 깔끔하게 한번에 답변이 나오는 애니메이션으로 바꿨습니다. 중간 과정 프롬프트 입니다.</p>
        
        <pre className={styles.codeBlock}><code>
{`기준과 비교분석 중입니다… 나오는 부분 있잖아 chat gpt api 에서 답변을 받는 로딩하는 부분. 거기를 저 텍스트를 넣지 말고 답변이 생성중인 것 처럼 문장 청사진 직사각형을 놔. 로딩 바가 아니라 문장 사이즈의 직사각형이야. 그리고 그 직사각형을 왼쪽에서 오른쪽으로 빛나면서 지나가면서 문장 생성중인 것 처럼 해.
그리고 텍스트 답변이 나오면 그거는 왼쪽 위 부터 오른쪽 아래로 부드럽게 문장이 부드럽게 나타나게 해.`}
        </code></pre>
        
        <h3>4. 마크다운 문법 그대로 출력</h3>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F3c5c55b6-0337-4a10-bb05-1e7ec682840d%2FScreenshot_2024-08-17_at_10.34.19_PM.png?table=block&id=2cf811cd-ed6d-4c79-875a-6dc641fe71da&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="마크다운 표기가 그대로 출력" className={styles.contentImage} />
        </figure>
        <p className={styles.bodyText}>마크다운 문법이 제대로 적용되지 않고 표식까지 그대로 출력되는 문제가 있었습니다. 이 문제는 Chat-GPT의 답변을 마크다운 형식으로 불러와서 출력하도록 수정하면서 해결되었습니다.</p>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F67c351cf-4479-4389-bc22-43454daa0b4a%2FScreenshot_2024-08-17_at_10.48.24_PM.png?table=block&id=06b2799c-51a7-4680-a133-4a0c596e6d61&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-17 at 10.48.24 PM" className={styles.contentImage} />
        </figure>
        
        <h1>디자인 포인트</h1>
        
        <h2>사용성 유도</h2>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fbdc30b0e-901b-49d1-8519-78a847a250a4%2FScreenshot_2024-08-29_at_6.11.26_AM.png?table=block&id=da1ff0b6-2862-48d7-b479-41c0eee00e77&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-29 at 6.11.26 AM" className={styles.contentImage} />
        </figure>
        <p className={styles.bodyText}>사용자의 행동을 유도하기 위해 “해봐요.“와 같은 권유형 말투를 적극 활용하고, 예시 입력값을 제시했습니다. 예시 input을 제시해 놓았습니다. 이 예시 input들은 웹사이트에 들어갔을때 아래서 위로 나타나며 배경과는 분리된 요소라는 점을 무의식적으로 심어둡니다.</p>
        
        <h2>사용자의 참을성 확보</h2>
        <p className={styles.bodyText}>답변이 생성되는 데 시간이 조금 걸리지만, 단순한 로딩바나 “분석 중…” 같은 메시지 대신, “관련 기준을 찾고 있습니다.“나 “기준과 비교 및 분석 중입니다.” 등의 문구를 사용해, 현재 진행상태 처럼 보이게 해서, 사용자의 참을성을 더 확보했습니다.</p>
        
        <h2>첫 페이지 몰입</h2>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F4087ec48-6d72-4459-845f-d1bfa868cfbe%2FDALLE_2024-08-15_03.02.57_-_A_modern-day_scene_showing_a_group_of_young_Korean_men_in_their_late_teens_looking_anxious_and_uncertain._They_are_dressed_in_casual_clothing_and_sta.jpeg?table=block&id=a537d02a-ffd0-4c58-8b43-44ae864247be&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="몰입 이미지 1" className={styles.contentImage} />
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F2e7bed1f-3d66-4540-ad3a-11a7da3e8537%2FDALLE_2024-08-15_03.44.30_-_A_modern-day_scene_showing_a_group_of_very_young_Korean_boys_appearing_to_be_in_their_mid-teens_standing_in_a_military_pre-enlistment_medical_examin.jpeg?table=block&id=4f71b251-d384-4a7c-8110-8d11abe6ddc9&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="몰입 이미지 2" className={styles.contentImage} />
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F96b713de-d48b-408d-97e0-fa5c0c583887%2FDALLE_2024-08-15_03.45.10_-_A_modern-day_scene_showing_a_group_of_very_young_Korean_boys_appearing_to_be_in_their_mid-teens_standing_in_a_military_pre-enlistment_medical_examin.jpeg?table=block&id=44c6221a-9002-4116-8b85-22ebe28c1271&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="몰입 이미지 3" className={styles.contentImage} />
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F8d5ce8e1-f5b2-4ec0-80c2-a174071c325c%2FDALLE_2024-08-15_03.45.36_-_A_realistic_modern-day_scene_showing_a_group_of_very_young_Korean_boys_appearing_to_be_in_their_mid-teens_scattered_around_a_military_pre-enlistment.jpeg?table=block&id=a57af64a-cd8e-4e6a-b363-052eaebdf7fe&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="몰입 이미지 4" className={styles.contentImage} />
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Ff9a894f7-d286-4c0a-bd32-244e68dcde6a%2FDALLE_2024-08-15_03.46.56_-_A_somber_modern-day_scene_showing_a_group_of_very_young_Korean_boys_appearing_to_be_in_their_mid-teens_getting_their_heads_shaved_in_preparation_fo.jpeg?table=block&id=19d0f935-cba0-4a6b-9974-d520a7c372f3&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="몰입 이미지 5" className={styles.contentImage} />
        </figure>
        
        <h2>기능의 일관성과 미니멀리즘</h2>
        <p className={styles.bodyText}>Chat-GPT 엔진이라서 병역 판정 기준과 관련 없는 질문에도 답변이 잘 생성됩니다. 기능을 명확히 하기 위해, 공익 기준과 병무청 지정 병원 관련 질문 이외에는 공익 신체 검사 기준에 특화된 AI라서 관련 질문을 해달라는 답변이 나오도록 설정했습니다.</p>
        
        <h1>포장 및 브랜딩</h1>
        <p className={styles.bodyText}>핫한 AI 용어를 활용해 ‘공익루팡AI’라는 이름을 붙였으며, 누구나 공감할 수 있는 생명 보호라는 가치를 강조했습니다. 20대 남학생의 생명 보호를 핵심 가치로 삼아, 공익루팡AI의 브랜드 정체성을 확립했습니다.</p>
        
        <h1>미래 개선 방향</h1>
        <p className={styles.bodyText}>사용자가 키, 몸무게 사진이나 발목 사진을 업로드하여 ‘멸치 공익’, ‘돼지 공익’, 또는 ‘평발 공익’ 여부를 판단할 수 있는 기능을 구현하기 위해 파일 업로드 기능을 추가하려 했습니다. 하지만 파일 업로드와 Chat-GPT API의 연결이 원활하지 않아, 이전에 Cupid Chat Cue 프로젝트에서 사용했던 Gemini API 코드를 참고해서 개발하라고 AI에게 시켰으나, 코드 생성이 섞여 나오고 잘 안되었습니다.</p>
        <p className={styles.bodyText}>이에 따라 Firebase 로 백엔드를 구축해서 하려고 했는데 일단 프론트엔드선으로만 해봤습니다. 백엔드 도전기는 앞으로 있을 예정입니다. Gemini랑 Firebase 둘 다 구글꺼라서 이 점에서 부드러운 연동이 있던 것 같습니다.</p>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F21575a1f-9210-4f68-9792-1d3eb144f8c6%2FScreenshot_2024-08-19_at_2.45.05_AM.png?table=block&id=53877b76-9b2b-4521-802a-971e1cfb8e10&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-08-19 at 2.45.05 AM" className={styles.contentImage} />
        </figure>
        
      </main>
    </div>
  );
}
