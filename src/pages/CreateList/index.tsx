import './style.css';
import FormList from './Form';
import ListItem from '../../components/ListItem/ListItem';

const CreateList = () => {
  return (
    <div className='page-container'>
      <FormList />
      <div className='list-items-container'>
        <ListItem />
      </div>
    </div>
  );
};

export default CreateList;
