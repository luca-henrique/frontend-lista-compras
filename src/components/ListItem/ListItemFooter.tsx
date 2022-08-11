import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

import {Creators as CreatorsListItem} from '../../store/actions/list';
import {useDispatch} from 'react-redux';

const ListItemFooter = ({total, id}) => {
  const dispatch = useDispatch();

  return (
    <div className='list-card-footer'>
      <div className='list-card-footer-actions'>
        <FontAwesomeIcon icon={faPen} color='#00b0ff' size='1x' />
        <FontAwesomeIcon
          icon={faTrash}
          color='#e91e63'
          size='1x'
          onClick={() => dispatch(CreatorsListItem.deleteProduct(id))}
        />
      </div>
      <p className='card-price'>Total: R$ {total}</p>
    </div>
  );
};

export default ListItemFooter;
