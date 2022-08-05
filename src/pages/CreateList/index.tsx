import TextField from '@material-ui/core/TextField';
import {InputAdornment, MenuItem, Button} from '@material-ui/core';

const units = ['kg', 'lt', 'un'];

import './style.css';
import CustomCard from '../../components/CustomCard';

const CreateList = () => {
  return (
    <div className='page-container'>
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
            startAdornment: (
              <InputAdornment position='start'>R$</InputAdornment>
            ),
          }}
        />
        <Button variant='outlined' color='secondary'>
          Adicionar
        </Button>
      </form>
    </div>
  );
};

export default CreateList;
