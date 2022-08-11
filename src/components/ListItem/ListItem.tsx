import CustomCard from '../CustomCard';
import ListItemFooter from './ListItemFooter';
import {Typography, Checkbox} from '@material-ui/core';

import {Creators} from '../../store/actions/list';
import {useDispatch} from 'react-redux';

const ListItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <CustomCard
      containerClass='list-item'
      link='#'
      footer={<ListItemFooter total={item.total} id={item.id} />}
      image='http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg'
    >
      <div>
        <div className='list-item-header'>
          <Typography variant='subtitle1' component='h2'>
            {item.productName}
          </Typography>
          <Checkbox
            checked={item.checked}
            onClick={() => dispatch(Creators.toggleProduct(item.id))}
          />
        </div>
        <div>
          <Typography>
            {item.quantity} {item.unity}
          </Typography>
          <Typography>R$ {item.price}</Typography>
        </div>
      </div>
    </CustomCard>
  );
};

export default ListItem;
