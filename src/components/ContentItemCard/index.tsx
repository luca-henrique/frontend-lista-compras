import CustomCard from '../CustomCard';

import {CardActions, Divider} from '@material-ui/core';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';

const ContentTitle = () => {
  const footer = () => {
    return (
      <>
        <Divider />
        <CardActions className='card-footer'>
          <p>01/01/2022</p>
          <p>100.00</p>
        </CardActions>
      </>
    );
  };

  return (
    <CustomCard containerClass='list-container' footer={footer}>
      <div>
        <p className='title'>Mês</p>
        <div className='list-card-body'>
          <div className='list-card-item'>
            <FontAwesomeIcon icon={faShoppingBasket} size='sm' />
            <p>Item(s) restante</p>
          </div>
          <div className='list-card-item'>
            <FontAwesomeIcon icon={faCheck} size='sm' />
            <p>Item(s) comprados</p>
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default ContentTitle;
