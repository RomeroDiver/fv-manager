import * as React from 'react';
import styles from './SellerDetails.module.css';

export default () => (
  <section className={styles.root}>
    <span>Sprzedawca</span>
    <h3 className={styles['root__name']}>Pylypets Roman Consulting</h3>
    <span>ul. Krakowska 84A/96</span>
    <span>50-427 Wrocław</span>
    <span>Poland</span>
    <span><strong>NIP:</strong> 712 319 65 53</span>
  </section>
)