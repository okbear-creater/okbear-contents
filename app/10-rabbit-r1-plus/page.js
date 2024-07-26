'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function RabbitR1PlusPage() {
  return (
    <div className={styles.container}>
      <main className={`${styles.main} markdown`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>Rabbit R1+ Concept</h2>
          <h3 className={styles.subtitle}>Rabbit R1 디자인 개선</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F05ee77f6-0f26-4729-82b0-a2a61992ba26%2Fewfwef.jpg?table=block&id=89c3c81d-7b4e-4c27-9745-85394c39fe8d&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="ewfwef" className={styles.contentImage} />
        
        <h1>디자인 개선 포인트</h1>
        
        <h2>본체</h2>
        <ul className={styles.customList}>
          <li>기존의 부품별 조립 구조를 하나의 통 구조로 개선하여 내구성을 높이고 틈이 없어서 더 매끄러운 디자인을 구현</li>
          <li>다양한 컬러 옵션 추가</li>
          <li>전원 버튼에 컬러 포인트 적용</li>
        </ul>
        
        <h2>충전 Dock</h2>
        <ul className={styles.customList}>
          <li>새로운 충전 Dock 추가</li>
          <li>각각의 Rabbit R1+과 색상을 매칭</li>
          <li>USB-C 포트 끝부분에 곡률을 줘서 포트가 부드럽게 본체에 들어가도록 설계</li>
          <li>밑면에 미끄럼 방지 실리콘 적용</li>
          <li>충전 Dock이 밀리더라도 실리콘 끝부분의 내구성을 유지하도록 끝부분에 곡률 처리</li>
        </ul>
        
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F44c0b77b-aec3-4406-832c-d1d49e3eeaf4%2Fewfewfewfwfe.jpg?table=block&id=0c54d37b-e1b5-4535-ae3a-0e20d9a3a4e4&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="ewfewfewfwfe" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fdff927d1-8a44-4a83-9647-518a380a2bf9%2Fewifjoiwfiwjf.jpeg?table=block&id=aca01c42-8698-4ac7-a197-dc24cf4ccc91&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="ewifjoiwfiwjf" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F041ac65f-face-42c9-af5d-76716fbf31f6%2Fwef.jpeg?table=block&id=54f71930-ee7f-4702-be9b-360bd801f708&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="wef" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F3e69527e-c07b-4394-961e-f7f54b4ce626%2Fqwofhiqjwqwf.jpeg?table=block&id=88b6fae8-24c6-4a93-aa7c-fd66c29920c6&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="qwofhiqjwqwf" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F72ecbca5-fdb4-4ff4-8cff-b4a8818b835b%2Fwfeqw.jpeg?table=block&id=8a7906ef-017e-4060-bbd1-2c43f61d3394&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="wfeqw" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb993a128-5d12-4877-baca-57ee39c6e438%2Fqwdwqw.jpeg?table=block&id=021b2756-cb40-4044-be87-294a00662c61&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="qwdwqw" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fe74e8e15-d4d1-4cfb-97bc-e4a525dc3664%2Fiwjqofij.jpeg?table=block&id=597c7a18-03d5-406c-9f2f-9d6b87639705&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="iwjqofij" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F477f8bc6-bfcb-4a1f-a704-6036fa985ddb%2Fwqjfiojowf.jpeg?table=block&id=0d26fc5b-07fa-4a11-b15d-c20be243aeb3&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="wqjfiojowf" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F000c4884-225e-4401-aac0-56f8e380611a%2Fweffewef.jpeg?table=block&id=fc29e7f3-057b-462a-a5c5-b034011563d7&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="weffewef" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fadc73a2a-c931-4a03-ae7b-572a68957889%2Fwfeiwohefojiwef.jpeg?table=block&id=259aa564-081b-4139-bdf5-0435a46e882e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="wfeiwohefojiwef" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb5a8f266-c53a-454b-8ef0-3db03c82863b%2Fwefiijwef.jpeg?table=block&id=89b3b694-cd17-4d9c-b93d-6de5251a8b58&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="wefiijwef" className={styles.contentImage} />
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F6e6052ee-577a-4d0b-b69a-91af77a7c3fd%2Fojeifojie.jpeg?table=block&id=cf012123-9188-4915-b193-282a868b9d68&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="ojeifojie" className={styles.contentImage} />
        </figure>
        <iframe src="https://collaborate.shapr3d.com/v/cVzq3_QyQf3WHsqzPHkUl" title="Shapr3D Webviewer" width="640" height="640" frameborder="0" allow="web-share; xr-spatial-tracking" loading="lazy" scrolling="no" referrerpolicy="origin-when-cross-origin" allowfullscreen></iframe>





      </main>
    </div>
  );
}
