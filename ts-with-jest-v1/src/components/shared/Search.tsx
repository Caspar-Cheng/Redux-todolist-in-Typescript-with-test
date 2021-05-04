import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useActions from '../hooks/useActions';
import useSelector from '../hooks/useSelector';

const Search: React.FC = () => {
  const [toInput, setToInput] = React.useState(false);
  const [input, setInput] = React.useState('');
  const { searchForm } = useActions();
  const { loading } = useSelector((state) => state.user);

  const onSubmit = () => {
    setToInput(!toInput);
    searchForm(input);
  };
  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setToInput(!input)}
      >
        Search?
      </Button>
      {loading && <p>searching...</p>}

      {toInput && (
        <div>
          <TextField
            label="Search field"
            type="search"
            style={{ width: 300 }}
            margin="normal"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="outlined" color="primary" onClick={onSubmit}>
            Go!
          </Button>
        </div>
      )}
    </>
  );
};

export default Search;
