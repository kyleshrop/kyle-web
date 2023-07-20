import React from 'react';
import { Link } from "react-router-dom";

import styles from './indexRoute.module.css';

export default function IndexRoute() {
  return (
    <div>
      <h1 className={styles.header}>Kyle Shropshire's Sample Web Project</h1>
      <p className={styles.description}>Continue to Bio</p>
      <Link to="/bio">go to bio</Link>
    </div>
  );
}
