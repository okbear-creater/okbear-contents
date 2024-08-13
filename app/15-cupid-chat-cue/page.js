'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function CupidChatCuePage() {
  return (
    <div className={styles.container}>
      <main className={`${styles.main} markdown`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>Cupid Chat Cue</h2>
          <h3 className={styles.subtitle}>Developing Cupid Chat Cue for Better, More Engaging Conversations</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fb0aa5502-30bc-4299-8d03-e517796517f9%2Fwfejpo_2.jpg?table=block&id=76eada27-978d-49a4-8d75-1ca49e4e2448&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="wfejpo 2" className={styles.contentImage} />
        
        <h1>Elevator Pitch</h1>
        <p className={styles.bodyText}>Cupid Chat Cue suggests perfect replies to keep your chats exciting.</p>
        
        <h1>App Description</h1>
        <p className={styles.bodyText}>Cupid Chat Cue is a service I created to help people keep their conversations with a crush or someone they’re interested in both engaging and smooth. With Cupid Chat Cue, awkward silences and lost interest are things of the past. When a user uploads a chat screenshot, the service analyzes the conversation’s context and provides tailored, witty, and charming replies that fit naturally into the ongoing dialogue.</p>
        <p className={styles.bodyText}>I used the Gemini API to make this possible. Through Google AI Studio, I trained Gemini on a vast array of social media interactions, books, and guides on dating conversations. This training process allowed me to fine-tune the model so that it not only understands the context of the uploaded chat but also offers responses that are specifically designed to keep the conversation lively and interesting. Instead of generic suggestions, the replies are personalized to match the tone, style, and flow of the user’s chat. Whether you’re trying to impress a new crush or keep a long-term connection exciting, Cupid Chat Cue ensures that you always know the right thing to say to keep the conversation sparkling.</p>
        
        <h1>How to Use</h1>
        <ol className={styles.customList}>
          <li>Capture a screenshot of your chat with someone you’re interested in when the conversation gets awkward.</li>
          <li>Upload the screenshot to Cupid Chat Cue.</li>
          <li>Click the “Get flirty ideas” button.</li>
          <li>Use the suggestions that appear below the button.</li>
        </ol>
        
        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F91d3e8c7-f247-4dc5-bb3f-3752188477ec%2Foifwe.jpg?table=block&id=a838cd3a-09ab-4bb2-b65a-fbae47ea6263&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="oifwe" className={styles.contentImage} />
        </figure>
        
        <h1>Links</h1>
        <p className={styles.bodyText}>
          <a href="https://cupid-chat-cue.vercel.app/" className={styles.hyperlink}>Cupid Chat Cue</a>
        </p>
        <p className={styles.bodyText}>
          <a href="https://github.com/okbear-creater/cupid-chat-cue" className={styles.hyperlink}>Git Hub</a>
        </p>
        <p className={styles.bodyText}>
          <a href="https://youtube.com/shorts/EotxBmSd1ds?feature=share" className={styles.hyperlink}>Demo Video</a>
        </p>
      </main>
    </div>
  );
}
