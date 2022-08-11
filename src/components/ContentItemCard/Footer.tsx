import {CardActions, Divider} from '@material-ui/core';
import {useSelector} from 'react-redux';

import {getListTotal} from '../../store/reducers/list';

const ContentItemCardFooter = () => {
  const total = useSelector((state) => getListTotal(state));

  return (
    <>
      <Divider />
      <CardActions className='card-footer'>
        <p>01/01/2022</p>
        <p>R$ {total}</p>
      </CardActions>
    </>
  );
};

export default ContentItemCardFooter;
