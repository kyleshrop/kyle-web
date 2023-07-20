import React from 'react';
import { Link } from "react-router-dom";

import styles from './bioRoute.module.css';

export default function BioRoute() {
  return (
    <div>
        <h1 className={styles.header}>Bio</h1>
        <Link to="/">click me</Link>
    </div>
  );
}
