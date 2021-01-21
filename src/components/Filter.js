import { TextField } from '@material-ui/core'

const Filter = ({ setFilter }) => {
  return (
    <TextField
      id='standard-basic'
      label='filter by name'
      variant='outlined'
      onChange={({ target }) => setFilter(target.value)}
    />
  );
}

export default Filter;