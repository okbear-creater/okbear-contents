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
          <h2 className={styles.title}>실시간 주식 수익률 추적 웹사이트: Streamlit과 Yahoo Finance API</h2>
          <h3 className={styles.subtitle}>언제든지 정확하게 주식 수익률 추적 가능한 웹사이트</h3>
        </div>

        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Ff0226982-d006-46fe-b751-7b146a47b76f%2Fejwif.png?table=block&id=7ce938f1-8612-417d-b77d-914d78519415&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="실시간 주식 수익률 추적 애플리케이션" className={styles.contentImage} />

        <p className={styles.bodyText}>
          <a href="https://momstocktracker-updated-jun-2024-frjyimhn4tabb75vxsxbs3.streamlit.app/" className={styles.hyperlink}>수익률 추적 바로가기</a>
        </p>

        <p className={styles.bodyText}>
          <a href="https://github.com/okbear-creater/momstocktracker-updated-Jun-2024" className={styles.hyperlink}>GitHub Repo</a>
        </p>

        <p className={styles.bodyText}>
          이 프로그램은 Streamlit과 Yahoo Finance API를 활용하여 주식 수익률을 실시간으로 추적하는 웹사이트 입니다. 특히, 엄마의 주식 포트폴리오를 관리하기 위해 설계되었으며, 주식의 현재 가격과 환율을 자동으로 계산하여 손익을 시각적으로 보여줍니다. 아래는 프로그램의 상세한 설명입니다.
        </p>

        <h2>제작 프로세스</h2>
        <ol className={styles.customList}>
          <li><strong>Python으로 원하는 결과가 나오게 로직을 구성합니다.</strong>
            <ul className={styles.customList}>
              <li>주식의 현재 가격과 평균 매입가를 이용해 수익률을 계산하는 로직을 작성합니다.</li>
              <li>USD-KRW 환율을 가져와서 계산에 사용합니다.</li>
            </ul>
          </li>
          <li><strong>Streamlit API Reference에서 적절한 UI 요소를 가져옵니다.</strong>
            <ul className={styles.customList}>
              <li><code className={styles.inlineCode}>st.title</code>과 <code className={styles.inlineCode}>st.write</code>를 사용하여 제목과 설명을 표시합니다.</li>
              <li><code className={styles.inlineCode}>st.metric</code>을 사용하여 주식 수익률을 시각적으로 표시합니다.</li>
              <li><code className={styles.inlineCode}>st.columns</code>를 사용하여 여러 주식의 수익률을 한 화면에 보기 좋게 배치합니다.</li>
            </ul>
          </li>
          <li><strong>Chat-GPT를 이용해 Python로직에 UI 요소를 적용시킨 전체 코드를 만듭니다.</strong>
            <ul className={styles.customList}>
              <li>'이 기능은 이 ui 요소를 사용해서 하라' 라고 하며 Chat-GPT 를 이용해 UI 요소를 적용시킨 전체 코드를 만듭니다.</li>
            </ul>
          </li>
          <li>Streamlit Cloud 를 통해 배포합니다.</li>
        </ol>

        <h2>3번 과정 프롬프트 예시</h2>
        <pre className={styles.codeBlock}><code>
{`import streamlit as st
import yfinance as yf
import requests

.
.
.

이 코드에서 

col1, col2 = st.columns(2)
col1.metric("Temperature", "70 °F", "1.2 °F")
col2.metric("Wind", "9 mph", "-8%")

이거를 활용해서 웹사이트의 UI 가 나타나게 수정해. col1.metric 의  Temperature 에 AAPL, 70 °F 에 수익/손실 가격, 1.2 °F 에 수익률(%) 가 나오고, 그아래 col2.metric 의 Wind 에 NVDA, 9 mph 에 수익/손실 가격, -8% 에 수익률(%) 이 나오게.`}
        </code></pre>

        <pre className={styles.codeBlock}><code>
{`import streamlit as st
import yfinance as yf
import requests

.
.
.

# 총 수익 및 손실 표시
if total_cost > 0:  # 0으로 나누는 것을 방지
    total_profit_or_loss = total_current_value - total_cost
    total_profit_or_loss_percentage = (total_profit_or_loss / total_cost) * 100
    col3.metric("TOTAL", f"{int(total_profit_or_loss):,}원", f"{total_profit_or_loss_percentage:.2f}%")
else:
    st.write("## 총계산 정보가 충분하지 않습니다.")

이 코드에서 col1.metric 이랑 col1.metric 에서 각각 APPL 이라 NVDA 뒤에 각각의 yahoo finance 에서 가져온 현재 가격을 import requests 로 얻은 현재 환율 반영해서 ₩ 으로 환산해서 추가해서 보이게 코드를 수정해.`}
        </code></pre>

        <h2>프로그램 실행 방법</h2>
        <ol className={styles.customList}>
          <li>터미널에서 다음 명령어를 입력하여 Streamlit 을 실행합니다.
            <pre className={styles.codeBlock}><code>
              streamlit run main3.py
            </code></pre>
          </li>
          <li>필요한 패키지를 설치합니다.
            <pre className={styles.codeBlock}><code>
              pip install streamlit yfinance requests
            </code></pre>
          </li>
        </ol>

        <h2>코드 설명</h2>

        <h3>라이브러리 임포트</h3>
        <pre className={styles.codeBlock}><code>
{`import streamlit as st
import yfinance as yf
import requests`}
        </code></pre>
        <ul className={styles.customList}>
          <li><code className={styles.inlineCode}>streamlit</code>: GUI 를 활용하기 위한 라이브러리.</li>
          <li><code className={styles.inlineCode}>yfinance</code>: 야후 파이낸스에서 주식 데이터를 가져오기 위한 라이브러리.</li>
          <li><code className={styles.inlineCode}>requests</code>: 환율 정보를 가져오기 위한 HTTP 요청 라이브러리.</li>
        </ul>

        <h3>주식 현재 가격 가져오기</h3>
        <pre className={styles.codeBlock}><code>
{`def fetch_current_price(stock_symbol):
    ticker = yf.Ticker(stock_symbol)
    todays_data = ticker.history(period='1d')
    return todays_data['Close'][0] if not todays_data.empty else None`}
        </code></pre>
        <p className={styles.bodyText}>주어진 주식 심볼에 대한 현재 가격을 야후 파이낸스에서 가져옵니다.</p>

        <h3>수익 및 손실 계산</h3>
        <pre className={styles.codeBlock}><code>
{`def calculate_profit_or_loss(average_price, current_price, shares):
    total_cost = average_price * shares
    current_value = current_price * shares
    profit_or_loss = current_value - total_cost
    profit_or_loss_percentage = (profit_or_loss / total_cost) * 100
    return profit_or_loss, profit_or_loss_percentage`}
        </code></pre>
        <p className={styles.bodyText}>평균 매입가, 현재 가격, 보유 주식 수를 바탕으로 수익 및 손실과 그 비율을 계산합니다.</p>

        <h3>실시간 환율 정보 가져오기</h3>
        <pre className={styles.codeBlock}><code>
{`def get_exchange_rate():
    url = 'https://api.exchangerate-api.com/v4/latest/USD'
    response = requests.get(url)
    data = response.json()
    return data['rates']['KRW']`}
        </code></pre>
        <p className={styles.bodyText}>실시간 USD-KRW 환율 정보를 API를 통해 가져옵니다.</p>

        <h3>Streamlit</h3>
        <pre className={styles.codeBlock}><code>
{`st.title('주식 수익률 계산기')
exchange_rate = get_exchange_rate()
st.write(f"## 현재 USD-KRW 환율: {int(exchange_rate):,}원")`}
        </code></pre>
        <p className={styles.bodyText}>웹사이트 제목과 현재 환율 정보를 표시합니다.</p>

        <h3>주식 정보 설정 및 수익 계산</h3>
        <pre className={styles.codeBlock}><code>
{`stocks = {
    'AAPL': {'average_price': 246579, 'shares': 34},
    'NVDA': {'average_price': 105981, 'shares': 60}
}`}
        </code></pre>
        <p className={styles.bodyText}>주식 심볼, 평균 매입가, 보유 주식 수를 설정합니다.</p>

        <h3>주식 데이터 가져오기 및 수익 계산</h3>
        <pre className={styles.codeBlock}><code>
{`total_cost = 0
total_current_value = 0
profit_loss_display_data = []

for stock_symbol, info in stocks.items():
    current_price_usd = fetch_current_price(stock_symbol)
    if current_price_usd:
        current_price_krw = current_price_usd * exchange_rate
        profit_or_loss, profit_or_loss_percentage = calculate_profit_or_loss(info['average_price'], current_price_krw, info['shares'])
        profit_loss_display_data.append(
            (stock_symbol, f"{stock_symbol} ({int(current_price_krw):,}원)", int(profit_or_loss), f"{profit_or_loss_percentage:.2f}%")
        )
        total_cost += info['average_price'] * info['shares']
        total_current_value += current_price_krw * info['shares']
    else:
        st.write(f"### {stock_symbol}의 가격 정보를 가져오는데 실패했습니다.")`}
        </code></pre>
        <p className={styles.bodyText}>각 주식의 현재 가격을 가져와 환율을 적용한 후 수익 및 손실을 계산하고, 이를 UI에 표시할 데이터를 준비합니다.</p>

        <h3>수익률 메트릭 UI 구성</h3>
        <pre className={styles.codeBlock}><code>
{`col1, col2, col3 = st.columns(3)

if len(profit_loss_display_data) >= 1:
    col1.metric(profit_loss_display_data[0][1], f"{profit_loss_display_data[0][2]:,}원", profit_loss_display_data[0][3])

if len(profit_loss_display_data) >= 2:
    col2.metric(profit_loss_display_data[1][1], f"{profit_loss_display_data[1][2]:,}원", profit_loss_display_data[1][3])

if total_cost > 0:
    total_profit_or_loss = total_current_value - total_cost
    total_profit_or_loss_percentage = (total_profit_or_loss / total_cost) * 100
    col3.metric("TOTAL", f"{int(total_profit_or_loss):,}원", f"{total_profit_or_loss_percentage:.2f}%")
else:
    st.write("## 총계산 정보가 충분하지 않습니다.")`}
        </code></pre>
        <p className={styles.bodyText}>주식별 수익률과 총 수익률을 UI에 표시합니다.</p>

        <p className={styles.bodyText}>
          이 프로그램은 간단하게 주식 수익률을 실시간으로 추적하고 시각화하여 편리하게 확인할 수 있게 도와줍니다. Streamlit을 사용하여 손쉽게 웹사이트를 구축할 수 있으며, yfinance와 requests 라이브러리를 통해 필요한 데이터를 자동으로 가져와 계산합니다.
        </p>
      </main>
    </div>
  );
}