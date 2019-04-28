import * as React from 'react';
import cn from 'classnames';
import styles from './InvoiceTotal.module.css';

export default () => (
  <div className={styles.root}>
    <div className={styles.row}>
      <span>Razem netto</span>
      <span>18,570.00</span>
    </div>
    <div className={styles.row}>
      <span>VAT 23%</span>
      <span>4,271.10</span>
    </div>
    <div className={cn(styles.row, styles.rowTotal)}>
      <div className={styles.totalLabel}>
        <div>Razem brutto</div>
      </div>
      <div className={styles.totalValue}>
        <div>22,841.10</div>
      </div>
    </div>
  </div>
)
