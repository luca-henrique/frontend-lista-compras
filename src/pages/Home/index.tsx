import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
} from '@material-ui/core';

import './style.css';

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
    </div>
  );
};

export default Home;
