import './style.css';
import FormList from './Form';
import ListItem from '../../components/ListItem/ListItem';
import {useSelector} from 'react-redux';

const CreateList = () => {
  const {items} = useSelector((state) => state.list);

  return (
    <div className='page-container'>
      <FormList />
      <div className='list-items-container'>
        {items.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CreateList;
