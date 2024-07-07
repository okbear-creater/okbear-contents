import { Client } from '@notionhq/client';
import dynamic from 'next/dynamic';
import styles from "../page.module.css";

async function getNotionContent() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  try {
    const blocks = await notion.blocks.children.list({ 
      block_id: 'b36553f9865d4b0f9cb46728543b28a5' 
    });
    
    let content = [];
    blocks.results.forEach(block => {
      switch(block.type) {
        case 'paragraph':
        case 'heading_1':
        case 'heading_2':
        case 'heading_3':
          content.push({
            type: block.type,
            text: block[block.type].rich_text.map(text => {
              return {
                content: text.plain_text,
                link: text.href,
                annotations: text.annotations
              }
            })
          });
          break;
        case 'image':
          content.push({
            type: 'image',
            url: block.image.file?.url || block.image.external?.url
          });
          break;
        case 'quote':
          content.push({
            type: 'quote',
            text: block.quote.rich_text.map(text => {
              return {
                content: text.plain_text,
                link: text.href,
                annotations: text.annotations
              }
            })
          });
          break;
        case 'callout':
          content.push({
            type: 'callout',
            icon: block.callout.icon?.emoji,
            text: block.callout.rich_text.map(text => {
              return {
                content: text.plain_text,
                link: text.href,
                annotations: text.annotations
              }
            })
          });
          break;
        case 'code':
          content.push({
            type: 'code',
            text: block.code.rich_text.map(text => text.plain_text).join('')
          });
          break;
        case 'bookmark':
          content.push({
            type: 'bookmark',
            title: block.bookmark.title,
            description: block.bookmark.description,
            url: block.bookmark.url
          });
          break;
      }
    });

    return content;
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    return [{ type: 'error', text: "Error loading content: " + error.message }];
  }
}

const ClientComponent = dynamic(() => 
  Promise.resolve(function ClientComponent({ content }) {
    'use client';
    
    const renderText = (text) => {
      return text.map((part, index) => {
        let renderedContent = part.content;
        
        if (part.annotations?.code) {
          renderedContent = <span key={index} className={styles.inlineCode}>{part.content}</span>;
        }
        
        if (part.link) {
          renderedContent = (
            <a key={index} href={part.link} className={styles.link} target="_blank" rel="noopener noreferrer">
              {renderedContent}
            </a>
          );
        }
        
        return renderedContent;
      });
    };

    return (
      <div className={styles.container}>
        <a href="https://dzerof-home.vercel.app/" className={styles.topBannerLink}>
          <div className={styles.topBanner}>
            <div className={styles.scrollingImages}>
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
              <img src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
            </div>
          </div>
        </a>
        <main className={styles.main}>
          <div className={styles.notionContent}>
            {content.map((block, index) => {
              switch(block.type) {
                case 'heading_1':
                  return <h1 key={index}>{renderText(block.text)}</h1>;
                case 'heading_2':
                  return <h2 key={index}>{renderText(block.text)}</h2>;
                case 'heading_3':
                  return <h3 key={index}>{renderText(block.text)}</h3>;
                case 'paragraph':
                  return <p key={index}>{renderText(block.text)}</p>;
                case 'image':
                  return (
                    <div key={index} className={styles.imageContainer}>
                      <img src={block.url} alt="Notion image" className={styles.image} />
                    </div>
                  );
                case 'quote':
                  return <blockquote key={index} className={styles.quote}>{renderText(block.text)}</blockquote>;
                case 'callout':
                  return (
                    <div key={index} className={styles.callout}>
                      <span className={styles.calloutIcon}>{block.icon}</span>
                      <div>{renderText(block.text)}</div>
                    </div>
                  );
                case 'code':
                  return (
                    <div key={index} className={styles.codeBlockWrapper}>
                      <pre className={styles.codeBlock}>
                        <code>{block.text}</code>
                      </pre>
                    </div>
                  );
                case 'bookmark':
                  return (
                    <a key={index} href={block.url} className={styles.bookmark} target="_blank" rel="noopener noreferrer">
                      <div className={styles.bookmarkTitle}>{block.title}</div>
                      <div className={styles.bookmarkDescription}>{block.description}</div>
                      <div className={styles.bookmarkLink}>{block.url}</div>
                    </a>
                  );
                default:
                  return <p key={index}>{renderText(block.text)}</p>;
              }
            })}
          </div>
          <div className={styles.bottomSpace}></div>
        </main>
      </div>
    );
  }),
  { ssr: false }
);

export default async function JTBCPage() {
  const pageContent = await getNotionContent();

  return <ClientComponent content={pageContent} />;
}
