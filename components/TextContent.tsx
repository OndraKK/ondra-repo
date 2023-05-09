import React from 'react';
import styles from './TextContent.module.css';

const TextContent = () => {
  return (
    <div className={styles.textContent}>
      <div className={styles.leftContent}>
      
        <h2>O naší firmě</h2>
        <p id="targetParagraph">
          This is the target paragraph that will be scrolled to when the button in the Hero component is clicked. You can add more content here as needed.
        </p>
        <button className={styles.leftButton}>CHCI VYUŽÍT SLUŽBY</button>
        <div className={styles.mobileRightContent}>
        <p><span className={styles.number}>1.</span> First numbered paragraph text goes here.</p>
        <p><span className={styles.number}>2.</span> Second numbered paragraph text goes here.</p>
        <p><span className={styles.number}>3.</span> Third numbered paragraph text goes here.</p>
        </div>
        
      
      <div className={styles.logoTextWrapper}>
          <img className={styles.placeholderLogo} src="/path/to/placeholder-logo.png" alt="Logo" />
          <span>Small text with logo</span>
        </div>
        <div className={styles.contactSection}>
          <h3>Kontaktujte nás</h3>
          <p>Some text under the heading...</p>
          <button className={styles.callButton}>VOLAT NA +420 778 889 009</button>
          <button className={styles.emailButton}>NAPSAT NA E-MAIL INFO@ALL360.CZ</button>
        </div>
      </div>
      
      <div className={styles.rightContent}>
        <div className={styles.paragraphsWrapper}>
        <p><span className={styles.number}>1.</span> First numbered paragraph text goes here.</p>
        <p><span className={styles.number}>2.</span> Second numbered paragraph text goes here.</p>
        <p><span className={styles.number}>3.</span> Third numbered paragraph text goes here.</p>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default TextContent;