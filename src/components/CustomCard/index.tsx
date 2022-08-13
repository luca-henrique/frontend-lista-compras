import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';

import {Link} from 'react-router-dom';

type CustomCardProsp = {
  containerClass: string;
  children: React.ReactNode;
  footer?: React.ReactElement;
  link?: string;
  image?: string;
} & React.RefAttributes<HTMLAnchorElement>;

const CustomCard = ({
  containerClass,
  children,
  footer,
  link,
  image,
}: CustomCardProsp) => {
  return (
    <div className={containerClass}>
      <Link to={`${link}`}>
        <Card className='card'>
          <CardActionArea className='card-action-area'>
            {image && (
              <CardMedia
                component='img'
                className='card-img'
                image={image}
                height='100'
                title='image'
              />
            )}
            <CardContent className='card-content'>{children}</CardContent>
          </CardActionArea>

          {footer && footer}
        </Card>
      </Link>
    </div>
  );
};

export default CustomCard;
