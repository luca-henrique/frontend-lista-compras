import {Card, CardActionArea, CardContent} from '@material-ui/core';

import {Link} from 'react-router-dom';

type CustomCardProsp = {
  containerClass: string;
  children: React.ReactNode;
  footer?: React.ReactElement;
  link?: string;
} & React.RefAttributes<HTMLAnchorElement>;

const CustomCard = ({
  containerClass,
  children,
  footer,
  link,
}: CustomCardProsp) => {
  return (
    <div className={containerClass}>
      <Link to={`/${link}`}>
        <Card className='card'>
          <CardActionArea className='card-action-area'>
            <CardContent className='card-content'>{children}</CardContent>
          </CardActionArea>

          {footer && footer}
        </Card>
      </Link>
    </div>
  );
};

export default CustomCard;
