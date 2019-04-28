import * as React from 'react';
import styles from './InvoiceTitle.module.css';

export default class InvoiceTitle extends React.PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.heading}>Faktura</h1>
        <span>NR 05/2019</span>
      </div>
    )
  }
}