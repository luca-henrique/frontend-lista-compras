import './style.css';
import FormList from './Form';
import ListItem from '../../components/ListItem/ListItem';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router';

import NewItem from './NewItem';

const CreateList = () => {
  const {items} = useSelector((state) => state.list);

  const params = useParams();

  return (
    <div className='page-container'>
      <FormList />
      <div className='list-items-container'>
        {items.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
      </div>

      {params.action === 'editar' && <NewItem />}
    </div>
  );
};

export default CreateList;
