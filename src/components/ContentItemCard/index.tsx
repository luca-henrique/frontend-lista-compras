import CustomCard from '../CustomCard';

import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';

import ContentItemCardFooter from './Footer';
import ListItem from './ListItem';
import {useSelector} from 'react-redux';

const ContentTitle = () => {
  const title = useSelector((state) => state.list.list);

  return (
    <CustomCard
      containerClass='list-container'
      footer={<ContentItemCardFooter />}
      link='/create-list'
    >
      <div>
        <p className='title'>{title}</p>
        <div className='list-card-body'>
          <ListItem icon={faShoppingBasket} description='1 Item(s) restante' />
          <ListItem icon={faCheck} description='2 Item(s) comprados' />
        </div>
      </div>
    </CustomCard>
  );
};

export default ContentTitle;
