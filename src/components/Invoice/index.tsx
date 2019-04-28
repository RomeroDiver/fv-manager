import * as React from 'react';
import InvoiceTitle from '../InvoiceTitle';
import styles from './Invoice.module.css';
import SellerDetails from '../SellerDetails';
import BuyerDetails from '../BuyerDetails';
import InvoiceDates from '../InvoiceDates';
import InvoiceTable from '../InvoiceTable';
import InvoiceTotal from '../InvoiceTotal';
import Payment from '../Payment';

export default class Invoice extends React.PureComponent {
  render() {
    return (
      <article className={styles.root}>
        <InvoiceTitle />
        <InvoiceDates />
        <BuyerDetails />
        <SellerDetails />
        <InvoiceTable />
        <Payment />
        <InvoiceTotal />
      </article>
    )
  }
}