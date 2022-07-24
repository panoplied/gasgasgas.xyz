import Image from 'next/image';
import styles from './background-image.module.css';

function BackgroundImage() {
  return (
    <div>
    <div className={styles.bgWrap}>
      <Image
        alt=""
        src="/images/bg.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    </div>
  );
}

export default BackgroundImage;