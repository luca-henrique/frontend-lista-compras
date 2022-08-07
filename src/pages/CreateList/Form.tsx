import {InputAdornment, MenuItem, Button, TextField} from '@material-ui/core';

const units = ['kg', 'lt', 'un'];

const FormList = () => {
  return (
    <form className='form-container'>
      <div>
        <TextField
          label='Lista'
          name='list'
          value={''}
          onChange={() => {}}
          required
        />
        <Button variant='contained' color='secondary'>
          Adicionar
        </Button>
      </div>
      <div
        style={{
          gap: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
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
          fullWidth
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
          fullWidth
        />

        <TextField
          label='Preço'
          name='price'
          value={''}
          onChange={() => {}}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>R$</InputAdornment>
            ),
          }}
        />
      </div>
    </form>
  );
};

export default FormList;
