import * as React from 'react';
import styles from './BuyerDetails.module.css';

export default class BuyerDetails extends React.PureComponent {
  render() {
    return (
      <section className={styles.root}>
        <span>Nabywca</span>
        <h3 className={styles['root__name']}>Arc Soft sp. z.o.o.</h3>
        <span>ul. Św. Mikołaja 8-10</span>
        <span>50-125 Wrocław</span>
        <span>Poland</span>
        <span><strong>NIP:</strong> 897 184 50 17</span>
      </section>
    )
  }
}