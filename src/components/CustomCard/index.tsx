import {Card, CardActionArea, CardContent} from '@material-ui/core';

type CustomCardProsp = {
  containerClass: string;
  children: React.ReactNode;
  footer?: React.ReactElement;
};

const CustomCard = ({containerClass, children, footer}: CustomCardProsp) => {
  return (
    <div className={containerClass}>
      <Card className='card'>
        <CardActionArea className='card-action-area'>
          <CardContent className='card-content'>{children}</CardContent>
        </CardActionArea>

        {footer && footer}
      </Card>
    </div>
  );
};

export default CustomCard;
