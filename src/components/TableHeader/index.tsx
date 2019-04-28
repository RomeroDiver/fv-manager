import * as React from 'react';
import cn from 'classnames';
import styles from './TableHeader.module.css';

interface ITableHeaderProps  {
  text: string,
  first?: boolean,
  last?: boolean,
  style?: Object
}

const TableHeader: React.FunctionComponent<ITableHeaderProps> = ({ first, last, text, style }) => {
  const classes = cn(styles.root, {
    [styles.rootFirst]: first,
    [styles.rootLast]: last
  });

  return (
    <div className={classes} style={style}>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default TableHeader;