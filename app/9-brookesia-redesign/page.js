'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function BrookesiaPage() {
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
          <h2 className={styles.title}>BROOKESIA Redesign Project</h2>
          <h3 className={styles.subtitle}>코스매틱 브랜드 ‘브루케시아’의 디자인 개편작업</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F37d52c03-2c08-41f7-8106-9214649c1e52%2Ffwewef.png?table=block&id=0457858c-ae24-4411-b684-aa4163b96ea3&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="브루케시아 디자인" className={styles.contentImage} />
        
        <h1>디자인 포인트</h1>
        <h2>배너</h2>
        <ul className={styles.customList}>
          <li>브랜드 색깔을 많이 넣어야 한다는 요구사항과 가독성 사이의 균형을 맞춤</li>
        </ul>

        <h2>게시물</h2>
        <ul className={styles.customList}>
          <li>가려져 있는 로고를 통해 사용자의 궁금증 유도</li>
          <li>디자인 툴에는 Magnet 기능이 있지만, 폰트에 따라 이 기능을 사용해도 정렬이 정확하지 않을 수 있음. 이럴 때는 직사각형을 추가하여 1픽셀 단위로 직접 수동 조정하여 작업.</li>
        </ul>

        <h2>웹사이트</h2>
        <ul className={styles.customList}>
          <li>뒤에 제품 사진을 반복적으로 배치하여 사용자에게 인식을 심어줌</li>
          <li>쨍한 색깔을 사용해 기억에 남는 웹사이트 구축</li>
        </ul>

        <h1>작업물</h1>
        <h2>배너</h2>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fbb51c3de-609d-465b-b5a8-1ac1feb40922%2Fbn3.jpg?table=block&id=2188cc9e-8bfe-4772-84aa-f6be097ba92c&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="배너3" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F521d601a-e920-4bb4-9cc4-bfaec1666e29%2Fbn4.jpg?table=block&id=0f2ca036-90d5-4578-803c-0e6039ed537b&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="배너4" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F5fc614f7-d27b-4c5a-ba48-ae150d07c090%2Fbn2.jpg?table=block&id=975efcbd-4e30-48c9-9fd0-3be86852fc3a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="배너2" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F12280d97-f630-4c80-a5d0-f43a5097da83%2Fbn5.jpg?table=block&id=bf78d05c-4421-439d-b743-36767b65b9f9&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="배너5" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb99e9356-b293-4679-9a36-c933b8136405%2Fbn6.jpg?table=block&id=f6b31a33-b4a9-4ee9-8664-077a7513baee&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="배너6" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F7901e9b6-6189-498b-91a2-e3bd872cf601%2F%25E1%2584%2587%25E1%2585%25A2%25E1%2584%2582%25E1%2585%25A52.jpg?table=block&id=a7f28af5-dbe1-437f-814b-6db263943613&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="배너2" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F7493996c-eac8-4622-a36f-437b09340a58%2F%25E1%2584%2587%25E1%2585%25A2%25E1%2584%2582%25E1%2585%25A51.jpg?table=block&id=8612d181-8b05-4ea7-b4a5-0ff74c0aa76a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="배너1" className={styles.contentImage} />
        </figure>

        <h2>게시물</h2>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fafb49ae5-e02a-49a7-9465-ae40986fffb4%2F%25E1%2584%2580%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AF3.jpg?table=block&id=8e618e02-ce28-4451-9fbd-bce48f45879e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="게시물3" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F15b0d50f-9e2f-4b75-8e2b-764d1b512a6e%2F%25E1%2584%2580%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AF8.jpg?table=block&id=f77987ab-fb87-4ef6-9973-be147a92936a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="게시물8" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F5498e17d-d106-4553-9aaa-5fd7a977c1d6%2F%25E1%2584%2580%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AF9.jpg?table=block&id=9b2b235b-447d-4274-b180-31d0db9bea7a&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="게시물9" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fe979d621-4e21-4726-9341-23d0eb4a1237%2F%25E1%2584%2580%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AF10.jpg?table=block&id=9b945630-0c39-4b1e-a02c-271f3591d43c&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="게시물10" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fa4fc8911-ff19-4f19-be4f-32ce9fac034c%2F%25E1%2584%2580%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AF6.jpg?table=block&id=cadd76ac-324d-4ecf-a7bc-a04be1449e49&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="게시물6" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fcb4e742e-9440-4a5b-b3e0-e1d91b882a0d%2F%25E1%2584%2580%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AF5.jpg?table=block&id=ca92e65b-390c-491d-9875-26af6e1b6c4c&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="게시물5" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F1e1ad252-b33f-43eb-bd5b-e787a816637a%2F%25E1%2584%2580%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AF4.jpg?table=block&id=5f8029fc-7311-4eec-9e03-936ff4018880&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="게시물4" className={styles.contentImage} />
        </figure>

        <h2>웹사이트</h2>
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F9d49d2e4-45ee-4a7b-99ae-0697a1f22375%2FDesktop_-_4.jpg?table=block&id=0cd64d45-9901-4c50-b948-691db93a6986&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="웹사이트" className={styles.contentImage} />
          <figcaption>디자인에 사용된 이미지 소스 출처 : 브루케시아</figcaption>
        </figure>
      </main>
    </div>
  );
}
