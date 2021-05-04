/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

interface GridProps {
  col1: string;
  col2: string;
  col3?: string;
  onChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isList: boolean;
  id: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RowGrid: React.FC<GridProps> = ({
  col1,
  col2,
  col3,
  onChecked,
  isList,
  id,
  onClick,
}: GridProps) => {
  return (
    <div
      style={{
        marginTop: 5,
        borderBottom: '1px solid',
        borderColor: 'lightgrey',
      }}
    >
      <Grid
        container
        spacing={0}
        style={{ flexGrow: 1, textAlign: 'center' }}
        key={id}
      >
        <Grid item xs={2}>
          <Checkbox
            color="primary"
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            onChange={onChecked}
          />
        </Grid>

        {col1 && (
          <Grid item xs={4}>
            {isList && (
              <Link
                to={`/todo/${id}`}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                {col1}
              </Link>
            )}
            {!isList && col1}
          </Grid>
        )}
        {col2 && (
          <Grid item xs={3}>
            {col2}
          </Grid>
        )}

        <Grid item xs={3}>
          {isList && (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={onClick}
            >
              Delete
            </Button>
          )}
          {!isList && col3}
        </Grid>
      </Grid>
    </div>
  );
};

export default RowGrid;
