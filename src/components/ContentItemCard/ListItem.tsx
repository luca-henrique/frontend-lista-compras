import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const ContentListItem = ({icon, description}) => {
  return (
    <div className='list-card-item'>
      <FontAwesomeIcon icon={icon} size='sm' />
      <p>{description}</p>
    </div>
  );
};

export default ContentListItem;
