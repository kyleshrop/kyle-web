import React from 'react';
import Link from 'next/link';

import styles from './bioRoute.module.css';

export default function BioRoute() {
  return (
    <main>
        <h1 className={styles.header}>Bio</h1>
        <h2 className={styles.link}>
          <Link href="/">Back to home.</Link>
        </h2>
    </main>
  );
}
