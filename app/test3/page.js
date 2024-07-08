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
          <h2 className={styles.title}>이건 테스트야</h2>
          <h3 className={styles.subtitle}>테스트라고</h3>
        </div>

        <h1>북악관 엘리베이터 최적 경로 계산기: Streamlit과 Python을 활용한 효율적 이동 경로 탐색</h1>
        
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Faa19498e-65cf-4902-9a22-1a11472afc96%2Fwefiojweofji.jpg?table=block&id=1f97cb08-b7c6-402b-9e39-4b577b64995b&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="wefiojweofji.jpg" className={styles.contentImage} />
        
        <p className={styles.bodyText}><a href="https://efficient-ev-route-nav.streamlit.app/" className={styles.hyperlink}>with st emoji about image online</a></p>
        <p className={styles.bodyText}><a href="https://github.com/okbear-creater/efficient-ev-route-nav" className={styles.hyperlink}>https://github.com/okbear-creater/efficient-ev-route-nav</a></p>
        <p className={styles.bodyText}><a href="http://youtube.com" className={styles.hyperlink}>이건 하이퍼링크</a></p>

        <h2>문제 인식식</h2>
        <p className={styles.bodyText}>보통 고층 건물의 엘리베이터는 고층부와 저층부로 나누어지거나 짝수층과 홀수층으로 나뉘지만, 국민대학교 북악관의 엘리베이터는 매우 복잡하게 나누어져 있습니다. 엘리베이터 5개가 불규칙하게 다양한 층에 멈추는데, 그 층들이 아래와 같습니다:</p>
        <ul className={styles.customList}>
          <li><code className={styles.inlineCode}>left_elevators = [[1, 5, 9], [1, 7, 12, 13, 14, 15]]</code></li>
          <li><code className={styles.inlineCode}>right_elevators = [[1, 11], [1, 5, 8], [1, 6, 10]]</code></li>
        </ul>
        <p className={styles.bodyText}>이처럼 복잡한 엘리베이터 배치 때문에 층간 이동 시 어떻게 엘리베이터를 갈아타고 계단을 중간에 섞어가며 이동해야 가장 효율적인지 알기가 매우 어렵습니다. 이 문제를 해결하기 위해 본 프로그램을 설계했습니다.</p>

        <h2>프로그램 작성 과정</h2>
        <ol className={styles.customList}>
          <li><strong>Python으로 원하는 결과가 나오게 로직을 구성합니다.</strong>
            <ul className={styles.customList}>
              <li>엘리베이터 층수와 사용자가 출발 층수 및 도착 층수를 입력받아 최적 경로를 계산하는 로직을 작성합니다.</li>
              <li>피로도 점수를 기준으로 경로를 탐색합니다. 피로도 점수는 엘리베이터로 이동 시 0점, 계단을 오를 때는 1.5점, 내려갈 때는 1점을 부여하여 계산합니다.</li>
            </ul>
          </li>
          <li><strong>Streamlit API Reference에서 적절한 UI 요소를 가져옵니다.</strong>
            <ul className={styles.customList}>
              <li><code className={styles.inlineCode}>st.title</code>과 <code className={styles.inlineCode}>st.write</code>를 사용하여 제목과 설명을 표시합니다.</li>
              <li><code className={styles.inlineCode}>st.slider</code>를 사용하여 사용자의 출발 층수와 도착 층수를 입력받습니다.</li>
              <li><code className={styles.inlineCode}>st.button</code>을 사용하여 경로 계산을 시작합니다.</li>
              <li><code className={styles.inlineCode}>st.spinner</code>를 사용하여 계산 중임을 표시합니다.</li>
              <li><code className={styles.inlineCode}>st.metric</code>을 사용하여 경로와 피로도 점수를 시각적으로 표시합니다.</li>
            </ul>
          </li>
          <li><strong>Chat-GPT를 이용해 UI 요소를 적용시킨 전체 코드를 만듭니다.</strong></li>
        </ol>

        <h2>코드 설명</h2>
        <ol className={styles.customList}>
          <li><strong>엘리베이터 정보 정의</strong>
            <pre className={styles.codeBlock}><code>
{`left_elevators = [[1, 5, 9], [1, 7, 12, 13, 14, 15]]
right_elevators = [[1, 11], [1, 5, 8], [1, 6, 10]]
elevators = left_elevators + right_elevators`}
            </code></pre>
            <p className={styles.bodyText}>북악관의 엘리베이터 운행 층 정보를 정의합니다.</p>
          </li>
          <li><strong>피로도 점수 계산 함수</strong>
            <pre className={styles.codeBlock}><code>
{`def calculate_fatigue(steps, going_up=True):
    if going_up:
        return steps * 1.5
    else:
        return steps`}
            </code></pre>
            <p className={styles.bodyText}>계단을 오를 때와 내릴 때의 피로도 점수를 계산합니다.</p>
          </li>
          <li><strong>최적 경로 탐색 함수</strong>
            <pre className={styles.codeBlock}><code>
{`def find_optimal_path_with_transfers(start, end):
    ...`}
            </code></pre>
            <p className={styles.bodyText}>사용자가 입력한 출발 층과 도착 층을 기반으로 최적 경로를 탐색합니다.</p>
            <p className={styles.bodyText}>재귀적으로 가능한 모든 경로를 탐색하여 피로도 점수가 가장 낮은 경로를 찾습니다.</p>
          </li>
          <li><strong>Streamlit 인터페이스 설정</strong>
            <pre className={styles.codeBlock}><code>
{`st.title("북악관 엘베 최적 경로 계산기 ⛰️ 🏢 🛗")`}
            </code></pre>
            <p className={styles.bodyText}>애플리케이션의 제목을 설정합니다.</p>
          </li>
          <li><strong>Expander 사용하여 팝업 형태로 정보 제공</strong>
            <pre className={styles.codeBlock}><code>
{`with st.expander("이 프로그램은 대체 뭔가요?"):
    ...`}
            </code></pre>
            <p className={styles.bodyText}>프로그램 설명을 팝업 형태로 제공합니다.</p>
          </li>
          <li><strong>사용자 입력 받기</strong>
            <pre className={styles.codeBlock}><code>
{`start_floor = st.slider("출발 층", 1, 15, 1)
end_floor = st.slider("도착 층", 1, 15, 1)`}
            </code></pre>
            <p className={styles.bodyText}>사용자의 출발 층수와 도착 층수를 슬라이더를 통해 입력받습니다.</p>
          </li>
          <li><strong>최적 경로 계산 및 결과 출력</strong>
            <pre className={styles.codeBlock}><code>
{`if st.button("최적 경로 계산"):
    ...`}
            </code></pre>
            <p className={styles.bodyText}>버튼을 눌러 최적 경로를 계산하고, 결과를 시각적으로 출력합니다.</p>
            <p className={styles.bodyText}><code className={styles.inlineCode}>st.metric</code>을 사용하여 경로와 피로도 점수를 시각적으로 표시합니다.</p>
          </li>
        </ol>

        <h2>결론</h2>
        <p className={styles.bodyText}>이 프로그램은 복잡한 엘리베이터 배치를 가진 고층 건물에서 효율적으로 이동할 수 있는 최적 경로를 제공합니다. Streamlit을 사용하여 간편한 웹 인터페이스를 구축하였으며, 피로도 점수를 통해 사용자가 가장 덜 피곤하게 이동할 수 있는 경로를 계산합니다. 이를 통해 사용자들은 보다 편리하고 효율적으로 건물 내에서 이동할 수 있습니다.</p>
        <p className={styles.bodyText}>프로그램을 실행하고 최적의 이동 경로를 찾아보세요. 고층 건물 내에서의 이동이 훨씬 수월해질 것입니다.</p>
      </main>
    </div>
  );
}