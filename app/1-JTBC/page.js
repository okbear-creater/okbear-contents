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
      <div className={`${styles.topBanner} ${!isVisible ? styles.topBannerHidden : ''}`}>
        <a href="https://dzerof-home.vercel.app/" className={styles.bannerContent} style={{ textDecoration: 'none' }}>
          <span className={styles.greyGrade}>A+ A0 B+ B0 C+ C0 D+ </span>
          <span className={styles.whiteGrade}>D0 F</span>
        </a>
      </div>
      <main className={`${styles.main} markdown`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>이건 돼냐?이건 돼냐? 한번 다 한글로 해보자자</h2>
          <h3 className={styles.subtitle}>이거는 서브타이틀임 메인 타이틀보다 좀 더 긴거 왜 얘는 되는데 응응 줄간격 확인용 길게 치기</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Faa086e31-c575-43a6-9c3f-12cb51844c8d%2Fwhat_we_like_and_what_we_hate_copy.png?table=block&id=69b02fba-b0d7-40f0-a10a-44c95f70bed7&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="What we like and what we hate" className={styles.contentImage} />
        
        <h1>내가 쓴거h1</h1>
        <h2>뜻h2</h2>
        <h3>이건 h3</h3>
        <p className={styles.bodyText}>우리는 무한한 능력을 갖고 있습니다. 우리는 트렌드, 최신 기술에 집중하지 않습니다. 우리는 변하지 않는 원리, 진리에 대해 탐구합니다. 심연에 있는 뼈까지 뜯어 보고 모두 이해한 뒤 뼈를 재조합해서 새로운 것을 만들어냅니다.</p>
        <p className={styles.bodyText}>학교는 학생들의 무한한 능력을 제한합니다. 하나 또는 두개의 전공으로 우리가 할 수 있는 분야는 한두개가 전부라는 인식을 무의식적으로 심고 있습니다.</p>
        
        <blockquote className={styles.quote}>
          <p className={styles.bodyText}>🌎 '우린 디자이너니까 거기까진 알 필요 없고', '그건 딥러닝의 영역이니까 알 수 없고', '우린 미대니까'</p>
        </blockquote>
        
        <p className={styles.bodyText}>레오나르도 다빈치는 화가이자 조각가, 발명가, 건축가, 해부학자, 지리학자, 음악가입니다. 우리는 레오나르도 다빈치와 같은 뇌, 눈, 팔, 다리를 갖고 있습니다. 우리가 레오나르도 다빈치 입니다. 우리는 일론 머스크, 빌게이츠와 같은 컴퓨터를 쓰고 있습니다. 우리가 일론 머스크, 빌게이츠 입니다.</p>
        <p className={styles.bodyText}>우리는 학교의 기준을 깹니다. 나를 버리고 남의 기준에 맞추면 성적은 A+, A0 입니다. 그런 기준으로 주는 성적에서는 D0, F 를 받고 싶습니다. 그게 우리가 D0F인 이유입니다.</p>
        
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fafd2187e-38fc-4ad8-856f-ad88ca004ad3%2Fdog-sound.png?table=block&id=34da8561-8cd6-482a-a543-a80c21601e3b&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Dog sound" className={styles.contentImage} />
          <figcaption>이거는 이미지 캡션</figcaption>
        </figure>
        
        <h2>정신</h2>
        <blockquote className={styles.quote}>
          <p className={styles.bodyText}>"이론이란, 내가 가는 길이 옳은 길인지 재확인하는 옵션이다."</p>
        </blockquote>
        
        <p className={styles.bodyText}>우린 실행하며 배웁니다. 실행하고 부딛히고 생각하고 문제를 해결합니다. 그 속에서 공통점을 찾습니다. 그 공통점이 원리입니다. 원리는 무의식적으로만 알고 가도 됩니다. 이 원리를 의식화 시켜주는게 이론일 뿐입니다. "~론 도 모르는 것이 어디서 UI 디자인을 해" 교수님이 했던 말입니다.</p>
        
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F89f783a1-734b-49a6-9e24-a7401a6d823f%2Fcodioful-formerly-gradienta-faXXUrNbH1c-unsplash.jpg?table=block&id=a5dec4aa-f83e-47ca-8488-f73a42755842&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Gradient background" className={styles.contentImage} />
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Ff76419c8-2454-498d-931e-4d4ae625ad2d%2FKW.png?table=block&id=b7979185-e59e-4475-b3b2-c245d333a8f5&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="KW" className={styles.contentImage} />
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F7479c63d-a13e-4aa0-9ee0-12511bf6fa05%2FMZ.png?table=block&id=3042a294-1a28-4660-aefa-7a0871226209&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="MZ" className={styles.contentImage} />
        
        <h2>정신</h2>
        <p className={styles.bodyText}>우린 이런 말은 걸러 듣습니다. UI 디자인을 많이 하다 보면 이상적인 것이 보이고, 계층 구조가 잡히고, 폰트 사이즈의 종류의 개수의 최대치 등 나만의 기준이 생깁니다. 나만의 기준이 생긴게 이론과 맞으면 디자인이 되고, 안맞으면 예술이 됩니다.</p>
        
        <blockquote className={styles.quote}>
          <p className={styles.bodyText}>"Quantity Over Quality" - YE</p>
        </blockquote>
        
        <p className={styles.bodyText}>질보다 양으로 갑니다. 해보면서 배웁니다. 완벽주의는 배척합니다. 어떻게 하는지 알아서 하는게 아닙니다. 하다 보면 어떻게 하는지 알게 됩니다.</p>
        
        <pre className={styles.codeBlock}><code>
{`"hello world"
    switch (type) {
      case 'paragraph':
        if (value.rich_text.length === 0) {
          return <br key={id} />;
        }
        return <p key={id}>{renderRichText(value.rich_text)}</p>;
      case 'heading_1':
        return <h1 key={id} className="heading-1">{renderRichText(value.rich_text)}</h1>;
      case 'heading_2':
        return <h2 key={id} className="heading-2">{renderRichText(value.rich_text)}</h2>;
      case 'heading_3':
`}
        </code></pre>
        
        <ul className={styles.customList}>
          <li>리스트</li>
          <li>테스트</li>
        </ul>
        
        <p className={styles.bodyText}>이번에는</p>
        
        <ol className={styles.customList}>
          <li>번호</li>
          <li>테스트</li>
        </ol>
        
        <p className={styles.bodyText}>이렇게 텍스트 중간에(<a href="https://www.youtube.com/watch?v=XCAwSBdeejU&t=241s">https://www.youtube.com/watch?v=XCAwSBdeejU&t=241s</a>) 링크</p>
        
        <p className={styles.bodyText}><a href="https://www.youtube.com/watch?v=XCAwSBdeejU&t=241s">https://www.youtube.com/watch?v=XCAwSBdeejU&t=241s</a></p>
        
        <p className={styles.bodyText}><a href="https://www.notion.so/profile/integrations">Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.</a></p>
        
        <p className={styles.bodyText}>이것도 테스트</p>
        
        <p className={styles.bodyText}>/cal</p>
        
        <p className={styles.bodyText}><code className={styles.inlineCode}>this one</code></p>

        <p className={styles.bodyText}>
          <a href="http://youtube.com" className={styles.hyperlink}>이거는 하이퍼 링크</a>
        </p>
      </main>
    </div>
  );
}