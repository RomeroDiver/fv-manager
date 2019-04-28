import * as React from 'react';
import styles from './Payment.module.css';

export default () => (
  <div className={styles.root}>
    <div className={styles.row}>
      <strong>Sposób zapłaty:</strong>
      <span>przelew</span>
    </div>
    <div className={styles.row}>
      <strong>Konto bankowe:</strong>
      <span>32 1160 2202 0000 0002 7575 1052</span>
    </div>
    <div className={styles.row}>
      <strong>Razem do zapłaty:</strong>
      <span>22,841.10 PLN</span>
    </div>
    <div className={styles.row}>
      <strong>Słownie:</strong>
      <span>dwadzieścia dwa tysiące osiemset czterdzieści jeden złotych 10/100 groszy</span>
    </div>
  </div>
)