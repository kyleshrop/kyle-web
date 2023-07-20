import Image from 'next/image'
import styles from './indexRoute.module.css';

export default function Home() {
  return (
    <main>
      <div>
        <h1 className={styles.header}>Kyle Shropshire's Sample Web Project</h1>
        <p className={styles.description}>Continue to Bio</p>
        <Image
          src="/windrunner.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
