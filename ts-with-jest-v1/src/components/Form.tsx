/* eslint-disable no-alert */
import React from 'react';
import { v4 as uuid } from 'uuid';
import update from 'immutability-helper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputField from './shared/InputField';
import useActions from './hooks/useActions';
import useSelector from './hooks/useSelector';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5),
      padding: '10px 0px 20px 70px',
      border: ' 1px solid ',
      borderColor: 'lightgrey',
      borderRadius: 10,
    },
    button: {
      marginTop: theme.spacing(1),
    },
  })
);

interface State {
  id: string | number;
  description: string;
  category: string;
  content: string;
  lastModifiedDate: Date | null;
  select: boolean;
}

const initialState = {
  id: '',
  description: '',
  category: '',
  content: '',
  lastModifiedDate: null,
  select: false,
};

const Submittion: React.FC = () => {
  const styles = useStyles();
  const { addForm } = useActions();
  const { loading } = useSelector((state) => state.user);

  const [form, setForm] = React.useState<State>(initialState);

  const onSubmit = () => {
    if (!!form.description && !!form.content && !!form.category) {
      form.lastModifiedDate = new Date();
      addForm(form);
    } else {
      alert('Please finish filling required field.');
    }
    setForm(initialState);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = update(form, {
      [event.target.name]: { $set: event.target.value },
      id: { $set: uuid() },
      select: { $set: false },
    });
    setForm(value);
  };

  return (
    <div className={styles.root}>
      <InputField
        select={false}
        multiline={false}
        title="Description"
        name="description"
        value={form.description}
        onChange={onInputChange}
      />

      <InputField
        select
        multiline={false}
        title="Category"
        name="category"
        value={form.category}
        onChange={onInputChange}
      />

      <InputField
        select={false}
        multiline
        title="Content"
        name="content"
        value={form.content}
        onChange={onInputChange}
      />

      <div className={styles.button}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          endIcon={<SaveIcon />}
          onClick={onSubmit}
        >
          Submit
        </Button>
        {loading && <p>sumbitting...</p>}
      </div>
    </div>
  );
};

export default Submittion;
