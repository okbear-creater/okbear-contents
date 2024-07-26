'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function NotionPage() {
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
          <h2 className={styles.title}>Notion 을 CMS 로 쓸때의 이미지 링크 만료 문제 해결 과정</h2>
          <h3 className={styles.subtitle}>Notion 을 쓰지만 Notion API 를 안쓰는 웹사이트 빌드</h3>
        </div>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F33327739-da79-4df0-a8a0-9bb06ae07c1b%2Foijwef.png?table=block&id=4bbf885f-2ca0-4ca2-aa0e-3f68a39e3497&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="weifj.png" className={styles.contentImage} />

        <h1>기존의 Notion API 활용시 문제점</h1>

        <h2>기존의 웹사이트 제작 과정</h2>

        <p className={styles.bodyText}>Next.js를 활용해 웹사이트를 제작하고, Notion API를 통해 Notion 페이지를 웹사이트에 연결했습니다. Notion 페이지에서 작성한 내용이 웹사이트에 자동으로 업데이트되는 방식이었으며, Notion에서 수정한 내용이 즉시 웹사이트에 반영되는 장점이 있었습니다.</p>

        <h2>이미지 링크 만료 문제</h2>

        <h3>문제 발견</h3>

        <p className={styles.bodyText}>Notion 페이지에 이미지를 삽입하면 해당 이미지의 고유한 링크가 생성됩니다. 그러나 이 링크는 1시간마다 변경되며, 이에 따라 1시간 후 링크가 변경되면 웹사이트에 이미지를 표시할 수 없는 문제가 발생했습니다. 웹사이트는 변경 전 링크를 사용하기 때문입니다.</p>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fce0b576b-1e0b-4435-97a8-76e548dad5f9%2FScreenshot_2024-07-14_at_11.49.45_PM.png?table=block&id=c2fc01b7-cba8-418e-be39-a5d2270a2ff3&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="업로드 1시간 후 링크 만료로 인해 이미지로 뜨지 않고, 파일 명으로 뜨는 문제" className={styles.contentImage} />
          <figcaption>업로드 1시간 후 링크 만료로 인해 이미지로 뜨지 않고, 파일 명으로 뜨는 문제</figcaption>
        </figure>

        <p className={styles.bodyText}>다음은 <a href="https://developers.notion.com/reference/file-object#notion-hosted-files" className={styles.hyperlink}>Notion API Reference 를 안내하는 Notion 공식 홈페이지</a>에 기재된 ''A file object corresponding to a file that has been uploaded to Notion'' 되었을때 어떻게 업로드 되는지에 대한 코드 예시입니다.</p>

        <pre className={styles.codeBlock}><code>
{`{
  "type": "file",
  "file": {
    "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b8b0713-dbd4-4962-b38b-955b6c49a573/My_test_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221024T205211Z&X-Amz-Expires=3600&X-Amz-Signature=208aa971577ff05e75e68354e8a9488697288ff3fb3879c2d599433a7625bf90&X-Amz-SignedHeaders=host&x-id=GetObject",
    "expiry_time": "2022-10-24T22:49:22.765Z"
  }
}`}
        </code></pre>

        <p className={styles.bodyText}>코드 중간에 <code className={styles.inlineCode}>Amz-Expires=3600</code> 가 나옵니다. 여기서 3600초 후에 만료됨을 알 수 있었습니다.</p>

        <h1>해결책 모색</h1>

        <h2>1차 해결책</h2>

        <p className={styles.bodyText}>Notion 사용 대신 Next.js로 웹페이지를 하나씩 코딩하고, 이미지를 imgur에 업로드하여 영구 링크를 페이지 코딩할때 사용하는 방법을 고려했습니다. 하지만 더 효율적인 방법을 찾기로 했습니다.</p>

        <h2>2차 해결책</h2>

        <p className={styles.bodyText}>코드에서 이미지 링크를 3600초 마다 새로 불러오게 했지만, 사용하고 있는 Vercel 에서 이미지 불러오기 제한이 한달에 1000개가 있어서 하루에 30개 정도의 이미지 밖에 갱신이 안됩니다. 24시간으로 나누면 한시간당 이미지 두장이 안됩니다. 따라서 이미지 링크가 만료되어도 1시간마다 자동으로 새 링크를 불러와서 이미지가 잘 웹페이지에 뜨게 할 수 있었지만, Vercel 의 갱신 개수 제한 때문에 패스했습니다.</p>

        <pre className={styles.codeBlock}><code>
{`import { Client } from '@notionhq/client';
import styles from "../page.module.css";

// 1시간마다 페이지 재생성
export const revalidate = 3600;

async function getNotionContent() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  
.
.
.`}
        </code></pre>

        <h2>3차 해결책</h2>

        <p className={styles.bodyText}>첫번째 해결책을 발전시킨 버전입니다. Notion 에서 페이지를 Export 할때 md 로 추출할 수 있는 기능을 활용해 보았습니다. 테스트로 Header1, 2, 3, 코드블럭, 불렛 포인트, 번호 붙이는 인덱싱 등 여러 형식을 포함시킨 페이지를 md 로 추출해 보았습니다. 각각의 형식에 따라 고유한 기호를 붙여서 md 로 잘 추출되는 것을 확인했습니다. 각각의 고유한 기호를 특정 css 스타일이 들어가는 자리의 표시로 이용해서, md 표시 대신 스타일을 붙이도록 하면, 페이지 코드를 쉽게 만들 수 있다는 생각이 들었습니다.</p>

        <p className={styles.bodyText}>하지만 이미지 삽입에 문제가 있었습니다. Notion 페이지를 다운받은 md 파일에는 이미지 영구 링크가 아닌 내장 메모리와 연결짓는 링크가 있었습니다. 그래서 Export 할때 같이 다운 받아지는 페이지 내 이미지파일들이 없기만 해도 md 를 열었을때 텍스트만 열리고 이미지가 열리지 않는 문제가 있었습니다. 이 문제는 해당 Notion 페이가 포함된 전체 Notion 페이지를 웹에 게시 해서 고정 링크가 생기도록 해서 문제를 해결했습니다. 전체 Notion 페이지를 웹에 게시하면 안에 있는 세부 페이지들도 같이 게시가 되어서 추후에 다른 세부 페이지를 만들어도 일일이 게시하지 않아도 됩니다.</p>

        <p className={styles.bodyText}>따라서, md 표시에 해당하는 css 스타일을 입히고, 내장 메모리로 연결되는 링크들을 영구 링크들로 바꿔주는 작업을 하고, page.js 의 고정적인 배너코드만 위에 고정해 놓으면 페이지 코드가 완성됩니다.</p>

        <h1>최종(3차) 해결책 실행</h1>

        <h2>미리 필요한 것</h2>

        <ul className={styles.customList}>
          <li>md 에 넣을 css</li>
          <li>Notion 페이지 웹 게시(이미지 영구 링크 추출용)</li>
          <li>고정 배너의 css 와 코드</li>
        </ul>

        <h2>실행</h2>

        <ol className={styles.customList}>
          <li>Notion 에서 올릴 내용 작성(이미지 포함) : 웹페이지에 업로드 하고 싶은 내용들을 Notion 페이지에 작성합니다. 이때의 Notion 페이지는 이미지 영구 링크를 위해 웹에 게시되어 있는 상태입니다.</li>
          <li>내용을 md로 다운로드, 영구 링크 복사 : Export 메뉴에서 md 형식으로 추출합니다.</li>
          <li>md 에 영구링크와 css className 을 넣은 page.js 코드 생성 : Claude 로 md 표시마다 어떤 스타일을 입힐지 AI 에게 학습시키고 추출합니다. 이때 미리 뽑아둔 이미지 영구 링크들도 같이 입력시켜서 링크 순서대로 이 영구 링크로 교체하라고 합니다. 다음은 프롬프트의 일부 입니다.</li>
        </ol>

        <pre className={styles.codeBlock}><code>
{`규칙은 이런걸 따라서. 

1. 상단에 스크롤 이벤트를 처리하는 React 컴포넌트 구조 추가
2. 제목 구조 변경:
    * 첫 번째 '#' 제거
    * 'Title:' 다음 내용에 className={styles.title} 적용
    * 'Subtitle:' 다음 내용에 className={styles.subtitle} 적용
3. 헤딩 태그 변환: '#', '##', '###'를 각각 <h1>, <h2>, <h3>로 변환
4. 본문 텍스트에 <p className={styles.bodyText}> 적용
5. <aside> 태그를 <blockquote className={styles.quote}> 로 변환
6. 이미지 처리:
    * 이미지 캡션 추가 (<figcaption>)
    * 이미지를 <figure> 태그로 감싸기
7. 인용문 > 를 <blockquote className={styles.quote}> 로 변환
8. 코드 블록을 <pre className={styles.codeBlock}><code> 로 감싸기
9. 리스트 변환:
    * 순서 없는 리스트 -를 <ul className={styles.customList}>로 변환
    * 순서 있는 리스트를 <ol className={styles.customList}>로 변환
10. 인라인 코드 \`\` 를 <code className={styles.inlineCode}> 로 변환
11. 링크를 <a href="..." className={styles.hyperlink}> 로 변환
12. 이미지 URL을 Notion 호스팅 URL로 교체

나머지 줄바꿈이나 이런건 마크다운꺼를 따라. 그거에 맞게. 마크다운 내용을 웹페이지로 옮기려는게 목적이야. 그리고 나중에 내가 마크다운을 줄게. 그걸 저 규칙에 맞게 page.js 코드로 줘.  그리고 이미지 링크는 내가 줄게. 순서대로 그 링크로 교체하면 돼.`}
</code></pre>

<ol className={styles.customList} start="4">
  <li>page.js 에 붙여넣기 : 생성된 코드를 page.js에 붙여넣습니다.</li>
  <li>Push and Deploy : GitHub 에 Push 하고, 홈페이지를 업데이트 합니다.</li>
</ol>

<h1>리뷰</h1>

<h2>장점</h2>

<ul className={styles.customList}>
  <li>API 쓰거나 env 같은 것 필요 없어서 간단함</li>
</ul>

<h2>단점</h2>

<ul className={styles.customList}>
  <li>Claude 를 사용했지만, 출력 텍스트 길이 제한이 있고, 제한 길이 이후 이어서 출력할때 코드블럭이 새로 만들어져서 UX 불편. 그래서 기존의 코드블럭에 이어서 출력 가능한 Chat-GPT 로 변경.</li>
  <li>영구 링크 복사단계, md 다운로드 단계, page.js 제작 단계가 추가됨</li>
  <li>Notion 수정 후 자동 업데이트 불가</li>
</ul>

<h2>미래</h2>

<ul className={styles.customList}>
  <li>AI 서비스를 대신하는 마크다운을 page.js 에 들어갈 코드로 바꿔주는 프로그램 제작 : 다음 이미지와 같이 js 만으로 만들어봤지만 일관성이 떨어져서 현재는 AI 서비스 게속 사용중, AI 서비스의 API 를 이용해 AI 서비스의 학습 능력을 이용해 봐야 겠다는 생각이 듦.</li>
</ul>

<figure>
  <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F599c7267-a2a1-4a04-9517-10a188ec150f%2FScreenshot_2024-07-09_at_3.41.43_AM.png?table=block&id=9e054c18-8bae-4aad-8921-90628e94cf92&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Screenshot 2024-07-09 at 3.41.43 AM.png" className={styles.contentImage} />
</figure>

<ul className={styles.customList}>
  <li>Notion 페이지 링크를 입력하면 모든 이미지 링크를 추출해주는 프로그램 제작 : Notion 페이지 링크를 입력하면 그 페이지 안에 있는 이미지들의 링크를 모두 제공해주어서 이미지 영구 링크 추출 단계 효율 증가</li>
</ul>
      </main>
    </div>
  );
}