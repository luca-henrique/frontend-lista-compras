import {CardActions, Divider} from '@material-ui/core';
import {useSelector} from 'react-redux';

import {getListTotal} from '../../store/reducers/list';

const ContentItemCardFooter = () => {
  const total = useSelector((state) => getListTotal(state));

  const date = useSelector((state) => state.list.date);

  return (
    <>
      <Divider />
      <CardActions className='card-footer'>
        <p>{date}</p>
        <p>R$ {total}</p>
      </CardActions>
    </>
  );
};

export default ContentItemCardFooter;
