import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

import {Creators as CreatorsListItem} from '../../store/actions/list';
import {useDispatch, useSelector} from 'react-redux';

import {Creator as CreatorsForm} from '../../store/actions/form';

const ListItemFooter = ({item}) => {
  const dispatch = useDispatch();

  const {list} = useSelector((state) => state.list);

  return (
    <div className='list-card-footer'>
      <div className='list-card-footer-actions'>
        <FontAwesomeIcon
          icon={faPen}
          color='#00b0ff'
          size='1x'
          onClick={() =>
            dispatch(CreatorsForm.updateProductRequest(list, item))
          }
        />
        <FontAwesomeIcon
          icon={faTrash}
          color='#e91e63'
          size='1x'
          onClick={() => dispatch(CreatorsListItem.deleteProduct(item.id))}
        />
      </div>
      <p className='card-price'>Total: R$ {item.total}</p>
    </div>
  );
};

export default ListItemFooter;
