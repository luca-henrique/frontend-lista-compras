import {InputAdornment, MenuItem, Button, TextField} from '@material-ui/core';

const units = ['kg', 'lt', 'un'];

const FormList = () => {
  return (
    <form className='form-container'>
      <TextField
        label='Lista'
        name='list'
        value={''}
        onChange={() => {}}
        required
      />
      <TextField
        label='Produto'
        name='product'
        value={''}
        onChange={() => {}}
        required
      />

      <TextField
        label='Quantidade'
        name='quantity'
        value={''}
        onChange={() => {}}
        required
        select
      >
        {units.map((option) => {
          return <MenuItem key={option}>{option}</MenuItem>;
        })}
      </TextField>

      <TextField
        label='Unidade'
        name='unity'
        value={''}
        onChange={() => {}}
        required
      />

      <TextField
        label='Preço'
        name='price'
        value={''}
        onChange={() => {}}
        InputProps={{
          startAdornment: <InputAdornment position='start'>R$</InputAdornment>,
        }}
      />
      <Button variant='contained' color='secondary'>
        Adicionar
      </Button>
    </form>
  );
};

export default FormList;
