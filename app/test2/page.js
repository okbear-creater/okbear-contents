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
          <h2 className={styles.title}>테스트2 야</h2>
          <h3 className={styles.subtitle}>파일명좀 잘 볼껄</h3>
        </div>

        <h1>Chat-GPT API와 Streamlit를 활용한 종결표현 변환 웹서비스</h1>
        
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F6c154695-5b32-46de-9972-a01bebde5959%2FUntitled.png?table=block&id=478c53f9-c71f-407b-9682-00b3acf5ad43&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Untitled.png" className={styles.contentImage} />
        
        <h2>프로젝트의 동기</h2>
        <p className={styles.bodyText}>
          챗지피티(ChatGPT)는 강력한 언어 모델로, 다양한 문장 변환 및 생성 작업을 수행할 수 있습니다. 하지만, 챗지피티의 UI를 직접 사용하는 것은 비전문가에게 다소 번거로울 수 있으며, 매번 같은 결과를 보장하지 않습니다. 또한, 사용자가 원하는 특정한 형태로 문장을 변환하는 것, 예를 들어 "~입니다." 체를 "~이다." 체로 바꾸는 작업은 간단해 보이지만, 실제로는 여러 번의 시도와 수정이 필요할 수 있습니다.
        </p>
        <p className={styles.bodyText}>
          이러한 문제를 해결하기 위해, 저희는 챗지피티의 기능을 활용하되, 사용자 친화적인 인터페이스를 제공하는 웹서비스를 개발하기로 결정했습니다. 목표는 사용자가 쉽게 문장의 종결 표현을 변환할 수 있는 도구를 제공하는 것이었습니다.
        </p>

        <h2>개발 과정</h2>
        <p className={styles.bodyText}>
          웹서비스의 개발은 Python 기반의 Streamlit 프레임워크와 OpenAI의 Chat-GPT API를 활용하여 이루어졌습니다. 프로젝트의 구조는 사용자로부터 입력을 받아, 해당 내용을 Chat-GPT API에 전달하고, 변환된 결과를 사용자에게 다시 보여주는 형태로 설계되었습니다.
        </p>
        <p className={styles.bodyText}>
          이 서비스는 사용자로부터 "~입니다." 체로 작성된 글을 받아, "~이다." 체로 변환해주는 과정을 간단하게 구현합니다. 사용자는 변환하고자 하는 글을 입력하고, '변환' 버튼을 클릭하기만 하면 됩니다. 변환 과정은 몇 초 내에 완료되며, 변환된 결과는 즉시 화면에 표시됩니다. 이 과정은 사용자에게 매우 직관적이며, 복잡한 설정이나 추가적인 가입 절차 없이 이루어집니다.
        </p>

        <h2>기술 구현의 핵심</h2>
        <p className={styles.bodyText}>
          서비스의 기술적 구현의 핵심은 사용자의 입력을 받아 이를 특정 프롬프트 형식에 맞춰 조합하는 과정입니다. 이렇게 조합된 프롬프트는 그 후 Chat-GPT 엔진으로 전송되어, 사용자가 원하는 형태의 문장으로 변환됩니다.
        </p>
        <p className={styles.bodyText}>
          사용자로부터 "~입니다." 체로 작성된 문장을 입력 받는 구현은 아래와 같습니다:
        </p>
        <pre className={styles.codeBlock}><code>
{`before = st.text_area("'~입니다.' 체의 글을 보고서 작성 시 주로 사용하는 '~이다.' 체로 변환해드립니다. 보고서체로 변환할 글을 붙여넣으세요.")`}
        </code></pre>
        <p className={styles.bodyText}>
          이 단계에서는 사용자에게 변환할 텍스트의 입력을 요청하며, 입력된 텍스트는 before 변수에 저장됩니다. 사용자가 제공한 입력은 변환 과정의 기초가 됩니다.
        </p>
        <p className={styles.bodyText}>
          변환 과정을 위한 코드는 다음과 같습니다:
        </p>
        <pre className={styles.codeBlock}><code>
{`after = chat_model.predict("'" + before + "' 이 문장들의 표현을 '~이다.' 로 바꿔줘. 예를 들어 '나는 학교에 갑니다.' 가 입력되었으면 '나는 학교에 간다.' 이런 식으로. 입력한 글 내용은 바꾸거나 수정하지 마.")`}
        </code></pre>
        <p className={styles.bodyText}>
          이 코드에서 중요한 점은, 사용자로부터 받은 입력(before)을 프롬프트 형식에 직접적으로 통합한다는 것입니다. 프롬프트 형식에 사용자의 입력을 끼워 넣음으로써, Chat-GPT 엔진은 구체적인 지시에 따라 "~이다." 체로의 문장 변환을 수행합니다. 이렇게 변환된 결과(after)는 사용자에게 반환되어, 입력한 내용이 원하는 형태로 즉각적으로 변환된 것을 확인할 수 있습니다.
        </p>
        <p className={styles.bodyText}>
          프롬프트 형식에 사용자의 입력을 끼워 넣는 이 방식은 Chat-GPT를 활용한 텍스트 변환의 효율성과 정확성을 높이는 데 중요한 역할을 합니다.
        </p>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fef2c18db-82a5-457e-b095-2546b2176aae%2FUntitled.png?table=block&id=31dfb37b-ba17-4c09-ba5a-52ddc3d36fbd&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Untitled.png" className={styles.contentImage} />
        <p className={styles.bodyText}>사용자가 텍스트를 넣고 변환 버튼을 누른 결과</p>

        <h2>사용자 경험 향상</h2>
        <p className={styles.bodyText}>
          이 웹서비스는 특히 보고서 작성이나 공식 문서 준비 시 흔히 요구되는 문체 변환 작업을 대상으로 합니다. 사용자는 보고서체로 변환할 글을 입력하는 것만으로 빠르고 편리하게 문장의 종결 표현을 바꿀 수 있습니다. 이 과정에서 직관적인 UI는 사용자가 쉽게 원하는 작업을 수행할 수 있도록 돕습니다.
        </p>

        <h2>한계와 도전</h2>
        <p className={styles.bodyText}>
          프로젝트를 진행하며 느낀 한계 중 하나는, 뒤에서 돌아가는 Chat-GPT 엔진의 출력에 일관성이 떨어질 때가 있다는 점입니다. 종결표현 변환이 주 목적임에도 불구하고, 때때로 변환된 문장에 불필요한 말이 추가되기도 했습니다. 이러한 문제는 AI 기반 서비스의 공통적인 도전 과제 중 하나이며, 지속적인 모델 튜닝과 사용자 피드백을 통해 해결해 나갈 예정입니다.
        </p>

        <h2>배포와 접근성</h2>
        <p className={styles.bodyText}>
          개발된 웹서비스는 Streamlit Cloud를 통해 배포되었습니다. Streamlit Cloud는 개발자가 만든 Streamlit 애플리케이션을 쉽게 배포하고 공유할 수 있는 플랫폼으로, 이를 통해 전 세계 누구나 인터넷 접속이 가능한 환경에서 이 서비스를 이용할 수 있게 되었습니다.
        </p>

        <h2>결론</h2>
        <p className={styles.bodyText}>
          "Chat-GPT API와 Streamlit를 활용한 종결표현 변환 웹서비스"는 AI 기술을 일상의 편리한 도구로 변환하는 데 시도한 사례입니다. 사용자 친화적인 인터페이스와 강력한 언어 변환 기능을 결합하여, 문서 작업의 효율성을 높이고자 하는 개인이나 조직에 유용한 자원이 될 것입니다. 앞으로도 사용자 피드백을 바탕으로 서비스를 개선하고, 더 많은 사람들이 이용할 수 있도록 홍보해 나갈 계획입니다. AI 기술의 발전이 우리 일상에 어떻게 긍정적인 영향을 미칠 수 있는지 보여주는 좋은 예로, 이 프로젝트는 그 가능성을 탐색하는 여정의 시작에 불과합니다.
        </p>
      </main>
    </div>
  );
}