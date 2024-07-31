'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function DJLineupGenerator() {
  return (
    <div className={styles.container}>
      <main className={`${styles.main} markdown`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>DJ Lineup Generator를 통한 텍스트 정렬 효율성 높이기</h2>
          <h3 className={styles.subtitle}>알파벳 순서로 정렬하고, 중복 이름을 제거하며, 모두 대문자로 변환하는 과정 자동화</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fd29bb6e0-74b3-45d4-b785-48d4e72b02e6%2FUntitled_2.jpeg?table=block&id=62e43726-07aa-4101-b9e2-2722b752010b&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="DJ Lineup Generator" className={styles.contentImage} />
        
        <p className={styles.bodyText}>
          <a href="https://dj-lineup-generator-g9e2l6rrjnwzjhgicmgvjx.streamlit.app/" className={styles.hyperlink}>DJ Lineup Generator</a>
        </p>
        <p className={styles.bodyText}>
          <a href="https://github.com/okbear-creater/DJ-Lineup-Generator" className={styles.hyperlink}>Github Repo</a>
        </p>

        <h1>제작 동기</h1>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F045bce23-6f08-47c9-b029-9730cc858cdf%2FIMG_3982.jpg?table=block&id=1b0745f5-e2ad-4dc9-bc36-2727cdf60d66&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="IMG_3982" className={styles.contentImage} />
        <p className={styles.bodyText}>2024년 7월 27일 송도에서 열린 Google I/O Extended에서 자극을 받아 이 프로그램을 제작했습니다.</p>
        <p className={styles.bodyText}>저는 홍대의 한 클럽에서 해당 주의 DJ 라인업을 소개하는 인스타그램 게시물과 스토리의 그래픽 작업을 맡고 있습니다. DJ 라인업은 매주 바뀌며, 이를 매번 교체해야 합니다. 인스타그램 게시물과 스토리에 올라가는 영상의 DJ 라인업은 알파벳 순서로 정렬되고 모두 대문자로 표기되어야 합니다.</p>
        <p className={styles.bodyText}>기존에는 홍대 클럽 운영진에게 받은 DJ 라인업을 ChatGPT(4o, 2024년 8월 기준)에게 요청해 알파벳 순서로 정리하고 대문자로 변환한 뒤 줄바꿈하여 출력했지만, 계속 오류가 발생해 일일이 수작업으로 확인해야 했습니다. DJ 수가 6~7명이라 작업 시간이 많이 걸리지는 않았지만, 'Don’t spend 5 minutes manually solving a problem. Spend 5 hours failing to automate it.' 정신으로 이 과정을 자동화하는 프로그램을 만들고자 했습니다.</p>
        <p className={styles.bodyText}>그래서 저는 홍대 클럽 운영진에게 받은 DJ 라인업을 알파벳 순서대로 정리하고, 중복을 제거한 뒤 모두 대문자로 변환하는 도구를 제작했습니다. 이를 통해 그래픽 작업 시 After Effects에 바로 붙여넣어 효율성을 높일 수 있습니다.</p>

        <h2>개발 과정</h2>
        <h3>프레임워크</h3>
        <p className={styles.bodyText}>streamlit (Python 기반의 Streamlit 프레임워크) 을 사용했습니다.</p>
        
        <h3>코드 흐름</h3>
        <ul className={styles.customList}>
          <li>필요한 라이브러리 임포트:
              <ul className={styles.customList}>
                <li><code className={styles.inlineCode}>streamlit</code>: 웹 애플리케이션 인터페이스 생성</li>
                <li><code className={styles.inlineCode}>re</code>: 정규 표현식 사용을 위한 라이브러리</li>
              </ul>
          </li>
          <li><code className={styles.inlineCode}>sort_names</code> 함수 정의:
              <ul className={styles.customList}>
                <li>입력된 텍스트에서 시간 정보를 제거하고 이름만 추출</li>
                <li>이름을 대문자로 변환, 중복 제거, 알파벳 순 정렬</li>
              </ul>
          </li>
          <li>웹 인터페이스 구성:
              <ul className={styles.customList}>
                <li>제목 설정: 'DJ Lineup Automator 🎧 🎹 👨‍💻'</li>
                <li>'정렬 시킬 Lineup' 섹션 생성</li>
                <li>금요일과 토요일 각각의 입력 영역 생성</li>
                <li>'Gimme the Lineup' 버튼 생성</li>
              </ul>
          </li>
          <li>사용자 입력 처리:
              <ul className={styles.customList}>
                <li>버튼 클릭 시 <code className={styles.inlineCode}>sort_names</code> 함수를 사용하여 입력된 라인업 처리</li>
                <li>처리된 결과를 '정렬된 Lineup' 섹션에 표시</li>
              </ul>
          </li>
          <li>결과 표시:
              <ul className={styles.customList}>
                <li>금요일과 토요일 각각의 정렬된 라인업을 별도의 텍스트 영역에 표시</li>
              </ul>
          </li>
        </ul>

        <h3>소스코드 속 핵심 함수</h3>
        <p className={styles.bodyText}><code className={styles.inlineCode}>sort_names</code> 함수는 DJ 라인업을 알파벳 순서로 정렬하고, 중복된 이름을 제거한 뒤, 모두 대문자로 변환하여 결과를 출력하는 핵심 함수입니다. 자세히 살펴보겠습니다.</p>
        <h3>텍스트 분할:</h3>
        <pre className={styles.codeBlock}><code>
{`lines = text.split('\\n')`}
        </code></pre>
        <p className={styles.bodyText}>이 줄은 입력된 텍스트를 줄 단위로 분할합니다.</p>
        
        <h3>이름 추출 및 정제:</h3>
        <pre className={styles.codeBlock}><code>
{`names = [re.sub(r'\\d+:\\d+-\\d+:\\d+\\s+', '', line).strip() for line in lines if line.strip()]`}
        </code></pre>
        <ul className={styles.customList}>
          <li>각 줄에서 정규 표현식을 사용하여 시간 정보를 제거합니다.</li>
          <li><code className={styles.inlineCode}>strip()</code>을 사용하여 앞뒤 공백을 제거합니다.</li>
          <li>빈 줄은 무시합니다.</li>
        </ul>
        
        <h3>대문자 변환, 중복 제거, 정렬:</h3>
        <pre className={styles.codeBlock}><code>
{`return '\\n'.join(sorted(set(name.upper() for name in names)))`}
        </code></pre>
        <ul className={styles.customList}>
          <li><code className={styles.inlineCode}>name.upper()</code>: 모든 이름을 대문자로 변환합니다.</li>
          <li><code className={styles.inlineCode}>set()</code>: 중복된 이름을 제거합니다.</li>
          <li><code className={styles.inlineCode}>sorted()</code>: 알파벳 순으로 정렬합니다.</li>
          <li><code className={styles.inlineCode}>'\\n'.join()</code>: 정렬된 이름들을 줄바꿈으로 구분하여 하나의 문자열로 만듭니다.</li>
        </ul>
        <p className={styles.bodyText}>이 과정을 통해:</p>
        <ul className={styles.customList}>
          <li>시간 정보가 제거됩니다.</li>
          <li>모든 이름이 대문자로 통일됩니다.</li>
          <li>중복된 이름이 제거됩니다.</li>
          <li>이름들이 알파벳 순으로 정렬됩니다.</li>
          <li>각 이름이 새 줄에 표시됩니다.</li>
        </ul>
        <p className={styles.bodyText}>Python의 <code className={styles.inlineCode}>sorted()</code> 함수는 기본적으로 알파벳 순으로 정렬하며, <code className={styles.inlineCode}>set()</code>은 중복을 자동으로 제거합니다. 이 두 기능을 조합하여 원하는 결과를 얻을 수 있습니다.</p>

        <h2>테스트</h2>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F656f2d4c-0f27-4fc4-9b4a-e0788721e0b3%2FScreenshot_2024-07-31_at_11.51.59_PM.png?table=block&id=09454b22-49e3-4dcf-9834-a65a7c4decf1&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-07-31 at 11.51.59 PM" className={styles.contentImage} />
        <p className={styles.bodyText}>제가 일일이 중복된 이름을 제거하고 알파벳 순서대로 정리한 것과 동일하게, <code className={styles.inlineCode}>sort_names</code> 함수가 정확하게 작동하는 것을 확인할 수 있었습니다.</p>

        <h2>UX 개선</h2>
        <ul className={styles.customList}>
          <li>구분선 삽입</li>
          <li>필요한 멘트와 요소만 남기기</li>
          <li>낭비되는 공간을 활용하기 위해 텍스트 입력 칸을 가로로 배치</li>
        </ul>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fd50e9405-57a4-4412-a096-9e596f939495%2FScreenshot_2024-08-01_at_1.50.55_AM.png?table=block&id=54dbea00-18a0-48ba-851a-3b64fd236d92&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="개선시킨 UX" className={styles.contentImage} />
        <figcaption>개선시킨 UX</figcaption>

        <h1>기대효과 및 미래 방향</h1>
        <p className={styles.bodyText}>일일히 겹치는 이름을 찾고, 알파벳 순서대로 배치하고, 대문자로 바꾸는 작업의 자동화를 통해 DJ Lineup Generator로 나온 결과를 After Effects 에 붙여넣기만 하면 돼서 작업의 효율성과 적확도가 올라갑니다. 일반 사용자보다 저 혼자 쓸 툴을 만든거라서 기존에 있는 UI 요소들을 조립해서 쓰는 Streamlit 을 썼지만, 추후에 next.js 로 더 일반 사용자에게도 디자인적으로 좋은 커스텀된 것으로 만들어볼 생각이 떠올랐습니다.</p>

        <h1>초기 프롬프트</h1>
        <pre className={styles.codeBlock}><code>
{`금

10:00-11:00 Liin
11:00-12:00 Kibo
12:00-01:00 Nufat
01:00-02:00 Techzin
02:00-03:00 Pebble
03:00-04:00 Giri
04:00-05:00  Kibo
05:00-06:00 nufat

토

10:00-11:00 Liin
11:00-12:00 Kibo
12:00-01:00 Techzin
01:00-02:00 Nufat
02:00-03:00 giri
03:00-04:00 Chant
04:00-05:00  Kibo
05:00-06:00 nufat

이런식의 값이 입력되면 금 토 따로 알파벳 ABC 순서대로 엔터 하나씩 해서 출력하는 프로그램을 만들어. python 이랑 streamlit 으로 만들거야.

금 칸이랑 토 칸이랑 따로 입력 받아서 각각
10:00-11:00 Liin
11:00-12:00 Kibo
12:00-01:00 Nufat
01:00-02:00 Techzin
02:00-03:00 Pebble
03:00-04:00 Giri
04:00-05:00  Kibo
05:00-06:00 nufat

이런식으로. 

python 이랑 streamlit 으로 만들 페이지는 이런식으로 구성해

맨 위에 
st.title("This is a title")
이걸로 DJ Lineup Automator 라고 맨 위에 제목을 써놔.

그리고 header 로 ‘금’ 해놓고 그 아래다가
txt = st.text_area(

)

이런식으로 공간을 만들어 놓고

그 아래에다가도 또 ‘토’ 해놓고 그 아래다가 저 text area 로 공간을 만들어놔. 

그리고 그 아래 
import streamlit as st

st.button("Reset", type="primary")
if st.button("Say hello"):
    st.write("Why hello there")
else:
    st.write("Goodbye")

이런걸로 Gimme the Lineup 이 버튼을 만들어서 그 버튼 아래 또 text area 가 생기게 해서 거기에 라인업을 출력해. 라인업은 금, 토 나눠서 시간은 다 빼고 금 토 각각 이름들의 첫글자 알파벳의 abc 순서대로 출력해. 이름은 전부다 대문자로 해서 출력해. 그리고 엔터 한번으로 줄바꿈 해서 출력해. 금 토 각각 나눠서 하는거야.
`}
        </code></pre>
      </main>
    </div>
  );
}
