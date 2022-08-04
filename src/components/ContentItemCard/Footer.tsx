import {CardActions, Divider} from '@material-ui/core';

const ContentItemCardFooter = () => {
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

export default ContentItemCardFooter;
