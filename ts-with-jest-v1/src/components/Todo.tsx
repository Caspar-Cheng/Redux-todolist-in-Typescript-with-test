import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Submittion from './Form';
import List from './List';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const Todo: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Submittion />
        </Grid>
        <Grid item xs={8}>
          <List />
        </Grid>
      </Grid>
    </div>
  );
};

export default Todo;
