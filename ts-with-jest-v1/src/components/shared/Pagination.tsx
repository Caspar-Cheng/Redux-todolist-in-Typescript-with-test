/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 5,
    margin: 0,
    display: 'flex',
  },
  button: {
    border: 1,
    borderRadius: 3,
    margin: 1,
  },
});

interface PaginationProps {
  total: number;
  onSelected: (n: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  onSelected,
  total,
}: PaginationProps) => {
  const classes = useStyles();
  const { items } = usePagination({
    count: total,
    onChange: (event: React.ChangeEvent<unknown>, item: number) => {
      onSelected(item);
    },
  });

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                className={classes.button}
                style={{ fontWeight: selected ? 'bold' : undefined }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" className={classes.button} {...item}>
                {type}
              </button>
            );
          }

          return <li key={`${type}-${page}`}>{children}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
