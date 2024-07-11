'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function ElevatorPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={styles.container}>
      <div className={`${styles.topBanner} ${!isVisible ? styles.topBannerHidden : ''}`}>
        <a href="https://ev-nav-desktop.vercel.app/" className={styles.bannerContent} style={{ textDecoration: 'none' }}>
          <span className={styles.greyGrade}>A+ A0 B+ B0 C+ C0 D+ </span>
          <span className={styles.whiteGrade}>D0 F</span>
        </a>
      </div>
      <main className={styles.main}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>북악관 엘리베이터 최적 경로 네비게이션 +</h2>
          <h3 className={styles.subtitle}>next.js 로 UI 커스텀하기</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fbf31aff9-ff8e-4e3a-b10a-8ca19e936005%2Fopjwef.jpg?table=block&id=88f929ef-5a5a-4a2a-b3d9-0b776190cd29&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Elevator Navigation" className={styles.contentImage} />

        <p className={styles.bodyText}>
          <a href="https://ev-nav-desktop.vercel.app/" className={styles.hyperlink}>북악관 에리베이터 최적 경로 네비게이션 + 바로가기</a>
        </p>

        <h2>발전 사항</h2>
        <p className={styles.bodyText}>
          이전에는 Streamlit 에 있는 UI Elements 들 중에 골라서 사용했지만, 이번에는 Next.js 를 이용해 커스텀 UI 로 만들었습니다.
        </p>

        <h2>디자인 포인트</h2>
        <ul className={styles.customList}>
          <li>토스처럼 3D 아이콘 활용 컨셉으로 디자인 했습니다. 전체적인 UI 는 미니멀하게 갔습니다.</li>
          <li>위아래 스크롤할 영역이 있다는 것을 직관적으로 알 수 있도록 그라디언트 사각형을 추가했습니다.</li>
          <li>애니메이션은 자연스러운 Fade in Fade out 으로 편안함을 주려고 했습니다.</li>
          <li>사용자의 행동을 유도하는, 사용자와 같이가는 UX Writing 을 적용했습니다.</li>
        </ul>

        <h2>개발 과정</h2>

        <h3>1. 디자인</h3>
        <p className={styles.bodyText}>
          먼저 모바일 앱으로 디자인 했습니다. 계단과 엘리베이터 소스를 인터넷에서 가져왔고, 평면은 만들었습니다. 모델링 소프트웨어 Shaper3D에서 동일한 위치의 빛을 받는 것 처럼 그림자가 생기도록 각도를 조정한 후, 3개 모두 동일한 각도에서 캡처하여 아이콘을 제작했습니다.
        </p>

        <h4>3D 아이콘 이미지 제작 과정</h4>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fa6ae99ea-d1aa-4209-a340-2b31eb3ab29c%2FScreenshot_2024-07-08_at_1.31.20_AM.png?table=block&id=1984356f-be10-4ea1-bbcb-da42a401a9be&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="3D Icon Process 1" className={styles.contentImage} />
          <figcaption>3D 아이콘 제작 과정 1</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fcb77be27-fb9b-4f17-b7e0-1b382113e5dd%2FScreenshot_2024-07-08_at_1.33.28_AM.png?table=block&id=5afe067e-05ce-4262-962d-071481e3859e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="3D Icon Process 2" className={styles.contentImage} />
          <figcaption>3D 아이콘 제작 과정 2</figcaption>
        </figure>

        <h4>초기 디자인 과정</h4>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F894cbc1d-bad6-4adf-aa84-9972d5d748a4%2FFrame_10.png?table=block&id=1a2c8815-3d33-4a05-aaea-5c10ed573ab9&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Initial Design Process" className={styles.contentImage} />
          <figcaption>초기 디자인 과정</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Feaaf4a1c-46ca-4a28-9056-8a5b3b9aedfb%2FScreenshot_2024-07-08_at_1.29.03_AM.png?table=block&id=affdfbdd-fef0-42c6-a2f6-8366243f45e7&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Initial Design 1" className={styles.contentImage} />
          <figcaption>초기 디자인 1</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F41213155-5ea6-4519-ae17-04b153e979d3%2FScreenshot_2024-07-08_at_1.29.16_AM.png?table=block&id=11cc380c-0266-4b84-8244-a146766e4422&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Initial Design 2" className={styles.contentImage} />
          <figcaption>초기 디자인 2</figcaption>
        </figure>

        <h3>2. Next.js 를 통한 개발</h3>

        <h4>AI 활용</h4>
        <p className={styles.bodyText}>
          Chat-GPT 와 Claude 에게 이전에 Streamlit 으로 개발 했던 코드를 제공하고, 그 기능을 Next.js 로 구현하려고 한다고 코드를 요청했습니다. Figma 로 디자인한 UI 도 첨부합니다. 하지만 스타일이 엉망이므로 말로 하나하나 묘사해서 짭니다.
        </p>

        <h4>프롬프트에서 자주 쓴 용어</h4>
        <ul className={styles.customList}>
          <li>x 좌표, y 좌표: 좌표평면 처럼 이미지나 텍스트를 x, y 좌표로 몇 px 씩 이동시켜달라고 하면 잘 알아 듣습니다.</li>
          <li>가운데 정렬, 페이지: 윈도우를 페이지라고 했습니다. 페이지 기준 가운데 정렬 같을때 자주 썼습니다.</li>
          <li>레이어, z-index: Figma 나 Photoshop 에서 레이어와 같은 기능을 하는게 z-index 입니다. 그라디언트 사각형을 스크롤 박스 위로 올릴때 자주 썼습니다.</li>
          <li>스크롤 박스: 3개의 각각의 스크롤 박스를 정렬 및 크기 조절할때 자주 썼습니다.</li>
        </ul>

        <h4>주요 프롬프트</h4>
        <pre className={styles.codeBlock}>
          <code>
            - "이거를 하나의 페이지에 뜨게 해. 왼쪽이랑 오른쪽 나눠서. next.js 야"{"\n"}
            - "어떤 부분이 그 기능을 해당하는 부분인지 알려달라고 하고, 그 부분에서 챗지피티가 어떤 변수를 사용하고 있는지 알고, 그거를 구체적으로 어떻게 수정하라고 하기"{"\n"}
            - "좋아. 근데 검은색으로
color: #000;{"\n"}
font-family: Inter;{"\n"}
font-size: 24px;{"\n"}
font-style: normal;{"\n"}
font-weight: 400;{"\n"}
line-height: normal;{"\n"}

이 형식으로 나타나는 선택된 번호 있잖아. 그게 페이지에 좌표가 고정되어 있으면 좋겠어. 그건 가만히 있고 스크롤 하면서 거기에 번호가 맞춰지게"{"\n"}
            - "좋아 근데 스크롤에 따른 숫자 크기 변화 때문에 다른 요소들이 움직이지 않게 조절해. 스크롤하는 숫자들, 그리고 화살표"{"\n"}
            - "여기서 좌우 스크롤 숫자들이랑 가운데 화살표랑 간격을 맞춰. 왼쪽 스크롤 숫자들, 화살표의 간격이랑 오른쪽 스크롤 숫자들, 화살표 간격이 안맞아 오른쪽과 화살표의 간격을 왼쪽과 화살표의 간격이랑 같게 해"{"\n"}
            - "1, 15의 위랑 아래에 더 빈공간을 만들어서 1, 15 도 화살표(→)의 y 좌표까지 도달할 수 있도록 하게 해. 아직 도달 안해. 부족해. 그리고 스크롤 박스도 더 위아래로 길게 해"{"\n"}
            - "좋아. 근데 3~13까지 밖에 도달을 안해. 1, 2 랑 14, 15도 되게 해"{"\n"}
            - "위 그라디언트 사각형 윗변의 y 좌표에 맞춰서 그 위에 y 좌표 길이가 20px 짜리 빨간색 사각형을 쌓으라고. 아래 그라디언트 사각형 아랫변의 y 좌표에 맞춰서 그 아래다가 빨간색 그 사각형을 붙이고."{"\n"}
            - "좋아. 그리고 그 선을 제외한 숫자들, 화살표, 버튼들 걔네들을 걔네들 끼리의 간격은 그대로 두고, 그 새로 추가한 vertical line 이랑 페이지 왼쪽 끝이랑 사이의 정 중앙에 위치하게 코드를 수정해."{"\n"}
            - "이제 css 를 수정해. 그 글자들이 나타나고 사라지고 버튼이 나타나고 사라질때 fade in fade out 효과를 넣어."{"\n"}
            - "result 가 나올때 스크롤을 항상 맨 위로 올려놔."
          </code>
        </pre>

        <h4>제작 단계</h4>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fffdce92d-c03a-4bda-b82e-108ccb19cc79%2FScreenshot_2024-06-29_at_2.25.36_AM.png?table=block&id=5b1c6d07-79dc-4381-9145-d14edeb5a2b6&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Step 0" className={styles.contentImage} />
          <figcaption>0단계 : Streamlit으로 만든 Python 코드를 Next.js로 변환 요청하기</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F9ee867e0-153c-4239-9320-35f760e827c0%2FScreenshot_2024-06-29_at_1.39.17_AM.png?table=block&id=9ee688c3-2eb4-4f8d-9960-9d09b8501e9e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Step 1" className={styles.contentImage} />
          <figcaption>1단계 : 층 스크롤 입력 부분</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F4cd39a71-7b27-4034-9727-1de9321fcf4c%2FScreenshot_2024-06-29_at_2.22.22_AM.png?table=block&id=62c2dbd6-3490-4d78-9c05-00034075c87d&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Step 2" className={styles.contentImage} />
          <figcaption>2단계 : 버튼 넣기</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fd5241e45-72c4-41d0-9d17-4afe3437c3a5%2FScreenshot_2024-06-29_at_3.16.55_AM.png?table=block&id=e37fba52-42c2-4cbf-82a1-9be1350804ef&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Step 3" className={styles.contentImage} />
          <figcaption>3단계 : 왼쪽으로 옮기기</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fdf6a1549-efc5-4c12-92ab-09eb4fab75e8%2FScreenshot_2024-06-29_at_11.53.39_PM.png?table=block&id=13a59510-f7c9-40fd-992e-30c83f392d06&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Step 4" className={styles.contentImage} />
          <figcaption>4단계 : 오른쪽에 내용 출력</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fd1f95baf-4496-4363-b868-97e90d0ac752%2FScreenshot_2024-06-30_at_1.01.41_AM.png?table=block&id=4dcb9f68-a49f-495e-8f91-2d5d2b28bd52&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Step 5" className={styles.contentImage} />
          <figcaption>5단계  : 인간 친화화</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F553948d7-8265-41db-ac5e-d3c7024c1374%2FScreenshot_2024-06-30_at_1.03.31_AM.png?table=block&id=b862076a-905b-4669-94b5-3d072470504e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Additional Update" className={styles.contentImage} />
          <figcaption>+ 추가 업데이트</figcaption>
        </figure>

        <h3>3. 배포</h3>
        <p className={styles.bodyText}>
          Vercel 을 통해 배포했습니다. 추후에 아이패드 키오스크 모드로 웹페이지를 띄워놓고, 테이블링 같이 아이패드를 엘리베이터 앞에 세워 놓으면 이용하기 적절할 것 같습니다.
        </p>

        <h2>발전해야 할 점</h2>
        <p className={styles.bodyText}>
          반응형이 아닙니다. 처음에는 모바일 용으로 디자인 했지만, 개발 단계에서 와이드로 펼쳐진 윈도우를 보고 UI 요소를 자연스럽게 side by side로 배치했습니다. 덕분에 테이블링 같이 쓰기 좋아졌지만, 모바일에서도 사용 가능하도록 반응형으로 만들고 싶습니다. 반응형이라면 모바일에서도 쾌적하게 볼 수 있지만, 다 만들어지고 나서 윈도우를 조절하고 알았습니다. 그래서 저해상도 창에서는 웹브라우저 내의 해상도 조절이 필요합니다.
        </p>

        <h2>+ 과정</h2>
        <p className={styles.bodyText}>
          <a href="https://www.notion.so/D0F-2892afb2407d4889bca05c2e31e0fc87?pvs=21" className={styles.hyperlink}>전체 이미지 + 코드 + 프롬프트</a>
        </p>

        <h3>주요 변화 과정 이미지</h3>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fa5e52e53-e9fb-4e62-8365-ecc9f2e3b63d%2FScreenshot_2024-06-28_at_3.01.35_AM.png?table=block&id=6b04fb59-83c5-4c38-bf05-1ed1567b0a7a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 1" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 1</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fa29b94c8-a330-4e95-b46f-7780b8c12588%2FScreenshot_2024-06-28_at_3.22.20_AM.png?table=block&id=cfb2df90-e9a5-490d-9431-fd275704c812&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 2" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 2</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F83a4c1e0-f39a-45ea-9dfd-11133a21848e%2FScreenshot_2024-06-28_at_5.42.03_PM.png?table=block&id=e1573bb9-10df-4a80-b0e0-9c336e1dd85a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 3" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 3</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb8833aea-8086-4320-8214-3df9a8976c76%2FScreenshot_2024-06-28_at_6.12.39_PM.png?table=block&id=d27ca092-b2a9-456f-9082-53ecc921eaa5&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 4" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 4</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Ff9db478e-e7e5-4901-bf92-01d4f645706a%2FScreenshot_2024-06-28_at_6.59.21_PM.png?table=block&id=6d7367cc-2c8e-4826-9c5a-81452fab9a1e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 5" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 5</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fd4d4ec0c-9a4f-4442-8d05-ba73478caaca%2FScreenshot_2024-06-28_at_8.15.38_PM.png?table=block&id=f91c8fe3-139e-43c0-983c-5bfb56f07552&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 6" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 6</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F6a082f6a-5ec4-42f4-9817-82bc9a501875%2FScreenshot_2024-06-28_at_8.52.51_PM.png?table=block&id=0d170212-58f8-476b-88ad-8304d965d61e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 7" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 7</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fc06b02db-9598-494c-a783-a3f3aed677bc%2FScreenshot_2024-06-28_at_10.19.47_PM.png?table=block&id=c9f1d320-ead2-4cf3-ae47-674d77dd745f&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 8" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 8</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F6a038761-19f1-407d-a996-a10c01702184%2FScreenshot_2024-06-28_at_10.24.22_PM.png?table=block&id=c381e972-853a-46a8-b301-6d14a347455d&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 9" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 9</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb81febbd-e8dd-44c0-87f9-bec3521aea0b%2FScreenshot_2024-06-28_at_10.28.07_PM.png?table=block&id=ae140532-e410-4de0-91ba-5f663e556e04&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 10" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 10</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Feaf88634-3cb8-4b22-82a6-aa748e2eab90%2FScreenshot_2024-06-28_at_11.57.27_PM.png?table=block&id=b3334c6c-fa9f-4c37-b10e-a345cda5a743&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 11" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 11</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fa51ed88b-e4c1-49fd-ba0b-b44e6b36d146%2FScreenshot_2024-06-29_at_1.57.49_AM.png?table=block&id=b855c619-b0c6-46af-8d9d-2fbe200565bf&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 12" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 12</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F605b1618-d523-4438-9695-b1ea2b5ad0d6%2FScreenshot_2024-06-29_at_2.08.52_AM.png?table=block&id=7e0da062-8e22-4fe2-937c-f8bc47761e6c&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 13" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 13</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F3ccfcd3c-da68-4f1d-a57b-d7c231913926%2FScreenshot_2024-06-29_at_2.24.07_PM.png?table=block&id=31d5748f-8ca1-4e75-87b8-35d8b4f69f87&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 14" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 14</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb937082f-0847-40c0-9a0b-4100f18efdef%2FScreenshot_2024-06-29_at_2.31.13_PM.png?table=block&id=0db12913-f21e-4597-8df3-bddf80edba5d&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 15" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 15</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fc22cdc63-4ffc-4253-a225-7b83404fbc8b%2FScreenshot_2024-06-29_at_2.53.45_PM.png?table=block&id=3e63aa97-5702-4fa5-ac14-80053a0da816&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 16" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 16</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fe6fd5b21-d219-46c8-a9dd-cfa5d3b1edce%2FScreenshot_2024-06-29_at_3.00.29_PM.png?table=block&id=e864e245-ef49-403b-b5ec-2e47743b7b72&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 17" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 17</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb8b990ac-f8c6-4b7c-a634-ad6e31e0b77d%2FScreenshot_2024-06-29_at_3.06.02_PM.png?table=block&id=9dcd732f-7ff0-4294-880a-5d61fedf4034&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 18" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 18</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F80b6f1f3-9c3a-440a-ba64-397015baa595%2FScreenshot_2024-06-29_at_3.53.35_AM.png?table=block&id=d32ff6ad-acb5-4d76-bb1a-090daa997e3c&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 19" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 19</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb12c5556-9ff9-4b35-8e0f-114779af7dbe%2FScreenshot_2024-06-29_at_7.35.04_PM.png?table=block&id=adace57a-64eb-480a-810f-f8d2f27ae259&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 20" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 20</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F03473c0d-7f49-4d4e-b4b7-e7fb0efaced9%2FScreenshot_2024-06-29_at_11.44.20_PM.png?table=block&id=f00a366e-7d33-4bb0-a648-98bf03559852&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 21" className={styles.contentImage} />
          <figcaption>주요 변화 과정 이미지 21</figcaption>
        </figure>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F82fde094-426b-48ec-a6d0-5a87d84c9b72%2FScreenshot_2024-06-30_at_12.52.58_AM.png?table=block&id=148390b2-7345-46a4-80c7-0f9da3ebcfb3&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Change 22" className={styles.contentImage} />
          <figcaption>완성</figcaption>
        </figure>
      </main>
    </div>
  );
}
