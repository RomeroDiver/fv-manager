import * as React from 'react';
import styles from './InvoiceDates.module.css';

export default () => (
  <div className={styles.root}>
    <div>
      <strong>Miejscowość i data:</strong>
      <span>Wrocław, 30.04.2019</span>
    </div>
    <div>
      <strong>Data wykonania usługi:</strong>
      <span>30.04.2019</span>
    </div>
  </div>
)