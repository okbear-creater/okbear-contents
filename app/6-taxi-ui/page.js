'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function JTBCPage() {
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
      <main className={`${styles.main} markdown`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>기름 택시팟 UI 디자인</h2>
          <h3 className={styles.subtitle}>등하교 시간 버스와 같은 가격으로 택시를 탈 수 있게 하는 서비스</h3>
        </div>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F06c78444-6e3a-4300-aec1-ef71dbcfd3c0%2Fwfe.png?table=block&id=ecbc8c1f-2b36-4858-a1c2-3aded43a33a2&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="기름 택시팟 UI" className={styles.contentImage} />

        <h2>문제 인식</h2>
        <p className={styles.bodyText}>
          등교시간(8시 30분~9시)와 하교시간(5시30분~6시) 길음역과 국민대를 오가는 학생 수요가 급증합니다. 시내버스와 셔틀버스가 있지만, 많은 학생들을 충분히 수용하지 못하고 있습니다. 택시팟을 찾는 오픈채팅방도 있습니다. 
        </p>

        <h2>해결</h2>
        <p className={styles.bodyText}>
          택시를 이용하면 약 6,000원이 들며, 4명이서 택시를 나눠 타면 1인당 1,500원으로 버스비와 동일하게 택시를 이용할 수 있습니다. 이를 기반으로 택시 동승자를 모으는 서비스를 생각했습니다. 
        </p>

        <h2>디자인 포인트</h2>
        <ul className={styles.customList}>
          <li>게임같은 UI 를 적용시키고자 했습니다.</li>
          <li>토스처럼 3D 아이콘 활용 컨셉으로 디자인 했습니다.</li>
          <li>택시 팟이 완성되면 핸드폰 화면을 택시 팟 색깔과 같은 화면을 띄워, 사용자들이 손 위로 폰을 들어 자기 팟을 찾을 수 있게 합니다.</li>
        </ul>
        <h2>디자인 과정</h2>
        <h3>초기 과정</h3>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F5060b045-fda6-4efe-a61c-9f18481d63d3%2FScreenshot_2024-07-08_at_3.03.04_AM.png?table=block&id=6d7dd085-3ca3-46e0-9a78-631785a30509&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="초기 디자인 1" className={styles.contentImage} />
        <p className={styles.bodyText}>인터넷에서 사람과 차 모델 소스를 가져와 봤지만 어울리지 않아 패스합니다.</p>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F2269db25-72bf-4ebc-9511-bbb8c7c59dff%2FScreenshot_2024-07-08_at_3.04.24_AM.png?table=block&id=56321ac1-ab22-419d-baa1-7171adb17823&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="초기 디자인 2" className={styles.contentImage} />
        <p className={styles.bodyText}>게임처럼 보이게 시점을 조정했지만 거리감이 너무 느껴져서 삭제합니다.</p>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F950f5c7b-27f4-4a4c-82fa-ef4c9147258b%2FScreenshot_2024-07-08_at_3.05.41_AM.png?table=block&id=485d3347-98a9-4280-8f4d-408b621159b6&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="초기 디자인 3" className={styles.contentImage} />
        <p className={styles.bodyText}>택시팟을 선택할 수 있는 버튼을 디자인하기 위한 여러 버튼 옵션입니다.</p>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F33ba99b8-4833-4ff6-816a-1d95c2f3bac5%2FScreenshot_2024-07-08_at_3.06.19_AM.png?table=block&id=5cbd402d-9c19-426c-a0ee-7571d3e67195&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="초기 디자인 4" className={styles.contentImage} />
        <p className={styles.bodyText}>UI의 하단에는 사용자의 행동을 유도할 수 있는 텍스트를 게임과 같은 말투로 디자인합니다. 사람 모델이 안어울리게 생겨서 패스했습니다.</p>

        <h3>확정 디자인</h3>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fc02f83ed-6a25-4545-8eb5-caf235767036%2FScreenshot_2024-07-08_at_3.08.33_AM.png?table=block&id=bc773d77-08a7-4510-a26b-af99d999b445&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="확정 디자인 1" className={styles.contentImage} />
        <p className={styles.bodyText}>
          차 안에 앉은 사람이 보다 직관적일 것으로 판단되어 직접 모델링을 합니다. 사람 아이콘은 디테일을 최소화하여 심플하게 간소화하였습니다. 사용자가 팟에 끼는 것이 확정됨을 나타낼땐 초록색으로 나타냅니다. 선택했을땐 노란색으로 나타냅니다. 팟 인원 수가 0, 1, 2, 3명일때의 경우와 각각 선택 밑 확정 했을때의 아이콘을 모두 캡쳐해서 저장합니다. 
        </p>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F96d6a701-45a1-4f8f-a7b9-b237153a4145%2FScreenshot_2024-07-08_at_3.13.44_AM.png?table=block&id=2fe67678-a308-41af-b50f-bd1ef115aeef&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="확정 디자인 2" className={styles.contentImage} />
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F0df29019-52ca-439e-8bac-fda44992d7f1%2FScreenshot_2024-07-08_at_3.13.52_AM.png?table=block&id=3d68ca7c-1924-464f-aa80-fd802644a817&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="확정 디자인 3" className={styles.contentImage} />
        <p className={styles.bodyText}>
          3D 모델을 UI에 통합하고, 사용자가 직관적으로 받아들일 수 있도록 배경에는 스르륵 움직이는 그라데이션을 두어 Live로 느껴지도록 합니다. 각각의 아이콘을 넣고, 택시팟을 선택했을 때 나머지 인원을 기다리는 UI 와 팟을 선택했을때의 옵션들 UI 를 만듭니다. 에어팟 처럼 했습니다. 사용자의 엄지가 잘 닿도록 버튼은 아래쪽에 배치합니다. 
        </p>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F9de1e2ad-0705-406b-8951-49611e3fa089%2FScreenshot_2024-07-08_at_3.15.31_AM.png?table=block&id=4f50ec21-b101-4d31-b794-3d8ec5a0552a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="확정 디자인 4" className={styles.contentImage} />
        <p className={styles.bodyText}>
          차와 팟의 이름이 하나의 요소로 인식되도록 팝업창을 확장하여 레이아웃을 조정했습니다. 4인이 모이지 않아도, 팟을 선택한 후 자기들끼리 가자는 요청을 할 수 있는 기능을 추가하고, 모두가 동의하면 출발할 수 있도록 기능을 추가합니다. 팟의 색깔은 첫 랜딩페이지에서 차 아래 그림자를 통해 알고, 아래로 스크롤 하면 사용자가 직접 새로운 팟을 만들 수 있습니다.
        </p>

        <h2>목업</h2>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F06c78444-6e3a-4300-aec1-ef71dbcfd3c0%2Fwfe.png?table=block&id=4c54b885-cd34-4946-bc0b-afb59a0623f6&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="기름 택시팟 목업" className={styles.contentImage} />

      </main>
    </div>
  );
}