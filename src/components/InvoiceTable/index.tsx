import * as React from 'react';
import styles from './InvoiceTable.module.css';
import TableHeader from '../TableHeader';

export default class InvoiceTable extends React.PureComponent {
  render() {
    return (
      <div className={styles.root} >
        <div className={styles.header}>
          <TableHeader text="Lp" first style={{ marginLeft: -15, width: 60 }} />
          <TableHeader text="Nazwa" style={{ width: 150 }} />
          <TableHeader text="Jedn." style={{ width: 60 }} />
          <TableHeader text="Ilość" />
          <TableHeader text="Cena netto" />
          <TableHeader text="Wartość netto" />
          <TableHeader text="Stawka %" style={{ width: 90 }} />
          <TableHeader text="Podatek VAT" style={{ width: 100 }} />
          <TableHeader text="Kwota brutto" last style={{ marginRight: -15, width: 150 }} />
        </div>
        <div>
          <div className={styles.row}>
            <span style={{ width: 45, paddingLeft: 5 }}>1</span>
            <strong style={{ width: 140 }}>Usługi informatyczne</strong>
            <span style={{ width: 50, textAlign: 'center' }}>usł.</span>
            <span style={{ width: 50, textAlign: 'center' }}>1</span>
            <span style={{ width: 100, textAlign: 'center' }}>18,570.00</span>
            <span style={{ width: 130, paddingLeft: 10 }}>18,570.00</span>
            <span style={{ width: 90, paddingLeft: 5 }}>23%</span>
            <span style={{ width: 100 }}>4,271.10</span>
            <span style={{ width: 135, textAlign: 'center' }}>22,841.10</span>
          </div>
        </div>
      </div>
    )
  }
}