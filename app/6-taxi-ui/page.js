import { Client } from '@notionhq/client';
import styles from "../page.module.css";

// 1시간마다 페이지 재생성
export const revalidate = 3600;

async function getNotionContent() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  try {
    const blocks = await notion.blocks.children.list({ 
      block_id: '671ad89c059a48d1b08963d3c73de9c5' 
    });
    
    let content = [];
    let currentList = null;
    
    for (const block of blocks.results) {
      switch(block.type) {
        case 'paragraph':
        case 'heading_1':
        case 'heading_2':
        case 'heading_3':
          content.push(await processBlock(block, notion));
          currentList = null;
          break;
        case 'numbered_list_item':
        case 'bulleted_list_item':
          if (!currentList || currentList.type !== block.type) {
            currentList = { type: block.type, items: [] };
            content.push(currentList);
          }
          currentList.items.push(await processBlock(block, notion));
          break;
        case 'image':
        case 'quote':
        case 'callout':
        case 'code':
        case 'bookmark':
          content.push(await processBlock(block, notion));
          currentList = null;
          break;
      }
    }

    return content;
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    return [{ type: 'error', text: "Error loading content: " + error.message }];
  }
}

async function processBlock(block, notion) {
  let processedBlock = {
    type: block.type,
    text: block[block.type].rich_text?.map(text => ({
      content: text.plain_text,
      link: text.href,
      annotations: text.annotations
    })) || []
  };

  switch (block.type) {
    case 'numbered_list_item':
      processedBlock.number = block.numbered_list_item.number;
      break;
    case 'image':
      processedBlock.url = block.image.file?.url || block.image.external?.url;
      break;
    case 'callout':
      processedBlock.icon = block.callout.icon?.emoji;
      break;
    case 'code':
      processedBlock.language = block.code.language;
      processedBlock.text = block.code.rich_text.map(text => text.plain_text).join('');
      break;
    case 'bookmark':
      processedBlock.title = block.bookmark.caption?.[0]?.plain_text || '';
      processedBlock.description = '';
      processedBlock.url = block.bookmark.url;
      break;
  }

  if (block.has_children) {
    const childBlocks = await notion.blocks.children.list({ block_id: block.id });
    processedBlock.children = await Promise.all(childBlocks.results.map(childBlock => processBlock(childBlock, notion)));
  }

  return processedBlock;
}

// 클라이언트 컴포넌트
const ClientComponent = ({ content }) => {
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

  let topLevelNumberedIndex = 0;

  const renderBlock = (block, isTopLevel = true) => {
    switch(block.type) {
      case 'heading_1':
        return <h1 key={block.id}>{renderText(block.text)}</h1>;
      case 'heading_2':
        return <h2 key={block.id}>{renderText(block.text)}</h2>;
      case 'heading_3':
        return <h3 key={block.id}>{renderText(block.text)}</h3>;
      case 'paragraph':
        return <p key={block.id}>{renderText(block.text)}</p>;
      case 'numbered_list_item':
      case 'bulleted_list_item':
        if (isTopLevel) {
          topLevelNumberedIndex++;
        }
        return (
          <li key={block.id} className={block.type === 'numbered_list_item' ? styles.numberedListItem : styles.bulletedListItem}>
            {block.type === 'numbered_list_item' && isTopLevel && 
              <span className={styles.listNumber}>{topLevelNumberedIndex}. </span>
            }
            {renderText(block.text)}
            {block.children && block.children.length > 0 && (
              <ul className={styles.nestedList}>
                {block.children.map((child, index) => (
                  <li key={index} className={styles.nestedListItem}>
                    {renderBlock(child, false)}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      case 'image':
        return (
          <div key={block.id} className={styles.imageContainer}>
            <img src={block.url} alt="Notion image" className={styles.image} />
          </div>
        );
      case 'quote':
        return <blockquote key={block.id} className={styles.quote}>{renderText(block.text)}</blockquote>;
      case 'callout':
        return (
          <div key={block.id} className={styles.callout}>
            <span className={styles.calloutIcon}>{block.icon}</span>
            <div>{renderText(block.text)}</div>
          </div>
        );
      case 'code':
        return (
          <div key={block.id} className={styles.codeBlockWrapper}>
            <pre className={styles.codeBlock}>
              <code className={`language-${block.language}`}>{block.text}</code>
            </pre>
          </div>
        );
      case 'bookmark':
        return (
          <a key={block.id} href={block.url} className={styles.bookmark} target="_blank" rel="noopener noreferrer">
            <div className={styles.bookmarkTitle}>{block.title}</div>
            <div className={styles.bookmarkDescription}>{block.description}</div>
            <div className={styles.bookmarkLink}>{block.url}</div>
          </a>
        );
      default:
        return <p key={block.id}>{renderText(block.text)}</p>;
    }
  };

  return (
    <div className={styles.container}>
      <a href="https://dzerof-home.vercel.app/" className={styles.topBannerLink}>
        <div className={styles.topBanner}>
          <div className={styles.scrollingImages}>
            {[...Array(8)].map((_, i) => (
              <img key={i} src="https://i.imgur.com/nwUHd9n.png" alt="Scrolling Logo" className={styles.scrollImage} />
            ))}
          </div>
        </div>
      </a>
      <main className={styles.main}>
        <div className={styles.notionContent}>
          {content.map((block, index) => {
            if (block.type === 'numbered_list_item' || block.type === 'bulleted_list_item') {
              topLevelNumberedIndex = 0;
            }
            return (
              <div key={index}>
                {Array.isArray(block.items) 
                  ? <ul className={block.type === 'numbered_list_item' ? styles.numberedList : styles.bulletedList}>
                      {block.items.map((item, itemIndex) => renderBlock(item, true))}
                    </ul>
                  : renderBlock(block, true)
                }
              </div>
            );
          })}
        </div>
        <div className={styles.bottomSpace}></div>
      </main>
    </div>
  );
};

// 메인 페이지 컴포넌트 (서버 컴포넌트)
export default async function JTBCPage() {
  const pageContent = await getNotionContent();
  return <ClientComponent content={pageContent} />;
}