import CustomCard from '../CustomCard';
import ListItemFooter from './ListItemFooter';
import {Typography, Checkbox} from '@material-ui/core';

import {Creators} from '../../store/actions/list';
import {useDispatch} from 'react-redux';

const ListItem = ({item}) => {
  const dispatch = useDispatch();

  console.log(item);

  return (
    <CustomCard
      containerClass='list-item'
      link='#'
      footer={<ListItemFooter item={item} />}
      image={item.image}
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
          <Typography component='p'>
            {item.quantity} {item.unity}
          </Typography>
          <Typography component='p'>R$ {item.price}</Typography>
        </div>
      </div>
    </CustomCard>
  );
};

export default ListItem;
