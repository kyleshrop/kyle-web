import Image from 'next/image'
import styles from './indexRoute.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1 className={styles.header}>Kyle Shropshires Sample Web Project</h1>
        <p className={styles.description}>Continue to Bio</p>
        <Image
          src="/windrunner.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
    <h1 className={styles.link}>
   <Link href="/bio"> Bio!</Link>
    </h1>      
    </div>
    </main>
  )
}
