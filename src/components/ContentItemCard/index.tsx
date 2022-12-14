import CustomCard from '../CustomCard';

import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';

import ContentItemCardFooter from './Footer';
import ListItem from './ListItem';
import {useSelector} from 'react-redux';

import {getOpenedItems, getClosedItems} from '../../store/reducers/list';
import {useEffect, useState} from 'react';

const ContentTitle = () => {
  const title = useSelector((state) => state.list.list);

  const state = useSelector((state) => state);

  const [item, setItem] = useState({});

  useEffect(() => {
    setItem({
      opened: getOpenedItems(state),
      closed: getClosedItems(state),
    });
  }, [state]);

  return (
    <CustomCard
      containerClass='list-container'
      footer={<ContentItemCardFooter />}
      link='/lista/editar'
    >
      <div>
        <p className='title'>{title}</p>
        <div className='list-card-body'>
          <ListItem
            icon={faShoppingBasket}
            description={`${item.opened} Item(s) restantes`}
          />
          <ListItem
            icon={faCheck}
            description={`${item.closed} Item(s) restantes`}
          />
        </div>
      </div>
    </CustomCard>
  );
};

export default ContentTitle;
