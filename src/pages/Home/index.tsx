import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
} from '@material-ui/core';

import './style.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='page-container'>
      <div className='new-list-container'>
        <Card className='card'>
          <CardActionArea className='card-action-area'>
            <CardContent className='card-content'>
              <div>
                <p className='title'>Adicionar novas Listas!</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className='list-container'>
        <Card className='card'>
          <CardActionArea className='card-action-area'>
            <CardContent className='card-content'>
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
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions className='card-footer'>
            <p>01/01/2022</p>
            <p>100.00</p>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Home;
