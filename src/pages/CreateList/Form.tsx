import {
  InputAdornment,
  MenuItem,
  Button,
  TextField,
  Select,
} from '@material-ui/core';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const units = ['Kilos', 'Litros', 'Unidades'];

import {Creators as ListActions} from '../../store/actions/list';

const FormList = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [unity, setUnity] = useState('');
  const [showError, setShowError] = useState(false);

  const state = useSelector((state) => state);

  const addProductList = (e) => {
    e.preventDefault();

    if (!list || !productName || !quantity || !unity || !price || !list) {
      setShowError(true);
    } else {
      const product = {
        productName,
        quantity,
        unity,
        price,
      };
      dispatch(ListActions.addProductRequest(list, product));
      setProductName('');
      setQuantity('');
      setUnity('');
      setPrice('');
    }
  };

  return (
    <form className='form-container' onSubmit={addProductList}>
      <div>
        <TextField
          label='Lista'
          name='list'
          value={list}
          onChange={(event) => setList(event.target.value)}
          required
          error={showError && !list}
        />
        <Button variant='contained' color='secondary' type='submit'>
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
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          required
          error={showError && !productName}
        />

        <Select
          label='Unidade'
          name='unity'
          value={unity}
          onChange={(event) => {
            setUnity(event.target.value);
          }}
          required
          style={{width: '160px'}}
          error={showError && !unity}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {units.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>

        <TextField
          label='Quantidade'
          name='quantity'
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
          fullWidth
          error={showError && !quantity}
        />

        <TextField
          label='Preço'
          name='price'
          value={price}
          onChange={(event) => setPrice(event.target.value)}
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
