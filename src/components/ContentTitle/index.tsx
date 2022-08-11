import CustomCard from '../CustomCard';

import {Creators} from '../../store/actions/list';
import {useDispatch} from 'react-redux';

const ContentItemCard = () => {
  const dispatch = useDispatch();

  return (
    <CustomCard containerClass='new-list-container' link='/create-list'>
      <div onClick={() => dispatch(Creators.newList())}>
        <p className='title'>Adicionar novas Listas!</p>
      </div>
    </CustomCard>
  );
};

export default ContentItemCard;
