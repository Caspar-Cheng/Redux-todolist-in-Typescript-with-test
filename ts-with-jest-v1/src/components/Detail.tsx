import React from 'react';
import update from 'immutability-helper';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputField from './shared/InputField';
import useActions from './hooks/useActions';
import useSelector from './hooks/useSelector';

const Detail: React.FC = () => {
  const paID = useParams<{ id: string }>();
  const { id } = paID;
  const { data } = useSelector((state) => state.user);
  const { updateForm } = useActions();
  const selectedForm = data.filter(
    (d: Record<string, string>) => d.id.toString() === id
  )[0];
  const [form, setForm] = React.useState(selectedForm);
  const [toEdit, setToEdit] = React.useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = update(form, {
      [event.target.name]: { $set: event.target.value },
    });
    setForm(changedValue);
  };

  const onSubmit = () => {
    setToEdit(!toEdit);
    updateForm(form);
  };

  return (
    <main
      style={{
        margin: '20px 0px 10px 20px',
      }}
    >
      {toEdit ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <InputField
            select={false}
            multiline={false}
            title="Description"
            name="description"
            value={form.description}
            onChange={onChange}
          />
          <InputField
            select
            multiline={false}
            title="Category"
            name="category"
            value={form.category}
            onChange={onChange}
          />
          <InputField
            select={false}
            multiline
            title="Content"
            name="content"
            value={form.content}
            onChange={onChange}
          />
        </div>
      ) : (
        <div>
          <h2>Description: {form.description}</h2>
          <br />
          <h2>Category: {form.category}</h2>
          <br />
          <h2>Content: {form.content}</h2>
        </div>
      )}
      <div>
        {!toEdit && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setToEdit(!toEdit)}
          >
            Edit?
          </Button>
        )}
        {toEdit && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={onSubmit}
            disabled={!toEdit}
          >
            Submit
          </Button>
        )}
      </div>
    </main>
  );
};

export default Detail;
