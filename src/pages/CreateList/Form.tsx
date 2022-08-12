import {
  InputAdornment,
  MenuItem,
  Button,
  TextField,
  Select,
} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const units = ['Quilos', 'Litros', 'Unidades'];

import {v1 as uuidv1} from 'uuid';

import {Creators as ListActions} from '../../store/actions/list';
import {Creator as FormActions} from '../../store/actions/form';
import {useParams} from 'react-router';

const FormList = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [unity, setUnity] = useState('');
  const [showError, setShowError] = useState(false);

  const {action, product} = useSelector((state) => state.form);
  const listUpdated = useSelector((state) => state.form.list);

  const router = useParams();
  console.log(router);

  useEffect(() => {
    if (action === 'update' && product) {
      setProductName(product.productName);
      setQuantity(product.quantity);
      setUnity(product.unity);
      setPrice(product.price);
      setShowError(false);
    }
  }, [action]);

  const addProductList = (e) => {
    e.preventDefault();

    if (!list || !productName || !quantity || !unity || !price || !list) {
      setShowError(true);
    } else {
      const product = {
        id: uuidv1(),
        productName,
        quantity,
        unity,
        price,
      };

      if (action === 'update') {
        updateProduct(list, product);
      } else {
        addProduct(list, product);
      }

      clearForm();
    }
  };

  function clearForm() {
    setProductName('');
    setQuantity('');
    setUnity('');
    setPrice('');
    setShowError(false);
  }

  function updateProduct(list, updateProduct) {
    dispatch(
      ListActions.updateProduct(
        {...updateProduct, id: product.id, checked: product.checked},
        listUpdated,
      ),
    );
    dispatch(FormActions.updateProductSuccess());
  }

  function addProduct(list, newProduct) {
    dispatch(ListActions.addProductRequest(list, newProduct));
  }

  const showForm = router.action === 'novo' || action === 'update';

  if (!showForm) {
    return <></>;
  }

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
        <Button variant='outlined' color='secondary' type='submit'>
          Salvar
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
