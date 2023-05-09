import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToParagraph = () => {
    const target = document.getElementById('targetParagraph');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/your-image.jpeg"
          alt="Your Image Description"
          layout="fill"
          className={styles.heroImage}
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Komplexní řešení, důvěra a odbornost.</h1>
        <p className={styles.paragraph}>Your description goes here.Your description goes here.Your description goes here.Your description goes here.Your description goes here.</p>
        <button className={styles.button} onClick={scrollToParagraph}>O NAŠÍ FIRMĚ</button>
      </div>
    </div>
  );
};



export default Hero;