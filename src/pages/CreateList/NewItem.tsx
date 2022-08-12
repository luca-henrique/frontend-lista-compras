import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../../components/CustomCard';

import {Creator as ActionForm} from '../../store/actions/form';
import {useDispatch, useSelector} from 'react-redux';

const NewItem = () => {
  const dispatch = useDispatch();

  const {list} = useSelector((state) => state.list);

  return (
    <CustomCard link='#' containerClass='list-item'>
      <div
        onClick={() => dispatch(ActionForm.createProductRequest(list))}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p className='title'>Novo Produto</p>
        <FontAwesomeIcon icon={faPlusCircle} color='#e4e4e4' size='8x' />
      </div>
    </CustomCard>
  );
};

export default NewItem;
