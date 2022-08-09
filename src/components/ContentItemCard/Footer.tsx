import {CardActions, Divider} from '@material-ui/core';
import {useSelector} from 'react-redux';

const ContentItemCardFooter = () => {
  const listItems = useSelector((state) => state.list.items);

  const total = listItems.reduce((total, item) => total + item.total, 0);

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
